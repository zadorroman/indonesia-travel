'use strict';


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