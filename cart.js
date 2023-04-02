// slideshow
var left=1;
var right=7;
function show(){
    for( i=left;i<=right; i++){
        document.getElementById("c"+i).style.display="inline-block";
    }
}
function moveLeft(){
    if(left<=3 && right<=7){
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

let cartArr=JSON.parse(localStorage.getItem("cart"))||[]
let order_total=document.querySelector("order_total")
let sub_total=document.querySelector("sub_total")
let main=document.querySelector("cart_product")
// function cartArr(){
//   let card=cartArr.forEach((el) =>getCard(el));
//   main.innerHTML=card;
//   let remove=document.getElementById("remove")
//   let price=document.getElementById("price")
//   let edit=document.getElementById("edit")
//   let qty=document.getElementById("qty_option")
//   order_total.innerHTML=Number(price.value)*qty.value
//   sub_total.innerHTML=Number(price.value)*qty.value;
//   remove.addEventListener("click",()=>{

//   })
//   edit.addEventListener("click",()=>{
//     location.href="men.html" 
//   })
// }

// function getCard(el){
//     let return_card=` <div class="cart_pro1">
//     <div class="cart_img">
//        <img src="${el.image}" alt="">
//     </div>
//     <div class="cart_desc">
//        <h4>${el.title}</h4>
//        <p>${el.upc}</p>
//        <p id="price" style="text-decoration: wavy;">${el.price}</p>
//        <p>${el.doorstep} </p>
//        <p id="edit">Edit</p>
//     </div>
//     <div class="qty">
//        <h5>Qty:</h5>
//        <select style="height:30px" name="" id="qty_option">
          
//            <option value="1">1</option>
//            <option value="2">2</option>
//            <option value="3">3</option>
//            <option value="4">4</option>
//            <option value="5">5</option>
//            <option value="6">6</option>
//            <option value="7">7</option>
//            <option value="8">8</option>
//            <option value="9">9</option>
//            <option value="10">10</option>
//        </select>
//    </div>
//        <div class="edit_pt">
//             <a id="remove" href="">Remove</a>
//             <a href="" id="edit">Edit</a>
//        </div>
    
//    </div>`
//    return return_card
// }


// function CartArr(){
//     main.innerHTML=""
//     cartArr.forEach((product) => {
//         let cart_pro1=document.createElement("div")
//         let cart_img=document.createElement("div")
//         let img=document.createElement("img")
//         img.src=product.image
        



//         let cart_desc=document.createElement("div")
//         let h4=document.createElement("h4")
//         h4.textContent=product.title
//         let p1=document.createElement("p")
//         p1.textContent=product.upc
//         let p2=document.createElement("p")
//         p2.setAttribute("id","price")
//         let p3=document.createElement("p")
//         p3.textContent=product.doorstep
//         let p4=document.createElement("p")
//         p4.setAttribute("id","edit")



//        let qty=document.createElement("div")
//        let h5=document.createElement("h5")
//        h5.textContent="Qty:"
//        let selection=document.createElement("selection")
//        selection.setAttribute("id","qty_option")

//        let option1=document.createElement("option")
//        option1.textContent=1
//        let option2=document.createElement("option")
//        option2.textContent=1
//        let option3=document.createElement("option")
//        option3.textContent=1
//        let option4=document.createElement("option")
//        option4.textContent=1
//        let option5=document.createElement("option")
//        option5.textContent=1
//        let option6=document.createElement("option")
//        option6.textContent=1
//        let option7=document.createElement("option")
//        option7.textContent=1
//        let option8=document.createElement("option")
//        option8.textContent=1
//        let option9=document.createElement("option")
//        option9.textContent=1
//        let option10=document.createElement("option")
//        option10.textContent=1

       


//       let edit_pt=document.createElement("div")
//       let a1=document.createElement("a")
//       a1.textContent="Remove"
//       let a2=document.createElement("a")
//       a2.textContent="Edit"
//       a1.setAttribute("id","remove")
//       a2.setAttribute("id","edit")
//       edit_pt.setAttribute("class","edit_pt")
//       a1.addEventListener("click",()=>{
//         cartArr=cartArr.filter((el)=>{
//             return el.id!==product.id
//         })
//         localStorage.setItem("cart",JSON.stringify(cartArr))
//         CartArr()
//       })

//       a2.addEventListener("click",()=>{
//         location.href="men.html"
//       })

      
//       cart_img.append(img)
//       cart_desc.append(h4,p1,p2,p3,p4)
//       selection.append(option1,option2,option3,option4,option5,option6,option7,option8,option9,option10)
//        qty.append(h5,selection)
//        edit_pt.append(a1,a2)

//        order_total.append(Number(p2)*selection.value);
//        sub_total.append(Number(p2)*selection.value);

//        cart_pro1.append(cart_img.cart_desc,qty,edit_pt)
//        main.append(cart_pro1)

       
        

//     });
// }