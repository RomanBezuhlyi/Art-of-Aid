export function initFontSizeSwitcher(menuSelector = '.accessibility-menu') {
	const menu = document.querySelector(menuSelector)
	if (!menu) return

	const buttons = menu.querySelectorAll('.size')

	function setFontSize(size) {
		let fontSizeValue

		switch (size) {
			case 'normal':
				fontSizeValue = '100%'
				break
			case 'large':
				fontSizeValue = '112.5%'
				break
			case 'xlarge':
				fontSizeValue = '125%'
				break
			default:
				size = 'normal'
				fontSizeValue = '100%'
		}

		// Застосовуємо розмір шрифту
		document.documentElement.style.fontSize = fontSizeValue
		localStorage.setItem('fontSizePreference', size)

		// Оновлюємо класи активності
		buttons.forEach(btn => {
			const btnSize = btn.dataset.size
			btn.classList.toggle('active', btnSize === size)
		})
	}

	// Події на кнопки
	buttons.forEach(btn => {
		btn.addEventListener('click', () => {
			const size = btn.dataset.size
			setFontSize(size)
		})
	})

	// При завантаженні — встановлюємо збережений або дефолтний розмір
	const savedSize = localStorage.getItem('fontSizePreference') || 'normal'
	setFontSize(savedSize)
}
