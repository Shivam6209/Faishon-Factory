//slideshow
var left=1;
var right=7;
function show(){
    for( i=left;i<=right; i++){
        document.getElementById("c"+i).style.display="inline-block";
    }
}
function moveLeft(){
    if(left<=5 && right<=10){
        document.getElementById("c"+i).style.display="none";
        left+=1;
        right+=1
    
    for( i=left;i<=right; i++){
        document.getElementById("c"+i).style.display="inline-block";
    }
   }else{
    return;
 }
}

function moveRight(){
    if(left>=2 && right>=6){
        document.getElementById("c"+right).style.display="none";
        left-=1;
        right-=1;

        for( i=left; i<=right; i++){
            document.getElementById("c"+i).style.display="inline-block";
        }
    }else{
        return;
    }
}



// cart product

let ecommerce=JSON.parse(localStorage.getItem("cart-product-id"))||[]
cartarr()
//  start of cartarr
function cartarr(){
    let order_total=document.getElementById("order_total")

  let main=document.getElementById("cart_product")
 let ecommerce=JSON.parse(localStorage.getItem("cart-product-id"))||[]

let x=""
ecommerce.forEach((el)=>{
    
    
    x+=` <div class="cart_pro1">
    <div class="cart_img">
       <img src="${el.img[0]}" alt="">
    </div>
    <div class="cart_desc">
       <h4>${el.title}</h4>
       
       <p id="price" style="text-decoration: wavy;">${el.price}</p>
       <p>${el.category} </p>
       <p id="edit">Edit</p>
    </div>
    <div class="qty">
       <h5>Qty:</h5>
       <select style="height:30px" name="" id="qty_option">
          
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">5</option>
           <option value="6">6</option>
           <option value="7">7</option>
           <option value="8">8</option>
           <option value="9">9</option>
           <option value="10">10</option>
       </select>
   </div>
       <div class="edit_pt">
            <a id="${el._id}"  href="">Remove</a>
            <a id="edit" href="" >Edit</a>
       </div>
    
   </div>`
 
})
 main.innerHTML=x;

 //let edit=document.getElementById("edit")
  let price=document.getElementById("price")
  let sub_total=document.getElementById("subtotal")
  
  
  let qty=document.getElementById("qty_option")
 
// price add in total and subtal
  let add_price=0;
  for(let i=0; i<ecommerce.length; i++){
  let a= Number(ecommerce[i].price)
  
  add_price+=a

  }
  
  order_total.innerHTML=Math.floor(add_price);
  sub_total.innerHTML=Math.floor(add_price);
  qty.addEventListener("click",()=>{
        
        order_total.innerHTML=Math.floor(add_price*qty.value)
        sub_total.innerHTML=Math.floor(add_price*qty.value);
     
  })

  // end of  price add in total and subtal

  
// edit section
let edit=document.getElementById("edit") 
edit.addEventListener("click",()=>{
 console.log("hii")
 location.href="men.html"
})

 }

//  end of cartarr loop



 for(let i=0; i<ecommerce.length; i++){
    let remove=document.getElementById(ecommerce[i]._id)
    remove.addEventListener("click",()=>{
        rem(ecommerce[i]._id)
    })
}




function rem(id){
         ecommerce=ecommerce.filter((pro)=>{
            return id!=pro._id
         })
         localStorage.setItem("cart-product-id",JSON.stringify(ecommerce))
         cartarr()
}


//coupon
// let coupon=document.getElementById("coupon")
// let add_btn=document.getElementById("add_btn")
// add_btn.addEventListener("click",()=>{
//     console.log(add_price)
// })



// payment jtml
let nextpge=document.getElementById("nextpage")
nextpge.addEventListener("click",()=>{
     location.href="payment.html"
    
})



// trying edit section
// function edit_sec(cate){
//     // ecommerce=ecommerce.filter((el)=>{
//     //     if(el==cate){
//     //         location.href="men.html"
//     //     }
//     //     cartarr()
//     // })
//     location.href="men.html"
    
// }

// for(let i=0; i<ecommerce.length; i++){
//     let remove=document.getElementById(ecommerce[i].category)
//     remove.addEventListener("click",()=>{
//         edit_sec(ecommerce[i].category)
//     })
// }






