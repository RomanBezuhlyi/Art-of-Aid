import { initFaqToggle } from './modules/faq.js'
import { initFontSizeSwitcher } from './modules/fontSizeSwitcher.js'
import { initMenuToggle } from './modules/menuToggle.js'
import { initModal } from './modules/modal.js'
import ScrollToTop from './modules/scrollToTop.js'
import {
	initAdvantagesSwiper,
	initHelpSwiper,
	initPartnersSwiper,
} from './modules/swiper.js'

document.addEventListener('DOMContentLoaded', () => {
	// Модальні вікна
	initModal({
		triggerSelector: '.accessibility-btn',
		modalSelector: '.accessibility-modal',
	})

	// initModal({
	// 	triggerSelector: '.open-feedback',
	// 	modalSelector: '.feedback-modal-wrap',
	// })

	// Інші ініціалізації
	initMenuToggle()
	initFontSizeSwitcher()
	initAdvantagesSwiper()
	initFaqToggle()
	initHelpSwiper()
	initPartnersSwiper()

	// Кнопка "вгору"
	new ScrollToTop() // або new ScrollToTop('#customBtn', 400)
})
