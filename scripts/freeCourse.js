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
},3000)