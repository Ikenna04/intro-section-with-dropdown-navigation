const menuIcon = document.querySelectorAll('.menu-icon'),
	navLinks = document.querySelector('.nav-links-li');

menuIcon.forEach(e => {
	e.addEventListener('click', () => {
		navLinks.classList.toggle('show');
	});
});
