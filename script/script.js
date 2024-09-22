'use strict'

const dropDownMenu = document.getElementById(`drop-down-menu-container`);
const hiddenHijab = document.getElementById(`hidden-hijab`);
const closeBtn = document.getElementById(`close-icon`);
const hamBtn = document.getElementById(`ham-icon`);
const menuBtn = document.getElementById(`ham`);
const darkBtn1 = document.getElementById(`dark`);
const darkBtn2 = document.getElementById(`mode`);
const firstSection = document.getElementById(`first-section`);

const darkTheme = new Map([
	[`--main-color`, `rgb(29, 31, 39)`],
	[`--text-color`, `rgb(255, 255, 255)`],
	[`--icon-color`, `rgb(147, 152, 160)`],
	[`--icon-hover-color`, `rgb(255, 255, 255)`],
	[`--hover-color`, `rgba(211, 211, 211, 0.1)`],
	[`--border-color`, `rgba(211, 211, 211, 0.2)`],
]);

const lightTheme = new Map([
	[`--main-color`, `rgb(247, 248, 250)`],
	[`--text-color`, `rgb(32, 35, 40)`],
	[`--icon-color`, `rgb(91, 99, 109)`],
	[`--icon-hover-color`, `rgb(32, 35, 40)`],
	[`--hover-color`, `rgb(227, 228, 230)`],
	[`--border-color`, `rgb(219, 219, 219)`],
]);

menuBtn.addEventListener('click', (e) => {
    hamBtn.classList.toggle(`hidden`);
    closeBtn.classList.toggle(`hidden`);
    dropDownMenu.classList.toggle(`hidden`);
	console.log("menuBtn");
});


hiddenHijab.addEventListener('click', (e) => {
    hamBtn.classList.toggle(`hidden`);
    closeBtn.classList.toggle(`hidden`);
    dropDownMenu.classList.toggle(`hidden`);
	console.log("hidden hijab");
});

window.addEventListener('resize', (e) => {
	hamBtn.classList.remove(`hidden`);
	closeBtn.classList.add(`hidden`);
	dropDownMenu.classList.add(`hidden`);
});

let	mode = `light`;

let changeMode = () => {
	const	theme = (mode === 'light') ? darkTheme : lightTheme;
	for (const [variable, value] of theme)
		document.documentElement.style.setProperty(variable, value);
	mode = mode === 'light' ? 'dark' : 'light';
	if (mode == 'light')
		firstSection.style.backgroundImage = `url('../assets/whiteBackground.jpg')`;
	else
		firstSection.style.backgroundImage = `url('../assets/blackBackground.jpg')`;
	document.getElementById(`mode-dark-icon`).classList.toggle(`hidden`);
	document.getElementById(`mode-light-icon`).classList.toggle(`hidden`);
	document.getElementById(`dark-icon`).classList.toggle(`hidden`);
	document.getElementById(`light-icon`).classList.toggle(`hidden`);
}

darkBtn1.addEventListener('click', (e) => {
	changeMode();
});

darkBtn2.addEventListener('click', (e) => {
	changeMode();
});
