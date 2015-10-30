jQuery(document).ready(function($) {
	var $win = $(window);

	// $win.bind("load", function() {
	// 	$('body').removeClass('intro');
	// 	setTimeout(function(){
	// 		$('.intro-loading').remove();
	// 	},500);
	// });

	setTimeout(function(){
		$('body').removeClass('intro');
		setTimeout(function(){
			$('.intro-loading').remove();
		},1000);
	},2000);

	function responsive(){
		$('.hundredsection').outerHeight($win.height());
		$('.hexagone').each(function(index, el) {
			var $hex = $(this);
			var ecart = $hex.data('ecart');
			var hexwidth = $hex.width();
			var hexheight;
			if ($hex.data('solohexa') == 1) {
				hexheight = hexwidth/Math.sqrt(3)*2;
				$hex.height(hexheight);
			}
			else{
				hexheight = $hex.height();
			}
			var $hexin = $hex.find('.hexagone-in');
			$hexin.each(function(index, el) {
				var $hexinthis = $(this);
				var hexinwidth = hexwidth;
				var datawidth = $hexinthis.data('width');
				if (datawidth != null) {
					hexinwidth = datawidth;
				}
				var hexinheight = hexinwidth/Math.sqrt(3)*2;
				var dechor = 0;
				var decver = 0;
				if ($hexinthis.data('hor')) {
					dechor = $hexinthis.data('hor')*(datawidth+ecart);
				}
				if ($hexinthis.data('ver')) {
					decver = $hexinthis.data('ver')*(datawidth+ecart)/Math.sqrt(3);
				}
				var centerwidth = (hexwidth/2)-(hexinwidth/2)+dechor;
				var centerheight = (hexheight/2)-(hexinheight/2)+decver;
				var hexapoints = (centerwidth+hexinwidth/2) +','+ centerheight    +' '+    (centerwidth+hexinwidth) +','+ (centerheight+hexinheight/4)    +' '+    (centerwidth+hexinwidth) +','+ (centerheight+hexinheight/4*3)    +' '+    (centerwidth+hexinwidth/2) +','+ (centerheight+hexinheight)    +' '+    centerwidth +','+ (centerheight+hexinheight/4*3)    +' '+    centerwidth +','+ (centerheight+hexinheight/4);
				$hexinthis.attr('points', hexapoints);
				$hexinthis.next('.hexaskill-image').attr({
					'x': centerwidth,
					'y': centerheight+8
				});
			});
			$hex.find('.center-image').attr({
				'x': hexwidth/2-75,
				'y': hexheight/2-75
			});
		});
		var skillssvgwidth = $('.skillssvg').width();
		var skillssvgheight = $('.skillssvg').height();
		var separatorpoint = '0,0 '+ (skillssvgwidth/2-50)+',0 '+ (skillssvgwidth/2+50) +','+ skillssvgheight +' 0,'+ skillssvgheight;
		var separatorpointinv =  skillssvgwidth+',0 '+ skillssvgwidth+','+ skillssvgheight +' '+ (skillssvgwidth/2+50) +','+ skillssvgheight +' '+ (skillssvgwidth/2-50)+',0';
		$('.skillssvg .skills-separator').attr('points', separatorpoint);
		$('.mask-left').attr('points', separatorpoint);
		$('.mask-right').attr('points', separatorpointinv);
		$('.skillssvg .designtitle').attr({
			'x': skillssvgwidth/2+0,
			'y': skillssvgheight-40
		});
		$('.skillssvg .progtitle').attr({
			'x': skillssvgwidth/2-0,
			'y': 60
		});

	}

	responsive();

	$win.resize(function(event) {
		responsive();
	});

	$win.scroll(function(event) {
		var scrollTop = $win.scrollTop();
		var $aboutsec = $('.aboutme-section.before-section');
		if ($aboutsec.length) {
			var aboutstart = $aboutsec.offset().top;
			if (scrollTop < aboutstart) {
				var aboutdistance = aboutstart-scrollTop;
				aboutdistance /= aboutstart;
				$('.aboutme-section.before-section .my-face-container').css('transform', 'translateY(-'+ (aboutdistance*200) +'px) scale('+ (1-(aboutdistance*0.4)) +','+ (1-(aboutdistance*0.4)) +')');
			}
		}
		else{
			$('.aboutme-section .my-face-container').css('transform', 'translateY(0px) scale(1, 1)');
		}
		$('.before-section').each(function(index, el) {
			var $beforesec = $(this);
			if (scrollTop+$win.height() > $beforesec.offset().top + $beforesec.height() - 10) {
				$beforesec.removeClass('before-section').addClass('before-anim');
				setTimeout(function(){
					$beforesec.removeClass('before-anim');
				},2000);
			}
		});
		$('.scroll-section').each(function(index, el) {
			var $scrollSection = $(this);
			var sectionTop = $scrollSection.offset().top - 1;
			var sectionBtm = sectionTop + $scrollSection.outerHeight();
			var	sectioncode = $scrollSection.attr('id');
			var $aimedLink = $('.nav-hexa .scrollto.'+ sectioncode);
			if (sectionTop < scrollTop && scrollTop < sectionBtm) {
				$aimedLink.attr('class', 'scrollto active '+ sectioncode);
			}
			else{
				$aimedLink.attr('class', 'scrollto '+ sectioncode);
			}
			lastBtm = sectionBtm;
		});
	});

	$('.arrowdown .hexagone-in').bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
	  $(this).attr('class', 'hexagone-in');
	});

	$('.arrowdown .hexagone-in').hover(function(){
	  $(this).attr('class', 'hexagone-in animated');
	});

	$('.hamburger').click(function(event) {
		$('.hamburger, .nav-slide-container').toggleClass('opened');
		$('.nav-slide-container').removeClass('first');
	});

	var $skillsingle = $('.skill-single');

	var skillinfos = {
		"photoshop": {
			"title": "Photoshop CC",
			"level": "Expert",
			"desc": "Angular"
		},
		"angular": {
			"title": "Angular.js",
			"level": "Intermediate",
			"desc": "Angular"
		},
		"html": {
			"title": "HTML 5",
			"level": "Expert",
			"desc": "Angular"
		},
		"css": {
			"title": "CSS 3",
			"level": "Expert",
			"desc": "Angular"
		},
		"js": {
			"title": "JavaScript",
			"level": "Mastered",
			"desc": "Angular"
		},
		"gulp": {
			"title": "Gulp",
			"level": "Intermediate",
			"desc": "Angular"
		},
		"agile": {
			"title": "Agile Methodology",
			"level": "Intermediate",
			"desc": "Angular"
		},
		"ajax": {
			"title": "AJAX JS",
			"level": "Intermediate",
			"desc": "Angular"
		},
		"jquery": {
			"title": "jQuery",
			"level": "Expert",
			"desc": "Angular"
		},
		"sass": {
			"title": "SASS",
			"level": "Mastered",
			"desc": "Angular"
		},
		"php": {
			"title": "php",
			"level": "Intermediate",
			"desc": "Angular"
		},
		"github": {
			"title": "Git and version control",
			"level": "Mastered",
			"desc": "Angular"
		},
		"photo": {
			"title": "Photography",
			"level": "Passion",
			"desc": "Angular"
		},
		"responsive": {
			"title": "Responsive design / Mobile first",
			"level": "Expert",
			"desc": "Angular"
		},
		"svg": {
			"title": "SVG",
			"level": "Mastered",
			"desc": "Angular"
		},
		"aftereffect": {
			"title": "After Effect CC",
			"level": "Intermediate",
			"desc": "Angular"
		},
		"premiere": {
			"title": "Premiere CC",
			"level": "Mastered",
			"desc": "Angular"
		},
		"seo": {
			"title": "Search Engine Optimisation",
			"level": "Mastered",
			"desc": "Angular"
		},
		"illustrator": {
			"title": "Illustrator CC",
			"level": "Mastered",
			"desc": "Angular"
		},
		"bootstrap": {
			"title": "Bootstrap CSS",
			"level": "Expert",
			"desc": "Angular"
		}
	}

	function skillhover(skill,position){
		var skillinfoin = skillinfos[skill];
		var $skillsingleBlock = $('.skill-description.desc-'+ position);
		$skillsingleBlock.find('.skill-description-title').html(skillinfoin['title']);
		$skillsingleBlock.find('.skill-description-level').html(skillinfoin['level']);
		$skillsingleBlock.find('.skill-description-text').html(skillinfoin['desc']);
		$('.mask-'+ position +', .skill-description.desc-'+ position).stop().fadeIn(200);
	}

	function skillfade(){
		$('.skill-description, .mask-left, .mask-right').stop().fadeOut(500);
	}

	$('.skillssvg .design .skill-single').hover(function() {
		var skill = $(this).data('skill');
		skillhover(skill,'left');
	}, function() {
		skillfade();
	});

	$('.skillssvg .programation .skill-single').hover(function() {
		var skill = $(this).data('skill');
		skillhover(skill,'right');
	}, function() {
		skillfade();
	});


	var workinfos = {
		"micepage": {
			"title": "Micepage",
			"subject": "Event organiser for businesses",
			"team": "4 members, designer, 2 front-end and 1 back-end dev",
			"techno": "Angular.js / Laravel",
			"desc": "Angular",
			"link": "http://beta.micepage.com/"
		},
		"virtualvendors": {
			"title": "Virtual Vendors",
			"subject": "Online real estate agency for australians",
			"team": "3 members, designer, front-end and back-end devs",
			"techno": "Angular.js / Laravel",
			"desc": "Angular",
			"link": "http://virtualvendors.com.au/"
		},
		"capchya": {
			"title": "Capchya",
			"subject": "Online platform to store and share photos and videos",
			"team": "3 members, designer, front-end and back-end devs",
			"techno": "Angular.js / Laravel",
			"desc": "Angular",
			"link": "http://cap-dev.built.digital/"
		},
		"creativeoasis": {
			"title": "Creative Oasis",
			"subject": "Australian creative agency website",
			"team": "2 members, designer and front-end dev",
			"techno": "Wordpress",
			"desc": "Angular",
			"link": "http://creativeoasis.com.au/"
		},
		"built": {
			"title": "Built.Digital",
			"subject": "My own australian web agency website",
			"team": "2 members, designer and front-end dev",
			"techno": "Angular.js",
			"desc": "Angular",
			"link": "http://built.digital/"
		},
		"esport": {
			"title": "Esport Betting",
			"subject": "Betting platform for online game competitions",
			"team": "2 members, designer and front-end dev",
			"techno": "jQuery",
			"desc": "Angular",
			"link": "http://beta.micepage.com/"
		},
		"huntedyard": {
			"title": "The Hunted Yard",
			"subject": "Event organisers website",
			"team": "2 members, designer and front-end dev",
			"techno": "Wordpress",
			"desc": "Angular",
			"link": "http://test.thehuntedyard.com.au/"
		},
		"awj": {
			"title": "AWJ Civil",
			"subject": "An australian construction company website",
			"team": "2 members, designer and front-end dev",
			"techno": "Wordpress / AJAX",
			"desc": "Angular",
			"link": "http://awj.com.au/"
		}
	}

	var workopened = false;

	function workChange($workselected){
		var $workdetails = $('.work-details');
		var worksubject = $workselected.data('work');
		var workinfoin = workinfos[worksubject];
		$workdetails.find('.work-title').html(workinfoin['title']);
		$workdetails.find('.work-subject').html(workinfoin['subject']);
		$workdetails.find('.work-team').html(workinfoin['team']);
		$workdetails.find('.work-techno').html(workinfoin['techno']);
		$workdetails.find('.work-description').html(workinfoin['desc']);
		$workdetails.find('.work-link').attr('href',workinfoin['link']);
		$workdetails.find('.video-mp4').attr('src','images/videos/mp4/'+ worksubject +'.mp4');
		var $videoplayer = $workdetails.find('.work-background-video');
		$videoplayer.hide();
		$videoplayer.get(0).load();
		$videoplayer.get(0).play();
		$videoplayer.get(0).onplay = function(){
			$videoplayer.show();
		};
		$('.work-details-wrapper').addClass('active');
		workopened = true;
	}

	$('.work-single').click(function(event) {
		var $workselected = $(this);
		if (!$workselected.hasClass('active')) {
			$('.work-single.active').removeClass('active');
			$workselected.addClass('active');
			$('.work-list-inside').addClass('active');
			if (workopened) {
				$('.work-details-wrapper').removeClass('active');
				setTimeout(function(){
					workChange($workselected);
				}, 600);
			}
			else{
				workChange($workselected);
			}
		}
		else{
			$('.work-single.active,.work-details-wrapper,.work-list-inside').removeClass('active');
		}

	});


	function scrollTo(section,functionAfter){

		$('body,html').animate({
			scrollTop: section
		},800,functionAfter);
	}



	$('.scrollto').click(function(event) {
		var $self = $(this);
		event.preventDefault();
		var hash = $self.data('scrollto');
		var scrollToSection = $(hash).offset().top;
		var functionAfter = function(){
			window.location = hash;
		}
		scrollTo(scrollToSection,functionAfter);
	});

});