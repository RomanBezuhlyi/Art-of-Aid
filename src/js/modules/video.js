export function initVideoPlayer() {
	const videoWrapper = document.querySelector('.video')
	if (!videoWrapper) return

	const iframe = videoWrapper.querySelector('.video__iframe')
	const overlay = videoWrapper.querySelector('.video__overlay')
	const playButton = videoWrapper.querySelector('.video__play')

	if (!iframe || !overlay || !playButton) return

	let player

	function onPlayerStateChange(event) {
		if (event.data === YT.PlayerState.ENDED) {
			overlay.style.display = 'block'
			playButton.style.display = 'block'
		}
	}

	function playVideo() {
		overlay.style.display = 'none'
		playButton.style.display = 'none'
		player.playVideo()
	}

	window.onYouTubeIframeAPIReady = () => {
		player = new YT.Player(iframe, {
			events: {
				onStateChange: onPlayerStateChange,
			},
		})
	}

	overlay.addEventListener('click', playVideo)
	playButton.addEventListener('click', playVideo)

	const tag = document.createElement('script')
	tag.src = 'https://www.youtube.com/iframe_api'
	const firstScriptTag = document.getElementsByTagName('script')[0]
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
}
