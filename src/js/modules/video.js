export function initVideoPlayer() {
	const videoWrapper = document.querySelector('.video')
	if (!videoWrapper) return

	const overlay = videoWrapper.querySelector('.video__overlay')
	const playButton = videoWrapper.querySelector('.video__play')

	if (!overlay || !playButton) return

	const hideOverlay = () => {
		overlay.style.display = 'none'
		playButton.style.display = 'none'
	}

	overlay.addEventListener('click', hideOverlay)
	playButton.addEventListener('click', hideOverlay)
}
