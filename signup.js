// ++++++++++++navbar++++++++
window.onscroll = function () {
   myFunction()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
   if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
   } else {
      navbar.classList.remove("sticky");
   }
}


// ++++++++++signupfunctionality++++

let create_acc = document.querySelector("#sign-up-now");
let phoneNumber = document.querySelector("#phone-signup");


create_acc.addEventListener("click", signupUser);

async function signupUser() {
   try {
      let firstname = document.querySelector("#first-name-signup");
      let lastname = document.querySelector("#last-name-signup");
      let email_signup = document.querySelector("#e-mail-signup-page");
      let password_signup = document.querySelector("#password-signup-page");
      const userObj = {
         name: `${firstname.value} ${lastname.value}`,
         email: email_signup.value,
         password: password_signup.value
      }
      console.log(userObj)
      let res = await fetch("https://lime-colorful-ladybug.cyclic.app/reg", {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(userObj)
      })

      let data = await res.json();
      if(data.error){
        return alert("user already exist Please login")
      }
      console.log(data);

      alert(`Welcome ${userObj.name}`);
      location="./signin.html"
   } catch (error) {
      alert("give write input")
   }

}

function indexrun() {
   location = "./index.html"
}