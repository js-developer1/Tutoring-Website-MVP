function toggleCollapsible(index, sectionId) {
	const buttons = document.querySelectorAll('.collapsible');
	const button = buttons[index - 1]
	button.classList.toggle('active');
	const content = document.getElementById(sectionId);
	content.classList.toggle('active');
}