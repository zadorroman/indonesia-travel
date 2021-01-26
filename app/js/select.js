//tour ----------------------------
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

//duration -------------------
const selectDay = document.querySelector('.__select--duration');
const selectDay_title = selectDay.querySelector('.__select__title--duration');
const selectDay_labels = selectDay.querySelectorAll('.__select__label--duration');

// Toggle menu
selectDay_title.addEventListener('click', () => {
    if ('active' === selectDay.getAttribute('data-state')) {
        selectDay.setAttribute('data-state', '');
    } else {
        selectDay.setAttribute('data-state', 'active');
    }
});

// Close when click to option
for (let i = 0; i < selectDay_labels.length; i++) {
    selectDay_labels[i].addEventListener('click', (evt) => {
        selectDay_title.textContent = evt.target.textContent;
        selectDay.setAttribute('data-state', '');
    });
}


//guests -------------------
const selectGuest = document.querySelector('.__select--guests');
const selectGuest_title = selectGuest.querySelector('.__select__title--guests');
const selectGuest_labels = selectGuest.querySelectorAll('.__select__label--guests');

// Toggle menu
selectGuest_title.addEventListener('click', () => {
    if ('active' === selectGuest.getAttribute('data-state')) {
        selectGuest.setAttribute('data-state', '');
    } else {
        selectGuest.setAttribute('data-state', 'active');
    }
});

// Close when click to option
for (let i = 0; i < selectGuest_labels.length; i++) {
    selectGuest_labels[i].addEventListener('click', (evt) => {
        selectGuest_title.textContent = evt.target.textContent;
        selectGuest.setAttribute('data-state', '');
    });
}