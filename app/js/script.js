const toggleButton = document.querySelector('.nav__toggle');
const header = document.querySelector('.header');
const fadeElems = document.querySelectorAll('.has-fade');

toggleButton.addEventListener('click', () => {
	if (header.classList.contains('open')) {
		header.classList.remove('open');
		fadeElems.forEach(element => {
			element.classList.remove('fade-in');
			element.classList.add('fade-out');
		});
	} else {
		header.classList.add('open');
		fadeElems.forEach(element => {
			element.classList.remove('fade-out');
			element.classList.add('fade-in');
		});
	}
});
