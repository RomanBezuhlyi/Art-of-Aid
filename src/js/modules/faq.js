export function initFaqToggle(selector = '.faq__item') {
	const faqItems = document.querySelectorAll(selector)

	faqItems.forEach(item => {
		const head = item.querySelector('.faq__item-head')
		if (!head) return

		head.addEventListener('click', () => {
			const isOpen = item.classList.contains('open')

			item.classList.toggle('open', !isOpen)
		})
	})
}
