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
			buttons: [ //настройки кнопок 
				"fullScreen",
				"download",
				"thumbs",
				"close",
				"slideShow",
			],
			animationEffect: 'zoom-in-out', //вид анимации
			animationDuration: 800, //задержки
			transitionEffect: 'tube', //когда нажимаешь на стрелочку в галерее ефект тюба
			transitionDuration: 800, //задержка
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

/// book form, select
const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
	if ('active' === selectSingle.getAttribute('data-state')) {
		selectSingle.setAttribute('data-state', '');
	} else {
		selectSingle.setAttribute('data-state', 'active');
	}
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
	selectSingle_labels[i].addEventListener('click', (evt) => {
		selectSingle_title.textContent = evt.target.textContent;
		selectSingle.setAttribute('data-state', '');
	});
}

/// write in localstorage

let buttonBook = document.querySelector(".btn--book");
let inputName = document.getElementById("name");
let inputSurname = document.getElementById("surname");
let inputEmail = document.getElementById("email");
let inputPhone = document.getElementById("phone");



// var a = {
// 	'BOOL': true,
// 	'INT': 20,
// 	'ARRAY': [1, 2, 3],
// 	'STRING': 'Тише, мыши, кот на крыше'
//  };



buttonBook.addEventListener('click', function () {
	localStorage.setItem("name", inputName.value);
	localStorage.setItem("surname", inputSurname.value);
	localStorage.setItem("email", inputEmail.value);
	localStorage.setItem("phone", inputPhone.value);

});