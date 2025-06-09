/**
 * Ініціалізація валідації форми з динамічними селекторами.
 *
 * @param {Object} options
 * @param {string} options.formSelector - Селектор форми (обов'язковий)
 * @param {string} options.checkboxSelector - Селектор чекбокса (за замовчуванням '#myCheckbox')
 * @param {string} options.submitButtonSelector - Селектор кнопки (за замовчуванням '.submit')
 * @param {string} options.requiredFieldsSelector - Селектор обов’язкових полів (за замовчуванням 'input[required], textarea[required]')
 * @param {Function} [options.customValidator] - Додаткова функція валідації, яка повертає true/false
 */
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

		// Виклик додаткової валідації, якщо передана
		if (customValidator && typeof customValidator === 'function') {
			isValid = isValid && customValidator(form)
		}

		submitButton.disabled = !isValid
	}

	inputs.forEach(input => {
		input.addEventListener('input', checkFormValidity)
	})

	checkbox.addEventListener('change', checkFormValidity)

	// Початкова перевірка при ініціалізації
	checkFormValidity()
}
