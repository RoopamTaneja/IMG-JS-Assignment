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

function phoneCheck(data) {
    let check = new RegExp(/^(\+91|0)?[6-9]\d{9}$/);
    let errorMessage = document.querySelector('#ph-error-message');

    if (check.test(data) || data == '') {
        errorMessage.style.display = 'none';
    }
    else {
        errorMessage.style.display = 'inline';
    }
}

function ageCheck(data) {
    let check = new RegExp(/^\d*$/);
    let errorMessage = document.querySelector('#age-error-message');

    if (check.test(data) || data == '') {
        errorMessage.style.display = 'none';
    }
    else {
        errorMessage.style.display = 'inline';
    }
}

function nameCheck(data) {
    let check = new RegExp(/^[A-Za-z ]+$/);
    let errorMessage = document.querySelector('#name-error-message');

    if (check.test(data) || data == '') {
        errorMessage.style.display = 'none';
    }
    else {
        errorMessage.style.display = 'inline';
    }
}

function cityCheck(data) {
    let check = new RegExp(/^[A-Za-z ]+$/);
    let errorMessage = document.querySelector('#city-error-message');

    if (check.test(data) || data == '') {
        errorMessage.style.display = 'none';
    }
    else {
        errorMessage.style.display = 'inline';
    }
}

function passFormat(data) {
    let check1 = new RegExp(/[#_\.\*@!$&^]/);
    let check2 = new RegExp(/[A-Z]/);
    let check3 = new RegExp(/[a-z]/);
    let check4 = new RegExp(/\d/);
    let errorMessage = document.querySelector('#pass-format-error-message');
    if (data == '' || (check1.test(data) && check2.test(data) && check3.test(data) && check4.test(data) && data.length >= 8)) {
        errorMessage.style.display = 'none';
    }
    else {
        errorMessage.style.display = 'inline';
    }
}

let entered_password = document.querySelector('#entpass');
let conf_password = document.querySelector('#confpass');

entered_password.addEventListener('keyup', () => {
    passCheck();
})

conf_password.addEventListener('keyup', () => {
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