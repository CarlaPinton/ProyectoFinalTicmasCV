
const switchButton = document.querySelector('#switch_dark');

switchButton.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');
});