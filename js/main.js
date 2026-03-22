document.addEventListener('DOMContentLoaded',()=>{const modal=document.querySelector('#authModal')
const regForm=document.querySelector('#registrationForm')
const phoneInput=document.querySelector('#userPhone')
const scriptURL='https://script.google.com/macros/s/AKfycbxjg-a3rcf39G4sfRjJXAkvA9-zfmBVFBnDcKMGpxqvi37OFf6qnSDigb0-MFoO-OuEjg/exec'
document.querySelectorAll('#open').forEach(btn=>{btn.onclick=e=>{e.preventDefault()
modal.classList.add('active')
document.body.style.overflow='hidden'}})
const closeModal=()=>{modal.classList.remove('active')
document.body.style.overflow=''}
document.querySelector('#closeModal').onclick=closeModal
window.onclick=e=>{if(e.target===modal)closeModal()}
phoneInput.oninput=e=>{let val=e.target.value.replace(/\D/g,'')
let res=''
if(val.length>0)res=val.substring(0,2)
if(val.length>2)res+=' '+val.substring(2,5)
if(val.length>5)res+=' '+val.substring(5,7)
if(val.length>7)res+=' '+val.substring(7,9)
e.target.value=res}
regForm.onsubmit=e=>{e.preventDefault()
const submitBtn=regForm.querySelector('.modal__submit')
submitBtn.disabled=!0
submitBtn.innerText='Yuborilmoqda...'
const formData=new FormData()
formData.append('name',document.querySelector('#userName').value)
formData.append('phone',"'+998 "+phoneInput.value)
fetch(scriptURL,{method:'POST',body:formData,mode:'no-cors',})
setTimeout(()=>{window.location.href='thankYou.html'},100)}})