export default class ScrollToTop {
	constructor(selector = '#scrollToTop', offset = 300) {
		this.button = document.querySelector(selector)
		this.offset = offset

		if (!this.button) return

		this.handleScroll = this.handleScroll.bind(this)
		this.scrollToTop = this.scrollToTop.bind(this)

		this.init()
	}

	init() {
		window.addEventListener('scroll', this.handleScroll)
		this.button.addEventListener('click', this.scrollToTop)
	}

	handleScroll() {
		if (window.scrollY > this.offset) {
			this.button.classList.add('visible')
		} else {
			this.button.classList.remove('visible')
		}
	}

	scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
}
