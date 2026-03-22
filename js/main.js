document.addEventListener('DOMContentLoaded', () => {
	const modal = document.querySelector('#authModal')
	const regForm = document.querySelector('#registrationForm')
	const phoneInput = document.querySelector('#userPhone')

	// Google Apps Script URL
	const scriptURL =
		'https://script.google.com/macros/s/AKfycby2wqyeVovrC2lhhPPW_gBCoAd9ycxlY-9VqVWv9aPfwPKVFtjpX08BfPSs5Ug5KL4YkA/exec'

	// 1. Modalni ochish
	document.querySelectorAll('#open').forEach(btn => {
		btn.onclick = e => {
			e.preventDefault()
			modal.classList.add('active')
			document.body.style.overflow = 'hidden'
		}
	})

	// 2. Modalni yopish
	const closeModal = () => {
		modal.classList.remove('active')
		document.body.style.overflow = ''
	}
	document.querySelector('#closeModal').onclick = closeModal
	window.onclick = e => {
		if (e.target === modal) closeModal()
	}

	// 3. Telefon formatlash (88 888 88 88)
	phoneInput.oninput = e => {
		let val = e.target.value.replace(/\D/g, '')
		let res = ''
		if (val.length > 0) res = val.substring(0, 2)
		if (val.length > 2) res += ' ' + val.substring(2, 5)
		if (val.length > 5) res += ' ' + val.substring(5, 7)
		if (val.length > 7) res += ' ' + val.substring(7, 9)
		e.target.value = res
	}

	// 4. YUBORISH VA THANK YOU SAHIFASIGA O'TISH
	regForm.onsubmit = e => {
		e.preventDefault()

		const submitBtn = regForm.querySelector('.modal__submit')
		submitBtn.disabled = true
		submitBtn.innerText = 'Yuborilmoqda...'

		const formData = new FormData()
		formData.append('name', document.querySelector('#userName').value)
		formData.append('phone', "'+998 " + phoneInput.value)

		// 1. So'rovni yuboramiz (lekin javobini kutmaymiz)
		fetch(scriptURL, {
			method: 'POST',
			body: formData,
			mode: 'no-cors',
		})

		// 2. Srazu keyingi sahifaga o'tib ketamiz (0.1 soniya pauza bilan)
		setTimeout(() => {
			window.location.href = 'thankYou.html'
		}, 100)
	}
})
