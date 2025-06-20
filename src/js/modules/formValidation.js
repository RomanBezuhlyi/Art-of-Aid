export function initFormValidation({
	formSelector,
	checkboxSelector = '#myCheckbox',
	submitButtonSelector = '.submit',
	requiredFieldsSelector = 'input[required], textarea[required]',
	customValidator,
}) {
	const form = document.querySelector(formSelector)
	if (!form) {
		console.warn(`Форма за селектором "${formSelector}" не знайдена.`)
		return
	}

	const inputs = form.querySelectorAll(requiredFieldsSelector)
	const checkbox = form.querySelector(checkboxSelector)
	const submitButton = form.querySelector(submitButtonSelector)

	if (!checkbox) {
		console.warn(
			`Чекбокс за селектором "${checkboxSelector}" не знайдений у формі.`
		)
		return
	}
	if (!submitButton) {
		console.warn(
			`Кнопка за селектором "${submitButtonSelector}" не знайдена у формі.`
		)
		return
	}

	function checkFormValidity() {
		let isValid = true

		inputs.forEach(input => {
			if (!input.value.trim()) {
				isValid = false
			}
		})

		if (!checkbox.checked) {
			isValid = false
		}

		if (customValidator && typeof customValidator === 'function') {
			isValid = isValid && customValidator(form)
		}

		submitButton.disabled = !isValid
	}

	// Прив’язуємо події до input'ів і чекбокса
	inputs.forEach(input => {
		input.addEventListener('input', checkFormValidity)
	})
	checkbox.addEventListener('change', checkFormValidity)

	// 🔥 РУЧНА ПЕРЕВІРКА для кастомного select
	const hiddenSelectInput = form.querySelector(
		'input[name="direction"][type="hidden"]'
	)
	if (hiddenSelectInput) {
		// Додаємо вручну тригер при зміні select-а
		const selectElement = form.querySelector('.select-input')
		if (selectElement) {
			selectElement.querySelectorAll('.options li').forEach(option => {
				option.addEventListener('click', () => {
					hiddenSelectInput.value = option.dataset.value
					hiddenSelectInput.dispatchEvent(new Event('input')) // критично!
				})
			})
		}
	}

	// Початкова перевірка
	checkFormValidity()
}
