
let pwdInput = document.getElementById("user_password");
let pwdInputRepeat = document.getElementById("user_password_repeat");
let pwdMessage = document.getElementById('pwd-message');



pwdInputRepeat.onblur = function () {
if (pwdInput === pwdInputRepeat) {
    pwdInput.classList.add('validPassword');
    pwdInputRepeat.classList.add('validPassword');
} else {
    pwdInput.classList.add('invalidPassword');
    pwdInputRepeat.classList.add('invalidPassword');
    pwdMessage = "The passwords don't match";
}
}
