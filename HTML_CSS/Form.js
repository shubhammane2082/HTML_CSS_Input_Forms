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

document.addEventListener('input',function(){
const number=document.querySelector('#number');
const numberError=document.querySelector('.numberError');

 let numberRegex=RegExp("^[0-9]{2,}[0-9]{10}$");

 if(numberRegex.test(number.value))
 {
    numberError.textContent="";
 }
 else{
    numberError.textContent="Please Enter Correct your Number...";
 }
});

document.addEventListener('input',function(){
    const password=document.querySelector('#password');
    const passwordError=document.querySelector('.password-error');

    let passwordRegex=RegExp("^[A-Z]{1,}[A-Za-z0-9]{5,}[@#$*!]{1}+[0-9]{1,}$");

    if(passwordRegex.test(password.value))
    {
        passwordError.textContent="";
    }
    else{
        passwordError.textContent="Please Enter correct password...";
    }
})