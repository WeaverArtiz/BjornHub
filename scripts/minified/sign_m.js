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
g.target.value=partsg.join('/')});const signInButton=document.getElementById('signInButton');const signUpButton=document.getElementById('signUpButton');signInButton.addEventListener('click',function(){signInDialog.showModal()});signUpButton.addEventListener('click',function(){signUpDialog.showModal()});closeSignIn.addEventListener('click',function(){signInDialog.close()});closeSignUp.addEventListener('click',function(){signUpDialog.close()})