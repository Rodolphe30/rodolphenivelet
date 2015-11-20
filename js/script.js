jQuery(document).ready(function($) {

	var isMobile = false; //initiate as false
	// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    	|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

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
			var datawidth = $hex.data('width');
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
			$('.aboutme-section .my-face-container').css('transform', '');
		}
		$('.before-section').each(function(index, el) {
			var $beforesec = $(this);
			if (scrollTop+$win.height() > $beforesec.offset().top + $beforesec.height() - 10 || scrollTop > $beforesec.offset().top) {
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
		$('body').toggleClass('menuopened');
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
			"desc": "Micepage is an Angular.js based web application for businesses to create and manage events.<br/>My role in this project was to develop with the help of another angular developer, all the front-end interface and functionalities. I also had to take care or the email templates and PDF generation.",
			"link": "http://www.micepage.com/"
		},
		"virtualvendors": {
			"title": "Virtual Vendors",
			"subject": "Online real estate agency for australians",
			"team": "3 members, designer, front-end and back-end devs",
			"techno": "Angular.js / Laravel",
			"desc": "On this project I took care of all the front-end integration to make sure the website was pixel perfectly respecting the design.<br/><br/>Virtual Vendors in an online platform for Australians to sell, buy and rent properties.",
			"link": "http://virtualvendors.com.au/"
		},
		"capchya": {
			"title": "Capchya",
			"subject": "Online platform to store and share photos and videos",
			"team": "3 members, designer, front-end and back-end devs",
			"techno": "Angular.js / Laravel",
			"desc": "On Capchya I was in charge of the front-end interface. My goal was to animate the website based on my creativity and to follow the design perfectly.<br/><br/>Capchya is an online platform for sharing your photos and videos with people related to it.",
			"link": "http://cap-dev.built.digital/"
		},
		"creativeoasis": {
			"title": "Creative Oasis",
			"subject": "Australian creative agency website",
			"team": "2 members, designer and front-end dev",
			"techno": "Wordpress",
			"desc": "This is the Creative Oasis official website. Creative Oasis is a content marketing company working in Australia.<br/><br/>I created all the the system starting from front-end to wordpress functionalities.",
			"link": "http://creativeoasis.com.au/"
		},
		"built": {
			"title": "Built.Digital",
			"subject": "My own australian web agency website",
			"team": "2 members, designer and front-end dev",
			"techno": "Angular.js",
			"desc": "For our own digital agency website, I have created all the system with angular and the classic front-end technologies.",
			"link": "http://built.digital/"
		},
		"esport": {
			"title": "Esport Betting",
			"subject": "Betting platform for online game competitions",
			"team": "2 members, designer and front-end dev",
			"techno": "jQuery",
			"desc": "This is my favorite personal project of mine. Unfortunatly this project have not been finished for legal problems as betting have strict rules (particularely in France).",
			"link": "http://rodolphenivelet.github.io/Paris30/"
		},
		"huntedyard": {
			"title": "The Hunted Yard",
			"subject": "Event organisers website",
			"team": "2 members, designer and front-end dev",
			"techno": "Wordpress",
			"desc": "Just a simple but fancy wordpress website I have been developing for one of my client in Australia.",
			"link": "http://www.thehuntedyard.com.au/"
		},
		"awj": {
			"title": "AWJ Civil",
			"subject": "An australian construction company website",
			"team": "2 members, designer and front-end dev",
			"techno": "Wordpress / AJAX",
			"desc": "This big Australian constructing company asked us to build their new website after they have been relying on their old one for years.<br/>The result is fancy and simple. The client and users love it.",
			"link": "http://awj.com.au/"
		}
	}

	var workopened = false;

	function workChange($workselected){
		var $workdetails = $('.work-details');
		var worksubject = $workselected.data('work');
		var workinfoin = workinfos[worksubject];
		if (isMobile) {
			var win = window.open(workinfoin['link'], '_blank');
			if(win){
			    //Browser has allowed it to be opened
			    win.focus();
			}
		}else{
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






// (function() {

// 	var model = {
// 		init: function() {
// 			this.user = {
// 				name: '',
// 				bio '',
// 			}
// 		},

// 		getUser: function() {
// 			return this.user;
// 		}
// 	};

// 	var controller = {
// 		init: function() {
// 			model.init();
// 			view.init();
// 		},

// 		getUser: function() {
// 			return model.getUser();
// 		}

// 		calcMehtods function() {
// 		},

// 	};

// 	var view = {
// 		init: function() {
// 			this.nameElem = document.getElemenById('#name');
// 			this.render();
// 		},

// 		render: function() {
// 			var user = controller.getUser();
// 			this.nameElemn.html = user.name;
// 		},
// 	};

// 	controler.init();
// });

