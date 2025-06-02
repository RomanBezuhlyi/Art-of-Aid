export function initModal({
	triggerSelector,
	modalSelector,
	overlayClose = true,
	escClose = true,
	onOpen = null,
	onClose = null,
}) {
	const triggers = document.querySelectorAll(triggerSelector)
	const modalWrap = document.querySelector(modalSelector)
	const modal = modalWrap?.querySelector('.modal')
	const closeBtn = modalWrap?.querySelector('.modal__close')

	if (!triggers.length || !modalWrap || !modal || !closeBtn) return

	function openModal() {
		modalWrap.style.display = 'flex'
		document.body.classList.add('locked-scroll')
		setTimeout(() => modalWrap.classList.add('is-open'), 10)
		if (typeof onOpen === 'function') onOpen()
	}

	function closeModal() {
		modalWrap.classList.remove('is-open')
		document.body.classList.remove('locked-scroll')
		setTimeout(() => {
			modalWrap.style.display = 'none'
			if (typeof onClose === 'function') onClose()
		}, 300)
	}

	triggers.forEach(trigger => trigger.addEventListener('click', openModal))
	closeBtn.addEventListener('click', closeModal)

	if (overlayClose) {
		modalWrap.addEventListener('click', e => {
			if (!modal.contains(e.target)) {
				closeModal()
			}
		})
	}

	if (escClose) {
		document.addEventListener('keydown', e => {
			if (e.key === 'Escape') {
				closeModal()
			}
		})
	}
}
