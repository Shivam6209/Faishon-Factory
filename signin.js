let sign_in_now = document.querySelector("#sign-in-now");
let email_signin = document.querySelector("#e-mail-signin-page");
let password_signin = document.querySelector("#password-signin-page");

sign_in_now.addEventListener("click", signInForms)

function signInForms(){
  
  let signupForm = JSON.parse(localStorage.getItem("SignUp"))||[]
  let flag = false;
  count=0;
  nothing=0;
  signupForm.forEach((element,index) => {
   
    if(element.email_signup_data === email_signin.value){
      if(element.password_signup_data === password_signin.value){
        flag=true;
      }else{
        count++;
      }
    }else{
      nothing++;
     
    }
  });

  if(flag===true){
   if(email_signin.value==="riteshsalve07@gmail.com" && password_signin.value==="9977"){
    alert("Welcome Boss")
    location.href="./admin.html"
   }else{
    alert("Sign In Succussful")
    location.href="./index.html"
   }
    
  }
  else if(count==1){
    alert("Wrong Password")
  }else{
    alert("User does not exist, You need to sign-up First")
  }
  
}