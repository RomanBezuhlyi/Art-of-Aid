const burger = document.getElementById('burger')
const mobileMenu = document.querySelector('.mobile-menu')
const langSwitch = document.querySelector('.header__switch')

export function initMenuToggle() {
	burger.addEventListener('click', () => {
		burger.classList.toggle('active')
		mobileMenu.classList.toggle('active')
		langSwitch.classList.toggle('mobile')
		document.body.classList.toggle('locked-scroll')
	})
}
