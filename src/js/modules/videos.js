export function initVideoPlayers() {
	const videoItems = document.querySelectorAll('.videos__item-video')
	if (!videoItems.length) return

	const players = []

	function createPlayer(iframe, overlay, playButton) {
		return new YT.Player(iframe, {
			events: {
				onStateChange: event => {
					if (event.data === YT.PlayerState.ENDED) {
						overlay.style.display = 'block'
						playButton.style.display = 'block'
					}
				},
			},
		})
	}

	function setupVideoItem(item) {
		const iframe = item.querySelector('.videos__item-iframe')
		const overlay = item.querySelector('.videos__item-overlay')
		const playButton = item.querySelector('.videos__item-play')

		if (!iframe || !overlay || !playButton) return

		const playerIndex = players.length

		overlay.addEventListener('click', () => {
			overlay.style.display = 'none'
			playButton.style.display = 'none'
			players[playerIndex].playVideo()
		})

		playButton.addEventListener('click', () => {
			overlay.style.display = 'none'
			playButton.style.display = 'none'
			players[playerIndex].playVideo()
		})

		players.push(createPlayer(iframe, overlay, playButton))
	}

	window.onYouTubeIframeAPIReady = () => {
		videoItems.forEach(setupVideoItem)
	}

	// Завантаження YouTube API
	const tag = document.createElement('script')
	tag.src = 'https://www.youtube.com/iframe_api'
	const firstScriptTag = document.getElementsByTagName('script')[0]
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
}
