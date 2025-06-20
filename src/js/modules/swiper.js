export function initAdvantagesSwiper() {
	new Swiper('.swiper-advantages', {
		spaceBetween: 20,
		slidesPerView: 1.5,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		breakpoints: {
			767: {
				slidesPerView: 3.5,
			},
			1025: {
				slidesPerView: 5,
			},
		},
	})
}

export function initHelpSwiper() {
	const swiper2 = new Swiper('.help__swiper', {
		spaceBetween: 20,
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			767: {
				spaceBetween: 37,
				slidesPerView: 2,
			},
			1025: {
				slidesPerView: 4,
			},
		},
	})
	const slides = document.querySelectorAll('.help__swiper-slide')

	slides.forEach(slide => {
		slide.addEventListener('mouseenter', () => {
			swiper2.autoplay.stop()
		})
		slide.addEventListener('mouseleave', () => {
			swiper2.autoplay.start()
		})
	})
}

export function initPartnersSwiper() {
	new Swiper('.partners__swiper', {
		spaceBetween: 20,
		slidesPerView: 2,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.partners-button-next',
			prevEl: '.partners-button-prev',
		},
		breakpoints: {
			767: {
				spaceBetween: 24,
				slidesPerView: 4,
			},
			1025: {
				slidesPerView: 6,
			},
		},
	})
}

export function initNewsSwiper() {
	new Swiper('.news__swiper', {
		spaceBetween: 20,
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.news__swiper-button-next',
			prevEl: '.news__swiper-button-prev',
		},
		breakpoints: {
			767: {
				spaceBetween: 24,
				slidesPerView: 2,
			},
			1025: {
				slidesPerView: 3,
			},
		},
	})
}
