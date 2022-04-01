var user_arr=JSON.parse(localStorage.getItem("userList")) 
// console.log(user_arr)

var name=document.getElementById("name")


var appendWebDetails=(user_arr)=>{
  user_arr.forEach(function(ele)
  {
    console.log(ele);
    let div=document.createElement("div")

    var name=document.createElement("p")
    name.innerText=ele.firstname
    
    
    div.append(name)
    name.append(div)
    
  })
}
appendWebDetails(user_arr)