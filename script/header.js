'use strict'

const dropDownMenu = document.getElementById(`drop-down-menu`);
const hamBtn = document.getElementById(`ham-icon`);
const closeBtn = document.getElementById(`close-icon`);

hamBtn.addEventListener('click', (e) => {
    hamBtn.classList.toggle(`hidden`);
    closeBtn.classList.toggle(`hidden`);
    dropDownMenu.classList.toggle(`hidden`);
});

closeBtn.addEventListener('click', (e) => {
    hamBtn.classList.toggle(`hidden`);
    closeBtn.classList.toggle(`hidden`);
    dropDownMenu.classList.toggle(`hidden`);
});