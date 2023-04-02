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
// fetchAndRender();

// async function fetchAndRender(){
//   let userObj={
//     name:"shivam",
//     email:"shi@",
//     password:"1234"
//   }
//   try {

//     let res= await fetch("https://lime-colorful-ladybug.cyclic.app/reg",{
//       method:"POST",
//       headers:{
//         "Content-Type":"application/json"
//       },
//       body: JSON.stringify(userObj)
//     })
//     let data=await res.json();
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }
// fetchAndRenderLogin()

async function fetchAndRenderLogin() {
  let userObj = {
    email: "shi@",
    password: "1234"
  }
  try {

    let res = await fetch("https://lime-colorful-ladybug.cyclic.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userObj)
    })
    let data = await res.json();
    console.log(data.token)
  } catch (error) {
    console.log(error)
  }
}

let DisplayUl = document.getElementById("ul")
let fliterItem = document.getElementById("filter-item");
fliterItem.addEventListener("click", (e) => {
  e.preventDefault()
  DisplayUl.style.display = "block"
})


let productData = document.getElementById("product-container");
fetchAndRenderProductData(1)
async function fetchAndRenderProductData(num) {
  try {
    let res = await fetch(`https://lime-colorful-ladybug.cyclic.app/getmen?page=${num}`)
    let data = await res.json();
    console.log(data)
    let total = document.getElementById("total");
    total.innerText = data.length;
    getCard(data)
    filterData(data)
  } catch (error) {
    console.log(error)
  }
}
let filter=document.getElementById("filter");
  filter.addEventListener("change",()=>{
    console.log("working")
  })
function filterData(sort){
  console.log("coming")
  
}

function getCard(data) {
  productData.innerHTML = null;
  let cardList = document.createElement("div");
  cardList.classList.add("card-list")
  data.forEach((item) => {
    let productObj = createDivAndAppend(
      item._id,
      item.img,
      item.title,
      item.price,
      item.category
    )
    cardList.append(productObj);
  })
  productData.append(cardList);
  return cardList;
}


function createDivAndAppend(id, image, title, price, desc) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-id", id);

  ////// product view page//////
let productId=JSON.parse(localStorage.getItem("product-id-view"))
card.addEventListener("click",()=>{
  localStorage.setItem("product-id-view",JSON.stringify(id))
  location="productViewPage.html"
})
////// product view page//////

  const img = document.createElement("img");
  img.setAttribute("img-id", "product-img");
  img.src = image[0];
  img.style.transition = "3s";
  img.addEventListener("mouseover",()=>{
    if(image[1]!=""){
    img.src=image[1]
    }
  })
  img.addEventListener("mouseleave",()=>{
    img.src=image[0]
  })
 


  const cardTitle = document.createElement("h3");
  cardTitle.classList.add("product-title");
  cardTitle.innerText = title;

  const ProductPrice = document.createElement("p");
  ProductPrice.classList.add("product-price");
  let span = document.createElement("span")
  span.classList.add("product-coupn");
  span.style.color = "black"
  span.innerText = "after coupn"
  if (price == "after coupon") {
    price = `$ 175 ${span.innerText}`
    ProductPrice.innerText = price
  } else {
    ProductPrice.innerText = `$ ${price} ${span.innerText}`
  }

  const fakePrice = document.createElement("a");
  fakePrice.classList.add("product-price-fake");
  if (price == "after coupn") {
    fakePrice.innerText = $375
  } else {
    if (typeof (price) == Number) {
      fakePrice.innerText = +(price) * 2
    } else {
      fakePrice.innerText = "$367"
    }

  }




  const ProductDesc = document.createElement("p");
  ProductDesc.classList.add("product-desc");
  ProductDesc.innerText = desc

  card.append(img, cardTitle, ProductPrice, fakePrice, ProductDesc);
  return card;

}


const pagination = document.getElementById("pagination-wrapper");
pagination.innerHTML = null;
for (let i = 1; i <= 10; i++) {
  pagination.append(getAsButton(i, i));
}

function getAsButton(text, dataId) {
  let button = document.createElement("button");
  button.innerText = text;
  button.classList.add("pagination-button");
  button.setAttribute("data-page-number", dataId);
  button.addEventListener("click", (e) => {
    fetchAndRenderProductData(button.innerText)
  })

  return button
}

function indexrun() {
  location = "./index.html"
}
