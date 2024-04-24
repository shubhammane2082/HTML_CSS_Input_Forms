document.addEventListener('input', function(){
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');

let fNameregex=RegExp("^[A-Z]{1,}[a-z]{2,}$");

if(fNameregex.test(text.value))
{
    textError.textContent="";
}
else{
    textError.textContent="Name is Incorrect";
}

});

document.addEventListener('input',function(){
const email=document.querySelector('#email');
const emailError=document.querySelector('.emailError');

let emailRegex=RegExp("^[a-z]{1,}[.][a-z]{0,}[@][a-z]{1,}[.][a-z]{1,}[.][a-z]*$");

if(emailRegex.test(email.value))
{
    emailError.textContent="";
}
else{
    emailError.textContent="Please Enter Correct Email...";
}
});