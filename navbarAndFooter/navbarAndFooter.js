import { navbar,navbar1 } from "/navbar/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("navbar1").innerHTML = navbar1();
// console.log(navbar1())

import {footer} from "/footer/footer.js";
document.getElementById("footer").innerHTML = footer();

setTimeout(() => {
    let search = document.getElementById("search");
    let searchBtn = document.getElementById("search-btn");
    searchBtn.addEventListener("click", () => {
        localStorage.setItem("searchInp", JSON.stringify(search.value))
        location = "searchres.html"
    })
}, 500);



var navbarCss = document.createElement("link");
navbarCss.setAttribute("rel", "stylesheet");
navbarCss.setAttribute("href", "navbar/navbar.css");

var footerCss = document.createElement("link");
footerCss.setAttribute("rel", "stylesheet");
footerCss.setAttribute("href", "footer/footer.css");

let head = document.getElementsByTagName("head")[0];
head.appendChild(footerCss);
head.appendChild(navbarCss);
