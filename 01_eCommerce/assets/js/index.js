
// Nav Bar
const cat = () => {
    var barMenu = document.getElementsByClassName('bar-menu')[0];

    if(barMenu.style.display == 'block'){
        barMenu.style.display = 'none';
    }
    else{
        barMenu.style.display = 'block';
    }
}


// Register Section
// let reg = document.getElementsByClassName('register')[0];
// reg.addEventListener('click', () => {
//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//     let phone = document.getElementById('phone').value;
//     let pass = document.getElementById('pass').value;

//     // alert(name + email + phone + pass);
// })

