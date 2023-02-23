
const switchButton = document.querySelector('#switch_dark');

switchButton.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	switchButton.classList.toggle('active');
});