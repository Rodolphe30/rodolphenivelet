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
		$('.hundredsection').height($win.height());
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
		$('.skillssvg .skills-separator').attr('points', separatorpoint);
		$('.skillssvg .designtitle').attr({
			'x': skillssvgwidth/2+10,
			'y': skillssvgheight-40
		});
		$('.skillssvg .progtitle').attr({
			'x': skillssvgwidth/2-10,
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
			if (scrollTop > $beforesec.offset().top - 10) {
				$beforesec.removeClass('before-section');
			}
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

});