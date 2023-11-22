// Nav Bar
const cat = () => {
    var barMenu = document.getElementById('barMenu');

    if(barMenu.style.display == 'block'){
        barMenu.style.display = 'none';
    }
    else{
        barMenu.style.display = 'block';
    }
}