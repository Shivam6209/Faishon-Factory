// ++++++++++++navbar++++++++
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky"); }
}


// ++++++++++signupfunctionality++++

let create_acc = document.querySelector("#sign-up-now");
let firstname = document.querySelector("#first-name-signup");
let lastname = document.querySelector("#last-name-signup");
let phoneNumber = document.querySelector("#phone-signup");
let email_signup = document.querySelector("#e-mail-signup-page");
let password_signup = document.querySelector("#password-signup-page");
sign_in_data=[]
console.log(sign_in_data)

create_acc.addEventListener("click", submitform);



function submitform(){
  let signupForm = JSON.parse(localStorage.getItem("SignUp"))||[]
  let obj = {
    firstname_signup_data:firstname.value,
    lastname_signup_data:lastname.value,
    phoneNumber_signup_data:phoneNumber.value,
    email_signup_data: email_signup.value,
    password_signup_data: password_signup.value,
  }
   signupForm.push(obj)
//    sign_in_data.push(signupForm)
   console.log(signupForm)
//   console.log(sign_in_data)
   localStorage.setItem("SignUp",JSON.stringify(signupForm))
   if(firstname.value==="" || lastname.value==="" ){
      
      alert("Please Enter a Value");
      // firstname.innerHTML=""
      // lastname.innerHTML=""
      // phoneNumber.innerHTML=""
      // email_signup.innerHTML=""
      // password_signup.innerHTML=""
      window.location.reload()
      

   }
   else{
      alert("Sign-Up Successfully")
      location.href="./signin.html"
     
   }

}






