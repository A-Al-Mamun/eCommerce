// LogIn Section

let logBtn = document.getElementsByClassName("log-btn")[0];

logBtn.addEventListener('click', () => {
    let email = document.getElementById('log-email').value;
    let pass = document.getElementById('log-pass').value;
    
    alert(pass);
    let userEmail = "mn@gmail.com"; 
    let userPass = "123";
    
    
    if((userEmail == email) && (userPass == pass)){
        alert("Seccessfully LogIn"); 
        window.location.assign("/01_HTML_CSS_JS/eCommerce/01_eCommerce/index.html");
    }else{
        alert('Not matched');
    }

}); 



