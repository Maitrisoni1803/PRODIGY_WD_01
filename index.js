function changeBg(){
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if(scrollValue < 150){
        navbar.classList.remove('BgColor');
    } else{
        navbar.classList.add('BgColor');
    }
    
}

window.addEventListener('scroll', changeBg);