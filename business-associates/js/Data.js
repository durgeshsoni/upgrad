var  webinarsData1=[
  {
    image:"https://v.fastcdn.co/u/f8c127f9/61354252-0-shutterstock-1481505.jpg",
    name:"Real-Life Experience in Building Large Scale Tech Products Like Outlook",
    host:"Host: Mukesh Jain",
    cto:"CTO - Capgemini",
    co_host:"Co-Host: Shubhada Lokare",
    data_time:"25 Mar 22  |  6:30 PM"
  },

  {
    image:"https://v.fastcdn.co/u/f8c127f9/61354284-0-shutterstock-7687107.jpg",
    name:"Data Structure and Algorithms: Plan, Learn & Crack",
    host:"Host: Mohinish Joshi",
    cto:"Senior Full Stack Developer at VMware",
    co_host:"Co-Host: Shubhada Lokare",
    data_time:"14 Apr 22  |  7:30 PM"
  },

  {
    image:"https://v.fastcdn.co/u/f8c127f9/61354326-0-shutterstock-1440732.jpg",
    name:"Faculty Talks- Software Development Programs by IIIT-Bangalore",
    host:"Host: Prof. Meenakshi D'Souza",
    cto:"Professor at IIIT-Bangalore",
    co_host:"Co-Host: Shubhada Lokare",
    data_time:"21 Apr 22  |  6:00 PM"
  }
];

 console.log(webinarsData1);


let ShowList=document.getElementById("ShowList")

 function appendData1()
 {
  webinarsData1.map(function(ele)
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
    btn.addEventListener("click",function()
    {
      window.location.href="register.html"
    })
  
    dateImgdiv.append(cal,data_time)
    tecnoDiv.append(Technology,hostCtoDiv,cohostmanDiv)
    tecnoDiv.setAttribute("id","tecnoDiv")
  
  
   
  
    div.append(image,nameDiv,tecnoDiv,hr,dateImgdiv,btn)
    ShowList.append(div)

  
   
  })
 }
 appendData1()
