function emailCheck(data) {
    let check = new RegExp(/^\w+@[a-z]{2,}\.([a-z]{3}|[a-z]{2}\.[a-z]{2})$/);
    let errorMessage = document.querySelector('#email-error-message');

    if (check.test(data) || data == '') {
        errorMessage.style.display = 'none';
    }
    else {
        errorMessage.style.display = 'inline';
    }
}

let entered_password = document.querySelector('#entpass');
let conf_password = document.querySelector('#confpass');

entered_password.addEventListener('onkeyup', () => {
    passCheck();
})

conf_password.addEventListener('onkeyup', () => {
    passCheck();
})

function passCheck() {

    let errorMessage = document.querySelector('#pass-error-message');

    if (conf_password.value == entered_password.value || conf_password.value.length == 0 || entered_password.value.length == 0) {
        errorMessage.style.display = 'none';
    }
    else {
        errorMessage.style.display = 'inline';
    }
}