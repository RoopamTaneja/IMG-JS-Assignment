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
const myForm = document.getElementById('myForm');


//4. a) : POST request using Fetch API:

// myForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const email = document.querySelector('.email').value;
//     const password = document.querySelector('#entpass').value;
//     const data = { email, password };
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     };

//     let p = fetch('https://reqres.in/api/login', options)
//         .then((res) => { return res.json(); })
//         .then(data => {
//             const token = data.token;
//             fetch('https://reqres.in/api/login', {
//                 headers: {
//                     'Authorization': `Bearer ${token}`
//                 }
//             })
//                 .then((repi) => {
//                     return repi.json();
//                 })
//                 .then(userData => {
//                     console.log(userData);
//                     document.querySelector('.box').style.display = 'block';
//                     document.querySelector('.signinbox').style.display = 'none';
//                     let tableData = "";
//                     for (let value of userData.data) {
//                         //of not in and use obj_data.data bcoz the objects are in data property of obj_data
//                         tableData += `<tr> <td>${value.id}</td> <td>${value.name}</td> <td>${value.year}</td> <td>${value.color}</td>  <td>${value.pantone_value}</td> </tr>`;
//                         //remember backticks and no single quotes
//                         document.getElementById('table_body').innerHTML = tableData;
//                     }
//                 })
//                 .catch(error => {
//                     console.error('Error fetching user data:', error);
//                 })
//         })
//         .catch(error => {
//             console.error('Error! :', error);
//         })
// })

//4. b) : Using async-await:

// async function fetch_post(src, options) {
//     return ((await fetch(src, options)).json());
// }

// myForm.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const email = document.querySelector('.email').value;
//     const password = document.querySelector('#entpass').value;
//     const data = { email, password };
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     };
//     try {
//         resp = await fetch_post('https://reqres.in/api/login', options);
//     } catch (err) {
//         console.log("Error! : " + err);
//     }
//     try {
//         const token = resp.token;
//         userData = await fetch_post('https://reqres.in/api/login', {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//         console.log(userData);
//         document.querySelector('.box').style.display = 'block';
//         document.querySelector('.signinbox').style.display = 'none';
//         let tableData = "";
//         for (let value of userData.data) {
//             //of not in and use obj_data.data bcoz the objects are in data property of obj_data
//             tableData += `<tr> <td>${value.id}</td> <td>${value.name}</td> <td>${value.year}</td> <td>${value.color}</td>  <td>${value.pantone_value}</td> </tr>`;
//             //remember backticks and no single quotes
//             document.getElementById('table_body').innerHTML = tableData;
//         }

//     } catch (error) {
//         console.error('Error fetching user data:', error);
//     }
// })
