function indexrun(){
    location="./index.html"
 }

 let searchValue=JSON.parse(localStorage.getItem("searchInp"));

 let productData = document.getElementById("product-container");
fetchAndRenderProductData(1,searchValue)
async function fetchAndRenderProductData(num,value) {
  try {
    let res = await fetch(`https://lime-colorful-ladybug.cyclic.app/getkids?page=${num}&title=${value}`)
    let data = await res.json();
    console.log(data)
    let total = document.getElementById("total");
    total.innerText = data.length;
    getCard(data)
  } catch (error) {
    console.log(error)
  }
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
  // img.src(onerror="this.src='';")
  img.src = image[0];
  img.addEventListener("mouseover",()=>{
    if(image[1]!=""){
    img.src=image[1]
    }else{
      img.src=image[0]
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
  span.setAttribute("id","product-coupn");
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
    fetchAndRenderProductData(button.innerText,searchValue)
  })

  return button
}