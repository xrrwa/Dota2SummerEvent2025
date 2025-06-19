const login = 'qwe';
const password = 'ewq';
let l = document.querySelector('#login');
let p = document.querySelector("#password");

function loginBtn() {
    const inputLogin = l.value;
    const inputPassword = p.value;
    let status = document.querySelector('.status');
    
    if (login == inputLogin && password == inputPassword) {
        window.location = 'calendar.html';
    }
    else {
        status.style.opacity = 1;
    }
    console.log(loggedIn);
}