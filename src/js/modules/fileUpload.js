export function initFileUpload() {
	const fileInput = document.getElementById('resumeUpload')
	const uploadBtn = document.getElementById('uploadBtn')
	const fileNameDisplay = document.getElementById('fileName')

	uploadBtn.addEventListener('click', () => {
		fileInput.click()
	})

	fileInput.addEventListener('change', () => {
		if (fileInput.files.length > 0) {
			fileNameDisplay.textContent = fileInput.files[0].name
			uploadBtn.textContent = 'Змінити файл'
		}
	})
}
