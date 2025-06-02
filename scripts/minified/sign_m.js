const loginSignIn=document.getElementById('loginSignIn')
loginSignIn.addEventListener("input",(e)=>{let value=e.target.value;value=value.replace(/\D/g,'');value=value.substring(0,16);const parts=[];for(let i=0;i<value.length;i+=4){parts.push(value.substring(i,i+4))}
e.target.value=parts.join(' ')});const loginSignUp=document.getElementById('loginSignUp')
loginSignUp.addEventListener("input",(e)=>{let value=e.target.value;value=value.replace(/\D/g,'');value=value.substring(0,16);const parts=[];for(let i=0;i<value.length;i+=4){parts.push(value.substring(i,i+4))}
e.target.value=parts.join(' ')});const expirationDate=document.getElementById('expirationDate')
const threeNumbers=document.getElementById('threeNumbers')
threeNumbers.addEventListener("input",(f)=>{let valuef=f.target.value;valuef=valuef.replace(/\D/g,'');valuef=valuef.substring(0,3);f.target.value=valuef});expirationDate.addEventListener("input",(g)=>{let valueg=g.target.value.replace(/\D/g,'');if(valueg.length>=1){if(!['0','1'].includes(valueg[0])){valueg=''}}
if(valueg.length>=2){const monthg=parseInt(valueg.slice(0,2),10);if(monthg<1||monthg>12){valueg=valueg.slice(0,1)}}
if(valueg.length>4){valueg=valueg.slice(0,4)}
const partsg=[];for(let i=0;i<valueg.length;i+=2){partsg.push(valueg.substring(i,i+2))}
g.target.value=partsg.join('/')});const signInButton=document.getElementById('signInButton');const signUpButton=document.getElementById('signUpButton');signInButton.addEventListener('click',function(){signInDialog.showModal()});signUpButton.addEventListener('click',function(){signUpDialog.showModal()});closeSignIn.addEventListener('click',function(){signInDialog.close()});closeSignUp.addEventListener('click',function(){signUpDialog.close()});function validateAndSendSignIn(){const cardInput=document.getElementById('loginSignIn').value.replace(/\s/g,'');const passwordInput=document.querySelector('#signInDialog input[placeholder="Password"]').value;const errors=[];if(!/^\d{16}$/.test(cardInput)){errors.push("Numer karty musi zawierać dokładnie 16 cyfr.")}
if(passwordInput.length<4){errors.push("Hasło musi mieć co najmniej 4 znaki.")}
if(errors.length>0){alert(errors.join("\n"));return}
const payload={cardNumber:cardInput,password:passwordInput};fetch("https://httpbin.org/post",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)}).then(res=>res.json()).then(data=>{console.log("Zalogowano:",data);alert("Logowanie powiodło się!")}).catch(err=>{console.error("Błąd logowania:",err)})}
function validateAndSendSignUp(){const cardInput=document.getElementById('loginSignUp').value.replace(/\s/g,'');const expirationInput=document.getElementById('expirationDate').value.replace('/','');const cvcInput=document.getElementById('threeNumbers').value;const passwordInput=document.querySelector('#signUpDialog input[placeholder="Password"]').value;const errors=[];if(!/^\d{16}$/.test(cardInput)){errors.push("Numer karty musi zawierać dokładnie 16 cyfr.")}
if(!/^\d{4}$/.test(expirationInput)){errors.push("Data ważności musi mieć format MMYY (4 cyfry).")}
if(!/^\d{3}$/.test(cvcInput)){errors.push("CVC musi mieć dokładnie 3 cyfry.")}
if(passwordInput.length<4){errors.push("Hasło musi mieć co najmniej 4 znaki.")}
if(errors.length>0){alert(errors.join("\n"));return}
const payload={cardNumber:cardInput,expirationDate:expirationInput,cvc:cvcInput,password:passwordInput};fetch("https://httpbin.org/post",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)}).then(res=>res.json()).then(data=>{console.log("Zarejestrowano:",data);alert("Rejestracja powiodła się!")}).catch(err=>{console.error("Błąd rejestracji:",err)})}