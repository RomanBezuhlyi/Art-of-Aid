export function initCounters() {
	function animateCounter(el, target, suffix = '', duration = 1500) {
		const startTime = performance.now()

		function update(currentTime) {
			const elapsed = currentTime - startTime
			const progress = Math.min(elapsed / duration, 1)
			const value = Math.floor(progress * target)

			el.textContent = value.toLocaleString('uk-UA') + suffix

			if (progress < 1) {
				requestAnimationFrame(update)
			} else {
				el.textContent = target.toLocaleString('uk-UA') + suffix
			}
		}

		requestAnimationFrame(update)
	}

	const counters = document.querySelectorAll('.counter')
	const options = {
		threshold: 0.5,
	}

	const observer = new IntersectionObserver((entries, obs) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const el = entry.target
				const target = parseInt(el.dataset.target, 10)
				const suffix = el.dataset.suffix || ''

				animateCounter(el, target, suffix)
				obs.unobserve(el)
			}
		})
	}, options)

	counters.forEach(counter => observer.observe(counter))
}
