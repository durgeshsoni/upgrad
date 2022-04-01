var webinarsData2=[
  {
  image:"https://v.fastcdn.co/u/f8c127f9/61179214-0-shutterstock-2068151.jpg",
  name:"How is Metaverse shaping the Future of Blockchain?",
  host:"Host: Dipesh Sukhani  ",
  cto:"Smart Contract Developer and Mentor",
  co_host:"Co-Host: Shubhada Lokare",
  data_time:"25 Mar 22  |  6:30 PM  "
},

{
  image:"https://v.fastcdn.co/u/f8c127f9/61179196-0-shutterstock-1705312.jpg",
  name:"Alumni Talks: MSc in Computer Science from LJMU",
  host:"Host: Raghushrikant",
  cto:"Senior Director DevOps at Nasdaq, Alumni for Masters in Computer Science by LJMU",
  co_host:"Co-Host: Shubhada Lokare",
  data_time:"21 Mar 22  |  7:00 PM"
},

{
  image:"https://v.fastcdn.co/u/f8c127f9/60785956-0-shutterstock-5351249.jpg",
  name:"Faculty Talks- Software Development Programs by IIIT-Bangalore",
  host:"Host: Prof. Meenakshi D'Souza",
  cto:"Professor at IIIT-Bangalore",
  co_host:"Co-Host: Shubhada Lokare",
  data_time:"15 Mar 22  |  6:00 PM "
},

{
  image:"https://v.fastcdn.co/u/f8c127f9/61119426-0-shutterstock-1134885.jpg",
  name:"MERN STACK: Applications and Popular Use Cases",
  host:"Host: Mohinish Joshi Alumni Rutul Sha",
  cto:"Senior Full Stack Developer at VMware, Lead Software Engineer at Data Dynamic",
  co_host:"Co-Host: Shubhada Lokare",
  data_time:"09 Mar 22  |  6:00 PM"
},

{
  image:"https://v.fastcdn.co/u/f8c127f9/61119406-0-shutterstock-1466791.jpg",
  name:"Multiply your Salary! Step-by-step Guide to transition into Software roles in Product based Companies",
  host:"Host: Raj Kumar Dubey",
  cto:"Tech lead at India's one of the biggest start-up - Swiggy",
  co_host:"Co-Host: Shubhada Lokare",
  data_time:"04 Mar 22  |  6:30 PM"
},

{
  image:"https://v.fastcdn.co/u/f8c127f9/61011988-0-shutterstock-1458581.jpg",
  name:"Cloud Adoption of Data Solutions",
  host:"Host: Ganesh Gurusiddaiah",
  cto:"Senior Data Engineer at Fractal",
  co_host:"Co-Host: Shubhada Lokare",
  data_time:"25 Feb 22  |  6:30 PM "
},

{
  image:"https://v.fastcdn.co/u/f8c127f9/60845731-0-shutterstock-2049717.jpg",
  name:"DevOps- New Avenue to Cloud Development",
  host:"Host: Vishwa Mohan",
  cto:"Senior Staff Engineer at Linkedin",
  co_host:"Co-Host: Shubhada Lokare",
  data_time:"21 Feb 22  |  6:30 PM  "
},

{
  image:"https://v.fastcdn.co/u/f8c127f9/60785956-0-shutterstock-5351249.jpg",
  name:"Info session| Software Development Programs-Hear from IIIT-Bangalore",
  host:"Host: Prof. Meenakshi D'Souza",
  cto:"Professor at IIIT-Bangalore ",
  co_host:"Co-Host: Shubhada Lokare",
  data_time:"16 Feb 22  |  6:30 PM  "
},

{
  image:"https://v.fastcdn.co/u/f8c127f9/60845716-0-shutterstock-1896527.jpg",
  name:"How to land into software roles in FAANG Companies",
  host:"Host: Nishant Goyal",
  cto:"Ex Amazon",
  co_host:"Co-Host: Shubhada Lokare",
  data_time:"8 Feb 22  |  7:30 PM"
},

{
  image:"https://v.fastcdn.co/u/f8c127f9/60615410-0-shutterstock-1770767.jpg",
  name:"2022 Edition- Guide To Become The Next Big Thing in Full Stack",
  host:"Host: Raj Kumar Dubey",
  cto:"Tech Lead at Swiggy- Supr Daily",
  co_host:"Co-Host: Shubhada Lokare",
  data_time:"02 Feb 22  |  7:30 PM "
},

{
  image:"https://v.fastcdn.co/u/f8c127f9/60615220-0-shutterstock-1421446.jpg",
  name:"How to make it big in IT in 2022- Job market and Careers",
  host:"Host: Vishwa Mohan",
  cto:"Senior Staff Engineer at LinkedIn",
  co_host:"Co-Host: Shubhada Lokare",
  data_time:"28 Jan 22  |  6:00 PM "
},

{
  image:"https://v.fastcdn.co/u/f8c127f9/60845731-0-shutterstock-2049717.jpg",
  name:"Java Essentials Bootcamp| upGrad",
  host:"Host: Abhinav Rawat",
  cto:"Senior Content Strategist at upGrad",
  co_host:"Co-Host: Shubhada Lokare",
  data_time:"24 Jan 22  |  6:00 PM "
},

{
  image:"https://v.fastcdn.co/u/f8c127f9/60615275-0-shutterstock-7499220.jpg",
  name:"Careers & Jobs in the Blockchain Industry",
  host:"Host: Akash Bansal",
  cto:"Co-founder of The Blockchain University",
  co_host:"Co-Host: Shubhada Lokare",
  data_time:"17 Jan 22  |  6:00 PM "
},

{
  image:"https://v.fastcdn.co/u/f8c127f9/60413780-0-shutterstock-1451794.jpg",
  name:"Full Stack(Generalist) vs Front End/Back End(Specialist)",
  host:"Host: Vighneshwar Bhat",
  cto:"Software Engineer IV at Walmart Labs India",
  co_host:"Co-Host: Shubhada Lokare",
  data_time:"05 Jan 22  |  7:00 PM "
}


];

