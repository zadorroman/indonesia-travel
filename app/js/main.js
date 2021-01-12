'use strict';

(function ($) {
	$(document).ready(function () {
		// Code

		//scroll animation start-----------------------------------

		AOS.init();

		//scroll animation end ------------------------------------


		//slick slider start --------------------------------------
		$('.slider__list').slick({
			dots: false, // включение точек
			arrows: true, // включение стрелок
			prevArrow: '<div class="slider-prev"><i class="icon-slider-arrow-l"></i></div>', //custom arrow
			nextArrow: '<div class="slider-next"><i class="icon-slider-arrow-r"></i></div>', // custom arrow
			// appendArrows: $('.slider__arrows'), //стрелки в другом месте разместить
			slidesToShow: 3, //сколько показывать слайдов
			slidesToScroll: 1, // по сколько елементов скролить
			autoplay: false, //auto play on
			autoplaySpeed: 4000, // скорость прокрутки в автоплей
			swipe: true, // отключает включает свап
			//centerMode: true,
			focusOnSelect: true,
			infinite: true,
			initialSlide: 0,
			centerPadding: '0px',
			variableWidth: true,
		});

		//slick slider end ----------------------------------------

		// Fancybox	start -----------------------------------------

		$('.gallery__photo').fancybox({
			buttons: [               //настройки кнопок 
				"fullScreen",
				"download",
				"thumbs",
				"close",
				"slideShow",
			],
			animationEffect: 'zoom-in-out',   //вид анимации
			animationDuration: 800,    //задержки
			transitionEffect: 'tube', //когда нажимаешь на стрелочку в галерее ефект тюба
			transitionDuration: 800,  //задержка
			loop: true, //повторение
			infobar: true,
			slideShow: {
				autoStart: false,
				speed: 3000
			},

		});

		// Fancybox	end -------------------------------------------

	});
})(jQuery);
