// variables
const openButton = document.getElementById('open-button');
const modalBackground = document.getElementById('modal-background');
const closeButton = document.getElementById('close-button');

// events
if (openButton && modalBackground) {
	openButton.addEventListener('click', () => {
		modalBackground.classList.add('active');
	});
}

if (closeButton && modalBackground) {
	closeButton.addEventListener('click', () => {
		modalBackground.classList.remove('active');
	});
}
