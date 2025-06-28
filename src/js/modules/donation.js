export function initDonation() {
	const donateForm = document.getElementById('donate-form')
	const presetButtons = donateForm.querySelectorAll('[data-amount]')
	const amountInput = donateForm.querySelector('input[name="amount"]')
	const radioInputs = donateForm.querySelectorAll('input[name="donate_type"]')
	const toggleLabels = donateForm.querySelectorAll('.donate-form__toggle label')
	const note = document.getElementById('subscription-note')
	const submitBtn = donateForm.querySelector('.donate-form__submit')

	// Валюта
	const customSelect = document.getElementById('custom-currency')
	const selectTrigger = customSelect.querySelector('.select-trigger')
	const selectOptions = customSelect.querySelectorAll('.select-options li')
	const selectedCurrencyText = selectTrigger.querySelector('.selected-currency')
	let selectedCurrency = 'UAH'

	// Селект
	selectTrigger.addEventListener('click', () => {
		customSelect.classList.toggle('open')
	})

	selectOptions.forEach(option => {
		option.addEventListener('click', () => {
			selectOptions.forEach(opt => opt.classList.remove('active'))
			option.classList.add('active')
			selectedCurrency = option.dataset.currency
			selectedCurrencyText.textContent = selectedCurrency
			customSelect.classList.remove('open')

			updatePresetAmounts(selectedCurrency)
		})
	})

	document.addEventListener('click', e => {
		if (!customSelect.contains(e.target)) {
			customSelect.classList.remove('open')
		}
	})

	// Кнопки сум
	presetButtons.forEach(btn => {
		btn.addEventListener('click', () => {
			amountInput.value = btn.dataset.amount
			validateAmount()
		})
	})

	// Перемикачі
	radioInputs.forEach(input => {
		input.addEventListener('change', () => {
			toggleLabels.forEach(label => label.classList.remove('active'))
			input.parentElement.classList.add('active')
			note.style.opacity = input.value === 'monthly' ? '1' : '0'
		})
	})

	// Оновлення сум
	function updatePresetAmounts(currency) {
		const presetMap = {
			UAH: [200, 500, 1000],
			USD: [20, 100, 300],
			EUR: [20, 100, 300],
		}

		const newValues = presetMap[currency] || presetMap.UAH

		presetButtons.forEach((btn, index) => {
			const amount = newValues[index]
			btn.dataset.amount = amount
			btn.innerHTML = `+${amount} <span class="currency-label">${currency}</span>`
		})
	}

	// Валідація
	function validateAmount() {
		const amount = parseFloat(amountInput.value)
		if (!amount || amount <= 0) {
			submitBtn.disabled = true
		} else {
			submitBtn.disabled = false
		}
	}

	amountInput.addEventListener('input', validateAmount)

	// Початково блокуємо кнопку, якщо поле пусте
	validateAmount()

	// Експортуємо стан форми
	window.getDonationState = () => ({
		amount: parseFloat(amountInput.value),
		currency: selectedCurrency,
		recurring:
			donateForm.querySelector('input[name="donate_type"]:checked').value ===
			'monthly',
	})

	// Ініціалізація кнопок сум
	updatePresetAmounts(selectedCurrency)
}
