let sign_in_now = document.getElementById("sign-in-now");

sign_in_now.addEventListener("click", () => {
  let email_signin = document.getElementById("e-mail-signin-page");
  let password_signin = document.getElementById("password-signin-page");
  if (email_signin.value != "" && password_signin.value != "") {
      signinUser()
      console.log("clicked")
  }
})



async function signinUser() {

  try {
    let email_signin = document.getElementById("e-mail-signin-page");
    let password_signin = document.getElementById("password-signin-page");

    let userObj = {
      email: email_signin.value,
      password: password_signin.value
    }
    let res = await fetch("https://lime-colorful-ladybug.cyclic.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userObj)
    })
    let data = await res.json();
    console.log(data);
    localStorage.setItem("user-display-name", JSON.stringify(data.name));
    alert(data.msg);
    if((email_signin.value == "ritesh@gmail.com" && password_signin.value =="9977")||(email_signin.value == "shivam@gmail.com" && password_signin.value =="6209")||(email_signin.value == "ranvijay@gmail.com" && password_signin.value =="1234")||(email_signin.value == "deepshree@gmail.com" && password_signin.value =="1234")){
      localStorage.setItem("acces-token", JSON.stringify(data.token));
      location="./admin.html"
    }else{
       location="./index.html"
    }
  } catch (error) {
    alert("user not exist register first");
     location = "./signup.html"
  }

}


function indexrun() {
  location = "./index.html"
}