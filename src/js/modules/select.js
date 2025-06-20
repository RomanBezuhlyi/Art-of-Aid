export function initCustomSelect() {
	const select = document.querySelector('.select-input')
	if (!select) return

	const selected = select.querySelector('.selected')
	const options = select.querySelector('.options')
	const hiddenInput = select.querySelector('input[type="hidden"]')

	select.addEventListener('click', () => {
		select.classList.toggle('open')
	})

	options.querySelectorAll('li').forEach(option => {
		option.addEventListener('click', e => {
			e.stopPropagation()
			selected.textContent = option.textContent
			hiddenInput.value = option.dataset.value
			select.classList.remove('open')
		})
	})

	document.addEventListener('click', e => {
		if (!select.contains(e.target)) {
			select.classList.remove('open')
		}
	})
}
