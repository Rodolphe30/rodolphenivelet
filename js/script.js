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
			"desc": "My program of choice for all designs and photo editings.<br/><br/>I have always worked on photoshop but I am lately thinking about switching to Sketch or Illustrator for webdesigning."
		},
		"angular": {
			"title": "Angular.js",
			"level": "Intermediate",
			"desc": "Angular.js created by Google is a JavaScript library that helps you create Ajax driven web applications.<br/><br/>Combined with Typescript, Angular 2 becomes a really powerfull and maintainable front-end JS library."
		},
		"html": {
			"title": "HTML 5",
			"level": "Expert",
			"desc": "HTML 5 in the base fondation of every single project I work on.<br/><br/>After dealing with it for those past 5 year, I now consider myself as a veterant with it. HTML does not have any secret for me anymore."
		},
		"css": {
			"title": "CSS 3",
			"level": "Expert",
			"desc": "CSS 3 is a not missable part of web development. It allows you to bring life to an HTML structure.<br/><br/>After years of using it, I now know all type of little techniques and tips of CSS, experience thats keeps growing everyday as you will never know everything about CSS.<br/><br/>Over the years I have learned to slowly get rid of jQuery to exploit better CSS3 animations."
		},
		"js": {
			"title": "JavaScript",
			"level": "Mastered",
			"desc": "JavaScript is simply the future of web and maybe other domains in general.<br/><br/>How the code work makes it one of the fastest programation langage in both front-end and back-end sides.<br/><br/>The AJAX driven system such as angular.js or backbone.js are huge and more and more interesting.<br/><br/>It takes a really huge place in the way I develop a website but I still have much to learn."
		},
		"gulp": {
			"title": "Gulp",
			"level": "Intermediate",
			"desc": "Gulp is brand new workflow enhancer. Those kind of programs are kind of trendy lately as we see more and more of those start-ups trying to enhance developers and teams workflow.<br/><br/>Here I have putted gulp but I also know Grunt and other of those."
		},
		"agile": {
			"title": "Agile Methodology",
			"level": "Intermediate",
			"desc": "During the time I have worked in Australia, the philosophy has completely changed. We went to a waterfall methodology to an agile methodology.<br/><br/>We directly saw the results has the communication with clients, the respect of deadlines and the quality of our outcomes were immediatly improved."
		},
		"ajax": {
			"title": "AJAX JS",
			"level": "Intermediate",
			"desc": "Nowaday, AJAX takes a big importance in the way we think about front-end. Instead of refreching everything on each query, we now focus on the information that needs to be changed.<br/><br/>This is really game changer and we need to consider it as the future of front-end."
		},
		"jquery": {
			"title": "jQuery",
			"level": "Expert",
			"desc": "Even if jQuery is a bit outdated, it still has a big role to play in website development has it makes life so much easier.<br/><br/>The purists will always go with native javascript, but I think the time you save by using jQuery can not be overlooked."
		},
		"sass": {
			"title": "SASS",
			"level": "Mastered",
			"desc": "Like I was saying before I am lazy, that is why I am using tools like SASS or LESS for my project.<br/><br/>It is easier, more permissive, faster, and more maintainable. Their is no point of developing in native when you can use those kind of tools."
		},
		"php": {
			"title": "php",
			"level": "Intermediate",
			"desc": "PHP is one of the most popular back-end langage when you are building a web platform.<br/><br/>I know msot of it and have used it to build back-end applications using the MVC structure."
		},
		"github": {
			"title": "Git and version control",
			"level": "Mastered",
			"desc": "When you talk about project management and team working, you can not overlook Git.<br/><br/>This piece of genius allows members of a team to develop together at different places without disturbing each others.<br/><br/>Git also allows you to control your application by being able to go back on old versions of it.<br/><br/>Git is purely unavoidable and I personaly use it on every projects (even solo ones)."
		},
		"photo": {
			"title": "Photography",
			"level": "Passion",
			"desc": "For those pasts 5 years I have discovered myself a new hobbit which is the photography.<br/><br/>This helps me expend the design and artistic part of me to a whole new level."
		},
		"responsive": {
			"title": "Responsive design / Mobile first",
			"level": "Expert",
			"desc": "Nowaday of you think about building a website, you immediatly have to think about mobile. More than 50% of the market is now on mobile devices.<br/><br/>The way a develop and design my website is always focused on either responsive design or mobile first."
		},
		"svg": {
			"title": "SVG",
			"level": "Mastered",
			"desc": "With the expension of all the retina displays and 4K displays, font icons, SVG and other technologies are stating to take a huge place in website development, even though we still have compatibility problems."
		},
		"aftereffect": {
			"title": "After Effect CC",
			"level": "Intermediate",
			"desc": "I really love video editing and FX. I still have a medium level if after effect but this is something I do has a hobbit."
		},
		"premiere": {
			"title": "Premiere CC",
			"level": "Mastered",
			"desc": "Premiere is one of many video mounting and cutting program I have used.<br/><br/>I use it a lot on my spare time for some video projects."
		},
		"seo": {
			"title": "Search Engine Optimisation",
			"level": "Mastered",
			"desc": "As a front-end developer, SEO is the subject that interest me the most.<br/><br/>I have done some SEO analysis for clients I was working for in order to increase their natural ranking mainly on Google."
		},
		"illustrator": {
			"title": "Illustrator CC",
			"level": "Mastered",
			"desc": "I use Illustrator mainly for the creation of icons and logos. Photoshop is not self sufficient and Illustrator is the perfect complement.<br/><br/>I have also used it to design few websites has a complete vectorial tool has sketch is doing on mac."
		},
		"bootstrap": {
			"title": "Bootstrap CSS",
			"level": "Expert",
			"desc": "Bootstrap has been the most popular CSS framework for those past few years. I am using it a lot but now only for its responsive power but also for its power combined with SASS and its reset which is Normalize.css"
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
		$videoplayer.get(0).oncanplaythrough = function(){
			$videoplayer.get(0).play();
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