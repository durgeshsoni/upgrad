let imgArr = [];
imgArr.push('https://ik.imagekit.io/upgrad1/marketing-platform-assets/new-images%2Ffree-courses/FCBL__1643967185856.jpg')
imgArr.push('https://ik.imagekit.io/upgrad1/marketing-platform-assets/new-images%2Ffree-courses/freecourse_banner_2__1613636281231.png')
imgArr.push('https://ik.imagekit.io/upgrad1/marketing-platform-assets/new-images%2Ffree-courses/freecourse_banner_1__1613636225411.png')
imgArr.push('https://ik.imagekit.io/upgrad1/marketing-platform-assets/new-images%2Ffree-courses/freecourse_banner_3__1613636315016.png')

// console.log(imgArr)

let slideshowDiv = document.getElementById('slideshow');
let i = 1;
let img = document.createElement('img')
img.src = imgArr[0];
slideshowDiv.append(img);

setInterval(() => {
    if(i === imgArr.length) {
        i = 0;
    }
    let image = imgArr[i];
    let img = document.createElement('img')
    img.src = image;
    slideshowDiv.innerHTML = null;
    slideshowDiv.append(img);
    i++;
},4000)

let count = 0;
let allDiv = document.querySelectorAll('.topic_module ul li')
// console.log('allDiv: ', allDiv);
allDiv.forEach((elem) => {
    elem.addEventListener('click',() => {
        // console.log(elem);
        if(count === 0) {
            elem.style.border = 'none';
            elem.style.boxShadow = '3px 3px 6px 6px rgb(0 0 0 / 16%)';
            count = 1;
        } else {
            elem.style.boxShadow = 'none';
            elem.style.border = '1px solid grey';
            count = 0;
        }
    })
})

const innerNav_hidden = document.getElementById("innerNavbar_hidden");
const innerNav = document.getElementById("innerNavbar");
window.onscroll = function(){
    if(window.pageYOffset >= 1000){
        innerNav_hidden.style.display="block";
        innerNav.style.display="none";
    } else {
        innerNav_hidden.style.display="none";
        innerNav.style.display="block";
    }
}