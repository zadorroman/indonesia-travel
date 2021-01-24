'use strict';



const LIST = [
	{
		name: 'Bunaken Park',
		duration: 10,
		guests: 2,
		price: 1000,
		text: 'Bunaken Marine Park is an impressive diving site that will help you get to know the rich underwater part of the country.',
		rating: '4,9',
		url: 'map',
		img: 't-1',

	},
	{
		name: 'Komodo island',
		duration: 5,
		guests: 2,
		price: 1200,
		text: 'The underwater life around Komodo Island is known as one of the most interesting divers in the world!',
		rating: '4,6',
		url: 'map2',
		img: 't-2',

	},
	{
		name: 'Bali island',
		duration: 12,
		guests: 2,
		price: 2200,
		text: `Most tourists start their journey in Indonesia on the country's most famous island.`,
		rating: '5,0',
		url: 'map3',
		img: 't-3',

	},

];








(function ($) {
	$(document).ready(function () {
		// Code
		// $('.btn--header').click(() => { drawList() });

		drawList();

		function drawList() {
			let container = document.querySelector('.tourList'),
				PARSED_LIST = JSON.parse(localStorage.getItem('tourList'));

			container.innerHTML = '';

			if (PARSED_LIST === null || !PARSED_LIST.length) {
				LIST.forEach((item, i) => {
					item.id = i;
				});

				localStorage.setItem('tourList', JSON.stringify(LIST));
				PARSED_LIST = LIST;
			}

			PARSED_LIST.forEach((item) => {
				container.append(renderItem(item.name, item.duration, item.guests, item.price, item.text, item.rating, item.url, item.img, item.id));
			});
		}

		// Draw element
		function renderItem(name, duration, guests, price, text, rating, url, img, id) {
			let item = document.createElement('div'),
				pic = document.createElement('div'),
				sliderImg = document.createElement('img'),
				body = document.createElement('div'),
				space = document.createElement('div'),
				sliderTitle = document.createElement('h2'),
				stars = document.createElement('div'),
				star = document.createElement('i'),
				sliderRating = document.createElement('span'),
				box = document.createElement('div'),
				sliderText = document.createElement('p'),
				sliderMap = document.createElement('img'),
				link = document.createElement('a'),
				days = document.createElement('span'),
				sliderPrice = document.createElement('span');




			item.className = 'slider__item';
			sliderImg.className = 'slider__img';
			body.className = 'slider__body';
			space.className = 'slider__space';
			sliderTitle.className = 'slider__title';
			stars.className = 'slider__stars';
			star.className = 'icon-Star';
			sliderRating.className = 'slider__rating';
			box.className = 'slider__box';
			sliderText.className = 'slider__text';
			link.className = 'slider__btn btn';
			sliderMap.className = 'slider__map';
			days.className = 'slider__duration';
			sliderPrice.className = 'slider__price';
			pic.className = 'slider__pic';

			sliderTitle.innerText = name;
			sliderText.innerText = text;
			sliderRating.innerText = rating;
			days.innerText = `${duration} days`;
			sliderPrice.innerText = `${price} $`;


			sliderImg.src = `images/indonesia/${img}.jpg`;
			sliderImg.alt = sliderImg.src;
			sliderMap.src = `images/indonesia/${url}.svg`;
			sliderMap.alt = sliderMap.src;
			link.href = `bali.html`;
			link.innerText = 'Watch the tour'
			let star2 = star.cloneNode(true),
				star3 = star.cloneNode(true),
				star4 = star.cloneNode(true),
				star5 = star.cloneNode(true);


			pic.append(sliderImg);
			stars.append(star, star2, star3, star4, star5, sliderRating);
			box.append(sliderText, sliderMap);
			space.append(sliderTitle, stars, box);
			body.append(space, link);

			item.append(pic, body, days, sliderPrice);




			return item;
		}
















		//slick slider start --------------------------------------
		//slider tour
		$('.slider__wrap--tour').slick({
			dots: false, // включение точек
			arrows: true, // включение стрелок
			prevArrow: '<div class="slider-prev-t"><i class="icon-slider-arrow-l"></i></div>', //custom arrow
			nextArrow: '<div class="slider-next-t"><i class="icon-slider-arrow-r"></i></div>', // custom arrow
			appendArrows: $('.slider__arrows--tour'), //стрелки в другом месте разместить
			slidesToShow: 1, //сколько показывать слайдов
			slidesToScroll: 1, // по сколько елементов скролить
			swipe: false, // отключает включает свап
			centerMode: false,
			variableWidth: true,
			infinite: false,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						variableWidth: true,
						swipe: true,
						arrows: false, // включение стрелок
					}
				}]
		});
		function setProgress(index) {
			const calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;
			$progressBar
				.css('background-size', `${calc}% 100%`)
				.attr('aria-valuenow', calc);

		}
		const $slider = $('.slider__wrap--tour');
		const $progressBar = $('.slider__line--tour');
		$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			setProgress(nextSlide);
		});
		setProgress(0);
		//slider places

		$('.slider__wrap--places').slick({
			dots: false, // включение точек
			arrows: true, // включение стрелок
			prevArrow: '<div class="slider-prev-p"><i class="icon-slider-arrow-l"></i></div>', //custom arrow
			nextArrow: '<div class="slider-next-p"><i class="icon-slider-arrow-r"></i></div>', // custom arrow
			appendArrows: $('.slider__arrows--places'), //стрелки в другом месте разместить
			slidesToShow: 1, //сколько показывать слайдов
			slidesToScroll: 1, // по сколько елементов скролить
			swipe: false, // отключает включает свап
			centerMode: false,
			variableWidth: true,
			infinite: false,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						variableWidth: true,
						swipe: true,
						arrows: false, // включение стрелок
					}
				}]
		});
		function setProgress2(index) {
			const calc = ((index + 1) / ($slider2.slick('getSlick').slideCount)) * 100;
			$progressBar2
				.css('background-size', `${calc}% 100%`)
				.attr('aria-valuenow', calc);

		}
		const $slider2 = $('.slider__wrap--places');
		const $progressBar2 = $('.slider__line--places');
		$slider2.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			setProgress2(nextSlide);
		});
		setProgress2(0);

		//rew
		$('.slider-r__wrap').slick({
			dots: false, // включение точек
			arrows: true, // включение стрелок
			prevArrow: '<div class="slider-prev-r"><i class="icon-slider-arrow-l"></i></div>', //custom arrow
			nextArrow: '<div class="slider-next-r"><i class="icon-slider-arrow-r"></i></div>', // custom arrow
			appendArrows: $('.slider-r__arrows'), //стрелки в другом месте разместить
			slidesToShow: 1, //сколько показывать слайдов
			slidesToScroll: 1, // по сколько елементов скролить
			swipe: false, // отключает включает свап
			centerMode: false,
			variableWidth: true,
			infinite: false,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						variableWidth: true,
						swipe: true,
						arrows: false, // включение стрелок
					}
				}]
		});
		function setProgressR(index) {
			const calc = ((index + 1) / ($sliderR.slick('getSlick').slideCount)) * 100;
			$progressBarR
				.css('background-size', `${calc}% 100%`)
				.attr('aria-valuenow', calc);

		}
		const $sliderR = $('.slider-r__wrap');
		const $progressBarR = $('.slider-r__line');
		$sliderR.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			setProgressR(nextSlide);
		});
		setProgressR(0);







		//slick slider end ----------------------------------------


		//scroll animation start-----------------------------------

		AOS.init();

		//scroll animation end ------------------------------------




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
