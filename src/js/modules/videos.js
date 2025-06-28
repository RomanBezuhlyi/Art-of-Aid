export function initMultipleVideoBlocks() {
	const videoItems = document.querySelectorAll('.videos__item-video')

	if (!videoItems.length) return

	videoItems.forEach(videoItem => {
		const overlay = videoItem.querySelector('.videos__item-overlay')
		const playButton = videoItem.querySelector('.videos__item-play')

		if (!overlay || !playButton) return

		const hideOverlay = () => {
			overlay.style.display = 'none'
			playButton.style.display = 'none'
		}

		overlay.addEventListener('click', hideOverlay)
		playButton.addEventListener('click', hideOverlay)
	})
}
