
var signInDis = document.querySelector('#signin');
var signUpDis = document.querySelector('#signUp');

var nameUp = document.getElementById('signupName');
var emailUp = document.getElementById('signupEmail');
var passUp = document.getElementById('signupPassword');
var erorrLogin = document.querySelector('.erorrLogin');

var forms = document.querySelector('.forms');
var home = document.querySelector('.home');
var username = document.querySelector('#username');



function goUp() {
    signInDis.classList.replace('d-block', 'd-none');
    signUpDis.classList.replace('d-none', 'd-block');
}

function goIn() {
    signInDis.classList.replace('d-none', 'd-block');
    signUpDis.classList.replace('d-block', 'd-none');
}

var usersList = JSON.parse(localStorage.getItem('usersList')) || [];

function signUp() {
    let user = {
        name: nameUp.value,
        email: emailUp.value,
        password: passUp.value,
    };
    usersList.push(user);
    localStorage.setItem('usersList', JSON.stringify(usersList));

    goIn();
    clearForm();
}

function clearForm() {
    nameUp.value = '';
    emailUp.value = '';
    passUp.value = '';
}

function valid() {
    var regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!regx.test(emailUp.value)) {
        var errorInput = document.querySelector('.signUp .signupEmail');
    }
}

console.log(usersList.length);

 function login(){
    let signinEmail = document.getElementById('signinEmail').value;
    let signinPassword = document.getElementById('signinPassword').value;
    for(i=0 ; i< usersList.length ; i++){

        if(signinEmail == usersList[i].email & signinPassword == usersList[i].password){

            forms.classList.replace( 'd-block','d-none')
            home.classList.replace('d-none', 'd-block')
            username.innerHTML = `Welcome ${usersList[i].name}`

            console.log(usersList[i].email + usersList[i].password);
        }else{
            erorrLogin.classList.replace('d-none', 'd-block')
        }
    }
 }