export function initAdvantagesSwiper() {
	const swiper1 = new Swiper('.swiper-advantages', {
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
			1024: {
				slidesPerView: 5,
			},
		},
	})
}
