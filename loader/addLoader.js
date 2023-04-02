import { loader } from "/loader/loader.js";
// document.getElementsByTagName("body")[0].innerHTML = loader();

var loaderCss = document.createElement("link");
loaderCss.setAttribute("rel", "stylesheet");
loaderCss.setAttribute("href", "loader/loader.css");