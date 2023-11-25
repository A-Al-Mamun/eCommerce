

let register = document.getElementsByClassName('register')[0];

register.addEventListener('click', () => {
    let regEmail = document.getElementById('email').value;
    let regPass = document.getElementById('reg-pass').value;

    window.location.assign("/01_HTML_CSS_JS/eCommerce/01_eCommerce/pages/login.html");
    
})
