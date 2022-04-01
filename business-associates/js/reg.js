
// document.getElementById("form").addEventListener("submit",formsub())

// function formsub(event)
// {
//   event.preventDefault();

//   var first_name=document.getElementById("firstname").value;
//   var last_name=document.getElementById("lastname").value;
//   var email=document.getElementById("email").value;
//   var country=document.getElementById("country").value;
//   console.log(first_name,last_name,email,country);
// }
// // formsub()


document.querySelector("#form").addEventListener("submit",formSubmit)
var user_arr=JSON.parse(localStorage.getItem("userList")) || []
console.log(user_arr)


function formSubmit(event)
{
  event.preventDefault();

  var firstname=document.querySelector("#firstname").value;
  
  var lastname=document.querySelector("#lastname").value;
  var email=document.querySelector("#email").value;
  var cmail=document.querySelector("#cmail").value;
  var country=document.querySelector("#country").value;
  var phone=document.querySelector("#phone").value;

//  console.log(firstname,lastname,email,cmail,country,phone);

 var userInfo = {
  firstname:firstname,
  email:email,
  cmail:cmail,
  country:country,
  phone:phone
  };
  user_arr.push(userInfo)
  console.log(user_arr)

  localStorage.setItem("userList",JSON.stringify(user_arr)) 
}