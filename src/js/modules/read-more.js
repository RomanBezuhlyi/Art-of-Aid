export function initReadMore() {
	document.querySelectorAll('.info__toggle').forEach(button => {
		button.addEventListener('click', () => {
			const block = button.closest('.info__block')
			block.classList.toggle('expanded')
			button.textContent = block.classList.contains('expanded')
				? 'Згорнути'
				: 'Читати далі'
		})
	})
}
