document.addEventListener('DOMContentLoaded', () => {
	const modal = document.querySelector('#authModal') // ID bo'yicha topadi
	const closeBtn = document.querySelector('#closeModal')
	const allBtns = document.querySelectorAll('.days__btn') // Klass bo'yicha hamma tugmani topadi

	// Tugmalar bosilganda modalni ochish
	allBtns.forEach(btn => {
		btn.addEventListener('click', e => {
			e.preventDefault() // Sahifa sakrab ketmasligi uchun
			modal.classList.add('active')
			document.body.style.overflow = 'hidden' // Orqa fonni qulflash
		})
	})

	// Modalni yopish funksiyasi
	const closeModal = () => {
		modal.classList.remove('active')
		document.body.style.overflow = ''
	}

	closeBtn.onclick = closeModal

	// Modal tashqarisini bossa yopish
	window.onclick = e => {
		if (e.target === modal) closeModal()
	}
})
