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
const BackToTop__icon = document.querySelector('.BackToTop__icon');
const ClickToCall_icon = document.querySelector('.ClickToCall_icon');
window.onscroll = () => {
    if(window.pageYOffset >= 1000 && window.pageYOffset <= 5500) {
        innerNav_hidden.style.display="block";
        innerNav.style.display="none";
        BackToTop__icon.style.display="block";
        ClickToCall_icon.style.display="block";
    } else {
        innerNav_hidden.style.display="none";
        innerNav.style.display="block";
    }
}

BackToTop__icon.addEventListener('click',() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    BackToTop__icon.style.display="none";
    ClickToCall_icon.style.display="none";

})

let showFaq = 0
let footer = document.querySelector('.footer_main')
let faqHead = document.getElementById('faq_section')
let faqContent = document.querySelector('.faq_content')
let svg = document.querySelector('#faq_section svg')
let title = document.querySelector('#faq_section div')
faqHead.addEventListener('click',() => {
    if(showFaq == 0) {
        faqContent.style.display = 'block';
        svg.setAttribute("transform", "rotate(90)")
        title.style.color = '#65a0e6';
        footer.style.marginTop = '440px'
        showFaq = 1;
    } else {
        faqContent.style.display = 'none';
        svg.setAttribute("transform", "rotate(360)")
        title.style.color = 'rgba(21,28,42,.87)';
        showFaq = 0;
        footer.style.marginTop = '0px'
    }
})


const faqInnerContent = document.getElementsByClassName('accordion__title')
// console.log('faqInnerContent: ', faqInnerContent);
const faqInnerHiddenContent = document.getElementsByClassName('accordion_hidden')
// console.log('faqInnerHiddenContent: ', faqInnerHiddenContent);


let faqDetail = 0;
for(let i = 0; i < faqInnerContent.length; i++) {
    faqInnerContent[i].addEventListener('click',() => {
        // console.log(i)
        if(faqDetail == 0) {
            faqInnerHiddenContent[i].style.display = 'block';
            footer.style.marginTop = '480px';
            faqDetail = 1;
        } else {
            faqInnerHiddenContent[i].style.display = 'none';
            footer.style.marginTop = '440px';
            faqDetail = 0;
        }
        
    })
}
