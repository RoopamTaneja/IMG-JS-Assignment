let p = fetch('https://reqres.in/api/users');

p.then((value) => {
    return value.json();//converted to obj
})
    .then((obj_data) => {
        let tableData = "";
        for (let value of obj_data.data) {
            tableData += `<tr> <td>${value.id}</td> <td><img src = "${value.avatar}"></img></td> <td>${value.first_name}</td> <td>${value.last_name}</td>  <td>${value.email}</td> </tr>`;
            //remember backticks and no single quotes
            document.getElementById('table_body').innerHTML = tableData;
        }
    })
    .catch((error) => {
        console.log(error);
    })