import { initFontSizeSwitcher } from './modules/fontSizeSwitcher.js'
import { initMenuToggle } from './modules/menuToggle.js'
import { initModal } from './modules/modal.js'

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
})
