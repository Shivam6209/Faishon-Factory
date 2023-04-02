let productId = JSON.parse(localStorage.getItem("product-id-view"))

fetchAndRenderProduct(productId)
async function fetchAndRenderProduct(id) {
  try {
    let res = await fetch(`https://lime-colorful-ladybug.cyclic.app/kidid/${id}`);
    let data = await res.json();
    console.log(data)
    appendtodom(data)
    changeImg(data)
    setCardIdtoLsforCart(data)
  } catch (error) {

  }
}
// change img function//////////
function changeImg(data) {
  let imageChange = document.getElementById("main-img");
  imageChange.addEventListener("mouseover", () => {
    if (data.img[1] != "") {
      imageChange.src = data.img[1]
    }
  })
  imageChange.addEventListener("mouseleave", () => {
    imageChange.src = data.img[0]
  })
}
// change img function//////////

//// set card id to LS which added to cart///

function setCardIdtoLsforCart(data){
  let cartProductId=JSON.parse(localStorage.getItem("cart-product-id"))||[];
  let addTocart=document.getElementById("btn");
  addTocart.addEventListener("click",()=>{
      cartProductId.push(data)
      localStorage.setItem("cart-product-id",JSON.stringify(cartProductId));
      alert("product added to cart")
  })
}

////new changes added write this line for udate////
function appendtodom(data) {

  let wrapper = document.getElementById("card-wrapper");
  let cardWrap =
    `
   <div class="card">
   <!-- card left -->
   <div class="product-imgs">
     <div class="img-display">
       <div class="img-showcase">
         <img id="main-img" src="${data.img[0]}" alt="shoe image">
       </div>
     </div>
     <div class="img-select">
       <div class="img-item">
         <a href="#" data-id="1">

         </a>
       </div>
       <div class="img-item">
         <a href="#" data-id="2">
          
         </a>
       </div>
     </div>
   </div>
   <!-- card right -->
   <div class="product-content">
     <h3 class="product-title">${data.title}</h3>
     <div class="product-rating">
       <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>
       <i class="fas fa-star-half-alt"></i>
       <span>4.7(21)</span>
     </div>

     <div class="product-price">
        <p class="last-price">Price: $<span id="price">${data.price}</span></p>
       <hr style="margin-top: 40px;margin-bottom: 4px;">
       <p style="display: flex;align-items: center;font-weight: 600;">or 4 interest-free payments of $31.25 with <img
           style="width: 100px;"
           src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSNyXcfTNiShjDEkpXwctOWMlmZH0f5KMHa5dTBZ5eCMkCbPJMP"
           alt=""></p>
       <hr style="margin-top: 4px;margin-bottom: 4px;">
       <p style="display: flex;align-items: center;font-weight: 600;">Manufacturer does not allow coupons</p>
       <hr style="margin-top: 4px;margin-bottom: 4px;">
       <a style="display: flex;align-items: center;font-weight: 600; text-decoration: underline;">$15 Bobbi Brown Set
         With Purchase</a>
       <hr style="margin-top: 4px;margin-bottom: 20px;">
       <a style="display: flex;align-items: center;font-weight: 500;font-size: 16px;">Save 25% when you open a Belk Rewards+ Credit Card.</a>
       <a style="display: flex;align-items: center;font-weight: 500;font-size: 16px;">See if you Prequalify Apply Today</a>
       <hr style="margin-top: 50px;margin-bottom: 40px;">
     </div>

     <p style="margin: 20px; font-weight: 700; font-size: 15px;">FREE Shipping on this item:-</p>

     <div class="purchase-info">
       <input id="quantity" type="number" min="0" value="1">
       <button type="button" id="btn">
         Add to Cart <i class="fas fa-shopping-cart"></i>
       </button>
     </div>
   </div>
 </div>

   `

  
  wrapper.innerHTML = cardWrap;


}