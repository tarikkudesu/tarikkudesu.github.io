
let clicked = false;
let mouseDownPosX = 0;
let prevPerc = 0;

const body = document.querySelector(`body`);
const container = document.querySelector(`.container`);
const images = document.querySelectorAll(`.image`);
console.log(container);

window.onmousemove = (event) => {
	if (clicked === false) { return ; }
	const	mouseDeltaX = event.clientX - mouseDownPosX;
	const	maxDelta = window.innerWidth;
	const	perc = parseFloat((mouseDeltaX / maxDelta) * 100) + parseFloat(container.dataset.perc);
	prevPerc = perc;
	container.style.transform = `translate(${perc}%, -50%)`;
	for (let i = 0; i < 5; i++) {
		if (perc >= -100 && perc <= 0)
			images[i].style.objectPosition = `${perc + 100}% 50%`;
	}
}


const mouseUp = (event) => {
	container.dataset.perc = prevPerc;
	clicked = false;
}

const mouseDown = (event) => {
	mouseDownPosX = event.clientX;
	clicked = true;
}

document.addEventListener('mousedown', mouseDown);
document.addEventListener('mouseup', mouseUp);
 