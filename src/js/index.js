import { initFaqToggle } from './modules/faq.js'
import { initFontSizeSwitcher } from './modules/fontSizeSwitcher.js'
import { initMenuToggle } from './modules/menuToggle.js'
import { initModal } from './modules/modal.js'
import { initAdvantagesSwiper } from './modules/swiper.js'

document.addEventListener('DOMContentLoaded', () => {
	initFaqAccordion() // або initFaqAccordion('.your-custom-class')
})

document.addEventListener('DOMContentLoaded', () => {
	initModal({
		triggerSelector: '.accessibility-btn',
		modalSelector: '.accessibility-modal',
	})

	// initModal({
	// 	triggerSelector: '.open-feedback',
	// 	modalSelector: '.feedback-modal-wrap',
	// })
	initMenuToggle()
	initFontSizeSwitcher()
	initAdvantagesSwiper()
	initFaqToggle()
})
