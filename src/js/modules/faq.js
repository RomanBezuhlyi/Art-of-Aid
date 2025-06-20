export function initFaqToggle(selector = '.faq__item') {
	const faqItems = document.querySelectorAll(selector)

	faqItems.forEach(item => {
		const head = item.querySelector('.faq__item-head')
		const body = item.querySelector('.faq__item-body')
		const icon = head.querySelector('.icon-chevron')

		if (!head || !body || !icon) return

		// Початкове налаштування
		body.style.maxHeight = '0px'
		body.style.opacity = '0'
		body.style.overflow = 'hidden'
		body.style.transition = 'max-height 0.3s ease, opacity 0.3s ease'
		icon.style.transition = 'transform 0.3s ease'

		head.addEventListener('click', () => {
			const isCurrentlyOpen = body.style.maxHeight !== '0px'

			// Закрити всі пункти
			faqItems.forEach(otherItem => {
				const otherBody = otherItem.querySelector('.faq__item-body')
				const otherIcon = otherItem.querySelector('.icon-chevron')
				if (!otherBody || !otherIcon) return

				otherBody.style.maxHeight = '0px'
				otherBody.style.opacity = '0'
				otherIcon.style.transform = 'rotateX(0deg)'
			})

			// Якщо пункт не був відкритий — відкриваємо його
			if (!isCurrentlyOpen) {
				body.style.maxHeight = body.scrollHeight + 'px'
				body.style.opacity = '1'
				icon.style.transform = 'rotateX(180deg)'
			}
		})
	})
}
