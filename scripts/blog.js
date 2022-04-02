var images=["https://s3.ap-south-1.amazonaws.com/upgrad.prod.blog/blog/wp-content/uploads/2021/05/19153715/Executive-PG-Programme-in-Data-Science-.png",
"https://s3.ap-south-1.amazonaws.com/upgrad.prod.blog/blog/wp-content/uploads/2021/05/19153647/Executive-PG-Programme-in-Software-Development-Specialisation-in-Full-Stack-Development.png",
"https://s3.ap-south-1.amazonaws.com/upgrad.prod.blog/blog/wp-content/uploads/2021/05/19153840/Advanced-Certificate-in-Digital-Marketing-and-Communication.png",
"https://www.upgrad.com/blog/wp-content/uploads/2020/09/Business-Analytics-Certification-Program-.png",
"https://www.upgrad.com/blog/wp-content/uploads/2020/09/mba_slider.png",
"https://www.upgrad.com/blog/wp-content/uploads/2020/09/Blog-Slider_2135X651-2.png"

];
let container=document.getElementById("items");
images.forEach(function(ele,ind){
  let box=document.createElement("div");
  let pic=document.createElement("img");
  pic.src=ele;
  pic.setAttribute("id","slider")
  box.append(pic);
  container.append(box);
});
var item = 1;

function prev() {
  var items = document.querySelectorAll("#items > div");
  console.log(items);
  if (item == 1) {
    item = items.length;
  } else {
    item--;
  }
  showItem();
}

function next() {
  var items = document.querySelectorAll("#items > div");
  if(item == items.length) {
    item = 1
  } else {
    item++
  }
  showItem();
}

function showItem() {
  var items = document.querySelectorAll("#items > div");
  for (var i = 0; i < items.length; i++) {
    if (i + 1 == item) {
      items[i].style.display = "block"
    } else {
      items[i].style.display = "none";
    }
  }
}

showItem();

let sort=document.getElementById("sor");
let dissort=document.getElementById("sort");

sort.addEventListener("click",funsort)
function funsort(){
    // let a=document.createElement("div");
    // a.innerText="Sort By";
    dissort.innerHTML=null;
    let b=document.createElement("div");
    b.innerText="Popularity";
    let c=document.createElement("div");
    c.innerText="Recent Posts";
    dissort.append(b,c);
}
dissort.addEventListener("mouseleave",sortdisappear)
function sortdisappear(){
    dissort.innerHTML=null;
}
let category=document.getElementById("cat");
let discat=document.getElementById("category");
let categorydata=["Artificial Intelligence","Arts","Big Data","Block Chain","Cloud Computing","Data Science","Digital Marketing","Full Stack Development","MBA","Study Abroad"];
category.addEventListener("click",mycat);
function mycat(){
    discat.style.overflowY="scroll";
    categorydata.forEach(function (ele,ind){
        let tub=document.createElement("div");
        let list=document.createElement("h3");
        list.innerText=ele;
        tub.append(list);
        discat.append(tub);
    });
}
discat.addEventListener("mouseleave",catdisappear)
function catdisappear(){
    discat.innerText=null;
    discat.style.overflow="hidden";
}


let room=document.getElementById("container");

let data=[{image:"https://www.upgrad.com/blog/wp-content/uploads/2019/07/Blog_FI_July_upGrads-Knowledge-base-352x233.png",
content:"Git Tutorial For Beginners: Learn Git from Scratch	",
description:"Protecting the source code is a crucial part of the software development process, especially when…",
pic:"https://www.upgrad.com/blog/wp-content/uploads/2019/04/fav-icon-96x96-24x24.png",
text:"by UpGrad",
date:"Mar 17,2022"},
{image:"https://www.upgrad.com/blog/wp-content/uploads/2019/07/Blog_FI_July_upGrads-Knowledge-base-352x233.png",
content:"Git Tutorial For Beginners: Learn Git from Scratch	",
    description:"Protecting the source code is a crucial part of the software development process, especially when…",
    pic:"https://www.upgrad.com/blog/wp-content/uploads/2019/04/fav-icon-96x96-24x24.png",
    text:"by UpGrad",
    date:"Mar 17,2022"},
{image:"https://www.upgrad.com/blog/wp-content/uploads/2019/07/Blog_FI_July_upGrads-Knowledge-base-352x233.png",
content:"Git Tutorial For Beginners: Learn Git from Scratch	",
        description:"Protecting the source code is a crucial part of the software development process, especially when…",
        pic:"https://www.upgrad.com/blog/wp-content/uploads/2019/04/fav-icon-96x96-24x24.png",
        text:"by UpGrad",
        date:"Mar 17,2022"},
    {image:"https://www.upgrad.com/blog/wp-content/uploads/2019/07/Blog_FI_July_upGrads-Knowledge-base-352x233.png",
    content:"Git Tutorial For Beginners: Learn Git from Scratch	",
            description:"Protecting the source code is a crucial part of the software development process, especially when…",
            pic:"https://www.upgrad.com/blog/wp-content/uploads/2019/04/fav-icon-96x96-24x24.png",
            text:"by UpGrad",
            date:"Mar 17,2022"},
            {image:"https://www.upgrad.com/blog/wp-content/uploads/2019/07/Blog_FI_July_upGrads-Knowledge-base-352x233.png",
            content:"Git Tutorial For Beginners: Learn Git from Scratch	",
description:"Protecting the source code is a crucial part of the software development process, especially when…",
pic:"https://www.upgrad.com/blog/wp-content/uploads/2019/04/fav-icon-96x96-24x24.png",
text:"by UpGrad",
date:"Mar 17,2022"},
{image:"https://www.upgrad.com/blog/wp-content/uploads/2019/07/Blog_FI_July_upGrads-Knowledge-base-352x233.png",
content:"Git Tutorial For Beginners: Learn Git from Scratch	",
description:"Protecting the source code is a crucial part of the software development process, especially when…",
pic:"https://www.upgrad.com/blog/wp-content/uploads/2019/04/fav-icon-96x96-24x24.png",
text:"by UpGrad",
date:"Mar 17,2022"},]


data.forEach(function(ele,ind){
    let box=document.createElement("div");
    box.setAttribute("id","box");
    // box.addEventListener("mouseenter",myfun);
    // function myfun(){
    //     box.style.margin="10px";
    //     // box.style.marginBottom="10px";
    // }
    // box.addEventListener("mouseleave",fun);
    // function fun(){
    //     box.style.margin="-10px";
    //     // box.style.marginBottom="10px";
    // }
    
    let img=document.createElement("img")
    img.src=ele.image;
    let inbox=document.createElement("div");
    let content=document.createElement("h2");
    content.innerText=ele.content;
    let description=document.createElement("p")
    description.innerText=ele.description;
    let div=document.createElement("div");
    let pic=document.createElement("img")
    pic.src=ele.pic;
    let text=document.createElement("p");
    text.innerText=ele.text;
    let date=document.createElement("p");
    date.innerText=ele.date;


    div.append(pic,text,date);
    inbox.append(content,description,div);
    box.append(img,inbox);
    room.append(box);

    
    

})