document.addEventListener('input', function(){
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');

let fNameregex=RegExp("^[A-Z]{1,}[a-z]{2,}$");

console.log(fNameregex.test(text.value));

if(fNameregex.test(text.value))
{
    textError.textContent="";
}
else{
    textError.textContent="Name is Incorrect";
}

});