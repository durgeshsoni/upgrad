const BackToTop__icon = document.querySelector('.BackToTop__icon');
const ClickToCall_icon = document.querySelector('.ClickToCall_icon');
const nav = document.getElementById('innerNav_hidden')
window.onscroll = () => {
    if(window.pageYOffset >= 1195) {
        BackToTop__icon.style.display="block";
        ClickToCall_icon.style.display="block";
        nav.style.display= 'block';
    } else {
        nav.style.display= 'none';
    }
}

BackToTop__icon.addEventListener('click',() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    BackToTop__icon.style.display="none";
    ClickToCall_icon.style.display="none";

})