function scrollToSection() {
	var section = document.getElementById('contacts');
	var sectionPosition = section.offsetTop;

	window.scrollTo({
		top: sectionPosition,
		behavior: 'smooth'
	});
}