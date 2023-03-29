
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// fetchAndRender();

async function fetchAndRender(){
  let userObj={
    name:"shivam",
    email:"shi@",
    password:"1234"
  }
  try {
    
    let res= await fetch("https://lime-colorful-ladybug.cyclic.app/reg",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(userObj)
    })
    let data=await res.json();
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

// fetchAndRenderLogin()
async function fetchAndRenderLogin(){
  let userObj={
    email:"shi@",
    password:"1234"
  }
  try {
    
    let res= await fetch("https://lime-colorful-ladybug.cyclic.app/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(userObj)
    })
    let data=await res.json();
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}