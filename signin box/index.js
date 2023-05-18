// Validations : 

function emailCheck(data) {
    let check = new RegExp(/^.+@[a-z]{2,}\.([a-z]{2,3}|[a-z]{2}\.[a-z]{2})$/);
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

// Fetch API:


//testing : 
// let p = fetch('https://reqres.in/api/login', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ "email": "eve.holt@reqres.in", "password": "cityslicka" })
// });
// p.then((res) => {
//     return res.json();
// })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('.email').value;
    const password = document.querySelector('#entpass').value;
    const data = { email, password };
    let p = fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
})