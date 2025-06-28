import { initCounters } from './modules/counterAnimation.js'
import { initDonation } from './modules/donation.js'
import { initFaqToggle } from './modules/faq.js'
import { initFileUpload } from './modules/fileUpload.js'
import { initFontSizeSwitcher } from './modules/fontSizeSwitcher.js'
import { initFormValidation } from './modules/formValidation.js'
import { initPhoneMask } from './modules/mask.js'
import { initMenuToggle } from './modules/menuToggle.js'
import { initModal } from './modules/modal.js'
import { initReadMore } from './modules/read-more.js'
import { initCustomSelect } from './modules/select.js'
import { initVideoPlayer } from './modules/video.js'
import { initMultipleVideoBlocks } from './modules/videos.js'

import {
	initAdvantagesSwiper,
	initHelpSwiper,
	initNewsSwiper,
	initPartnersSwiper,
} from './modules/swiper.js'

document.addEventListener('DOMContentLoaded', () => {
	initModal({
		triggerSelector: '.accessibility-btn',
		modalSelector: '.accessibility-modal',
	})

	initModal({
		triggerSelector: '.vacancy__open-modal',
		modalSelector: '.vacancy-modal',
	})

	initModal({
		triggerSelector: '.join__open-modal',
		modalSelector: '.join-us-modal',
	})

	initMenuToggle()
	initFontSizeSwitcher()
	initAdvantagesSwiper()
	initFaqToggle()
	initHelpSwiper()
	initPartnersSwiper()
	initVideoPlayer()
	initCounters()
	initReadMore()
	initPhoneMask()
	initMultipleVideoBlocks()
	initNewsSwiper()
	initFileUpload()
	initCustomSelect()
	initDonation()

	initFormValidation({
		formSelector: 'form',
		checkboxSelector: '#myCheckbox',
		submitButtonSelector: '.submit',
		requiredFieldsSelector: 'input[required], textarea[required]',
		// customValidator: (form) => {
		//   // Приклад кастомної логіки (повернути true або false)
		//   return true
		// },
	})
})
