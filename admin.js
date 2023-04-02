let addatabutton = document.getElementById("addProducts");
let tbody = document.getElementById("tbody");

addatabutton.addEventListener("click", () => {
    if (image.value != "" && title.value != "" && price.value != "") {
        let xcategory = document.getElementById("Category").value;
        let token = JSON.parse(localStorage.getItem("acces-token"))
        fetchAndAddProduct(xcategory, token)
    }
})

async function fetchAndAddProduct(xcategory, token) {
    try {
        let image = document.getElementById("image").value;
        let title = document.getElementById("title").value;
        let price = document.getElementById("price").value;
        let brand=document.getElementById("brand").value
        let newProduct = [{
            img: image,
            title: title,
            price: price,
            category: "$15 Bobbi Brown Set With Purchase",
        }];
       
        let res = await fetch(`https://lime-colorful-ladybug.cyclic.app${xcategory}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `${token}`
            },
            body: JSON.stringify(newProduct)
        })
        let data = await res.json();
        alert("product added sucessfully")
        console.log(data)
        append(brand,newProduct[0].price,newProduct[0].img, newProduct[0].title,"1234")
    } catch (error) {
        console.log(error)
    }
}

function  append(brand,price,img, title,id){
    // tbody.innerHTML = null;
        let tr = document.createElement("tr");
        let image=document.createElement("img");
        image.setAttribute("id","tbody-img")
        image.src=img
        let priceTD=document.createElement("td");
        let brandTD=document.createElement("td");
        let titleTD=document.createElement("td");
        let idTD=document.createElement("td");
        priceTD.innerText=price;
        brandTD.innerText=brand;
        titleTD.innerText=title;
        idTD.innerText=id;
        let deleteBtn=document.createElement("td")
        deleteBtn.innerText = "Delete";
        deleteBtn.setAttribute("id", "delete")
        deleteBtn.addEventListener("click",()=>{
            alert("are you sure!")
            tbody.innerHTML = null;
        })
        
        tr.append(image,brandTD,priceTD,titleTD,deleteBtn)
        tbody.append(tr);
}
