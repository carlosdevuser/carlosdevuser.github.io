const btnMenu = document.querySelector('.open-menu')
const btnIcon = document.querySelector('#menu-open-icon')
const navbar = document.querySelector('.navbar')

btnMenu.addEventListener('click', () => {
	navbar.classList.toggle('active')
	btnIcon.classList.toggle('fa-bars')
	btnIcon.classList.toggle('fa-close')
})