console.log(webinarsData2)



let ShowList2=document.getElementById("ShowList2")

 function appendData2()
 {
  webinarsData2.map(function(ele)
  {

    var div=document.createElement("div")
  
    var image=document.createElement("img")
    image.src=ele.image
    image.setAttribute("id","image")
  
    var nameDiv=document.createElement("div")
    var name=document.createElement("p")
    name.innerText=ele.name;
   
    nameDiv.append(name)
    nameDiv.setAttribute("id","name")
  
    var tecnoDiv=document.createElement("div")
      
    var Technology=document.createElement("p")
    Technology.innerText="Technology";
    Technology.setAttribute("id","Technology")
  
    var hostCtoDiv=document.createElement("div")
    var host=document.createElement("p")
    host.innerText=ele.host;
    host.setAttribute("id","host")
    // host.addEventListener("click",function(e)
    // {
    //   link(e)
    // })
  
    var cto=document.createElement("p")
    cto.innerText=ele.cto;

    hostCtoDiv.append(host,cto)
    hostCtoDiv.setAttribute("id","hostCtoDiv")
  
    var cohostmanDiv=document.createElement("div")
    var co_host=document.createElement("p")
    co_host.innerText=ele.co_host;
    co_host.setAttribute("id","co_host")
  
    var Manager=document.createElement("p")
    Manager.innerText="Program Manager at upGrad";
   
    cohostmanDiv.append(co_host,Manager)
    cohostmanDiv.setAttribute("id","cohostmanDiv")
  
    var hr=document.createElement("div")
    hr.setAttribute("id","hr")
  
    var dateImgdiv=document.createElement("div")
    dateImgdiv.setAttribute("id","dateImgdiv")
  
    var cal=document.createElement("img")
    cal.src="https://v.fastcdn.co/u/f8c127f9/58656682-0-calendar.png"
    cal.setAttribute("id","logo")
  
    var data_time=document.createElement("p")
    data_time.innerText=ele.data_time
    data_time.setAttribute("id","data_time")
  
    var btn=document.createElement("button")
    btn.innerText="Register Now"
    btn.setAttribute("id","btn")
  
    dateImgdiv.append(cal,data_time)
    tecnoDiv.append(Technology,hostCtoDiv,cohostmanDiv)
    tecnoDiv.setAttribute("id","tecnoDiv")
  
  
   
  
    div.append(image,nameDiv,tecnoDiv,hr,dateImgdiv,btn)
    ShowList2.append(div)
  
   
  })
 }
 appendData2()


//  function  link(e){
//   //  e.style.target="_blank"
//    window.location.href="https://www.linkedin.com/in/anishmahapatra/"
//  }
//  link()