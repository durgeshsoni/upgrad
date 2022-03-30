
var requestOptions = {
    method : "GET",
    redirect: 'follow'
  };
  var courses;
fetch("https://upgrad78.herokuapp.com/course", requestOptions)
.then(response => response.json())
.then(result => {courses= result
    // showgrid("Management");
})
.catch(error => console.log('error', error));

var sidedropdown = document.getElementById("sidedropdown")
function showcourse(value){
    let data = courses.filter(el => el.category == value)
    showondrop(data)
}

async function showondrop(data){
    sidedropdown.innerHTML = null;

   await data.forEach(({_id,title,logo,Duration,university,link,offer}) => {
        let div = document.createElement("div")
        div.style.margin = "20px"
        div.onclick = ()=>{
            localStorage.setItem("course_id",(JSON.stringify(_id))),
            window.location.href = link
        }
        div.setAttribute("class","border-black border-2 rounded-lg flex hover:border-gs-red hover:bg-gray-100 ")
        let img = document.createElement("img")
        img.src = logo;
        img.style.width = "20%"
        img.style.height= "40px"
        img.style.objectFit = "cover"
        img.style.marginTop="20px"
        img.style.marginLeft="20px"
        let details = document.createElement("div")
        details.style.width= "70%";
        let h1 = document.createElement("h1")
        h1.style.fontWeight= "bold"
        h1.textContent = title;
        let uni = document.createElement("p")
        uni.style.fontSize = "12px"
        uni.textContent = university;
        let p = document.createElement("p")
        p.innerText = "Duration-" + Duration +" Months";
        p.style.fontSize= "12px"
        let off = document.createElement("p")
        off.style.margin = "5px"
        off.style.padding = "2px"
        off.style.width = "fit-content"
        if(offer == "New"){
            off.style.backgroundColor = "red";
            off.style.color= "white"
        }else if(offer == ""){
            off.style.backgroundColor = "transparent";
        }
        else{
            off.style.backgroundColor = "yellow";
            off.style.color= "red"
        }
        off.setAttribute("class","rounded")
        let arrow = document.createElement("div")
        arrow.innerHTML = "​&#8594;"
        arrow.style.marginTop= "10%"
        arrow.style.backgroundColor= "yellow"
        arrow.setAttribute("class","text-3xl text-gray-400 h-0")
        off.textContent = offer
        details.append(h1,uni,p,off)
        div.append(img,details,arrow)
        sidedropdown.append(div)
    });

}
//nav bar ends


// ------------------------------- slider start ------------

var slider = [
    img1 ="https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/ds_ab__1648039243267.png",
    img2 = "https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/ab_tech__1648018734223.png",
    img3 = "https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/ab_deloitte__1648018465898.png",
    img4 = "https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/wharton_dweb__1648188231810.png",
    img5 = "https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/wharton_dweb__1648188231810.png"
] 

let i =1;
let banner = document.getElementById("banner")
 const show = setInterval(()=>{
    if(i == slider.length){
        i = 0;
    }
    banner.innerHTML = null;

    let img = document.createElement("img")
    img.src = slider[i]
    img.style.width = "100%"

    banner.append(img)
    i++;

},2000)


// -------------------sign up form start -------------------------

let signbtn = document.getElementById('button1');

signbtn.addEventListener('click',()=>{
    let x = document.getElementById('sign');
    if(x.style.display === "none"){
        x.style.display = "block";
    }else{
        
        x.style.display = "none";

    }
});


function getOtp(){
    let number = document.getElementById('number').value;
    let x = document.getElementById('sign');
    if(number.length == 10){

        x.style.display = "none"
        alert("WelCome")
    }else{
        alert("Enter 10 digit number")
    }
}


