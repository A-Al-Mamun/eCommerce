// LogIn Section

let logMain = document.getElementsByClassName('log')[0];
// let mn = document.getElementsByClassName("log-btn")[0];

// console.log(logBtn);
// alert(logMain);

// alert(logMain.innerHTML = 'Admin');
// if (mn !== undefined && mn !== null) {
    // alert(mn.innerHTML = 'Hello');
  
const mn = () => {
    let email = document.getElementById('log-email').value;
    let pass = document.getElementById('log-pass').value;


    let userEmail = "admin@gmail.com";
    let userPass = "admin";


    if ((userEmail == email) && (userPass == pass)) {
        alert("Seccessfully LogIn");
        window.location.assign("/01_HTML_CSS_JS/eCommerce/01_eCommerce/index.html");
        logMain.innerHTML = 'Admin';
    } else {
        alert('Not matched');
    }

}

// }

//         alert(logMain.innerHTML = 'Admin');