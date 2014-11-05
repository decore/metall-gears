$(document).ready(function(){
	$('input[placeholder], textarea[placeholder]').placeholder();
	//Parallax
	var s = skrollr.init({
		forceHeight: false
	});

//Window scroll
	$(window).scroll(function(e){
		e.preventDefault();
		var winScroll = $(this).scrollTop();
		if (winScroll > 0){
			$('.btn-scroll').css('display', 'block');
		} else
		{
			$('.btn-scroll').css('display', 'none');
		}
	});
	$('.btn-scroll, .web-logo').click(function(){
		$('html, body').animate({scrollTop:0}, 2000, 'easeInOutQuad');
		
	})

//Phone rotate
	$(window).scroll(function(){
		$('.btn-phone').animate({rotate: '10'}, 500).animate({rotate: '-10'}, 500);
	})

// Service-detailes
	$('.without-mess .how .border-rhombus').click(function(){
		$('.without-mess .how .border-rhombus').removeClass('active');
		$(this).addClass('active');
	});
	$('.service-details .btn-close').click(function(){
		$(this).parent().parent().removeClass('active');
		$('.without-mess .how .border-rhombus').removeClass('active');
	});

// Catalog
	//Slide arrow
	$('.header .header-menu a, .product-gallery a').click(function(){
		var id = $(this).attr('href');
		if (id == '#1'){
			$('.catalog .arrow').css('left', '178px');
		} else
			if (id == '#2'){
				$('.catalog .arrow').css('left', '413px');
			} else
				if (id == '#3'){
					$('.catalog .arrow').css('left', '660px');
				} else
					if (id == '#4'){
						$('.catalog .arrow').css('left', '897px');
					}
		$('.product-gallery img').removeClass('active');
		$('.product-gallery a[href='+id+']').find('img').addClass('active');
	});
	//Open catalog
	$('.product-gallery a, .header .header-menu a:lt(4)').click(function(){
		$('.catalog-wrap').slideDown(200);
		var wow = new WOW({
			boxClass: 'wow',      // default
			animateClass: 'animated', // default
			offset: 0          // default
			})
		wow.init();
		$('html, body').animate({ 
				'scrollTop': $(".product-gallery").offset().top -200 
			}, 500);
	});
	//Close catalog
	$('.catalog-wrap .arrow-close').click(function(){
		$('.catalog-wrap').slideUp(500);
		$('.product-gallery img').removeClass('active');
		$('html, body').animate({ 
				'scrollTop': $('.product-gallery').offset().top -200 
			}, 500, 'swing');
	});
	// Slider in catalog
	$('#coda-slider').codaSlider({
		dynamicArrows: false
	});
	// Hover effect in catalog
	$('.product-item').mouseenter(function(){
		$(this).find('.btn-orange').fadeIn(300).animate({bottom: '-18'}, 300);
	}).mouseleave(function(){
		$(this).find('.btn-orange').animate({bottom: '0'}, 300).fadeOut(300);
	})

// Inputmask
	$('input[data-input="mobile"]').inputmask("+9(999)999-99-99");

});
