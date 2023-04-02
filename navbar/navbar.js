let userName=JSON.parse(localStorage.getItem("user-display-name"))||`My Account`

let navbar = function () {
    return `
        <!-- <div id="fixed"> -->
        <div id="navbar-top">
            <div id="top-line"></div>
            <a id="top-text1" href="#">FREE Shipping <span id="inn"> @59</span></a>
            <a id="top-text2" href="#">Enable Accessibility</a>
        </div>
       
        <div id="navbar-middle">
            <a id = "logo" href = "index.html"><img src="./images/final.png" alt=""></a>
            <input id="search" type="text" placeholder="What can we help you find?">
            <button id="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
            <a id="left" href=""><i class="fa-solid fa-wand-magic-sparkles"></i> Belk Rewards+</a>
            <a href=""><i class="fa-regular fa-ticket"></i>Coupons</a>
            
                <a id="right" href="signin.html"><i class="fa-solid fa-user"></i>${userName}</a>
            
            <a href="./cart.html"><i class="fa-solid fa-cart-shopping"></i> <span id="item-count">0</span>Bag</a>
        </div>
        <!-- </div> -->
        <div id="navbar-bottom">
            <div id="nav2">
                <ul>
                    <li><a id="all-submenu" href="#">Gifts</a>
                        <div class="submenu-1">
                            <ul style="background-color: rgb(238, 236, 236); margin-left: 20px;">
                                <li><a style="font-size: 18px;  color: black; " href="">Gifts</a> </li>
                                <li><a href="">Beauty Gifts</a> </li>
                                <li><a href="">Causy Shop</a> </li>
                                <li><a href="">Designer Handbags</a> </li>
                                <li><a href="">Eco Friendly</a> </li>
                                <li><a href="">Fine Jwellery</a> </li>
                                <li><a href="">For the Trend Setter</a> </li>
                                <li><a href="">Gifts Card</a> </li>
                                <li><a href="">Gifts with a Purpose</a> </li>
                                <li><a href="">Intimates</a> </li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">All Gifts</a></li>
                                <li><a href="#">Gifts for Her</a></li>
                                <li><a href="#">Gifts for Him</a></li>
                                <li><a href="#">Gifts for Kids</a></li>
                                <li><a href="#">Gifts for Pets</a></li>
                                <li><a href="#">Gifts for the Home</a></li>
                                <li><a href="#">Gifts Cards</a></li>
                                <li><a href="#">Shop All...</a></li>
                                <li><a style="font-size: 18px;  color: black; " href="#">Just for Kids</a></li>
                                <li><a href="#">Active Gear</a></li>
                                <li><a href="#">Kids fan Gear</a></li>
                                <li><a href="#">Toys & Games</a></li>
                                <li><a href="#">Gift Cards</a></li>
                                <li><a href="#">Shop All..</a></li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">Gifts by price</a></li>
                                <li><a href="#">Under $10</a></li>
                                <li><a href="#">Under $25</a></li>
                                <li><a href="#">Under $50</a></li>
                                <li><a href="#">Under $100</a></li>
                                <li><a href="#">Over $100</a></li>
                                <li><a href="#">Gifts Card</a></li>
                                <li><a href="#">Shop All...</a></li>
                                <li><a style="font-size: 18px;  color: black; " href="#">Favourite Brands</a></li>
                                <li><a href="#">Brahmin</a></li>
                                <li><a href="#">Estee Lauder</a></li>
                                <li><a href="#">Free Peoples</a></li>
                                <li><a href="#">Michal Chorls</a></li>
                                <li><a href="#">Ralph Lauren</a></li>
                                <li><a href="#">Shop All..</a></li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">Gifts by Recepient</a></li>
                                <li><a href="#">Under $10</a></li>
                                <li><a href="#">Under $25</a></li>
                                <li><a href="#">Under $50</a></li>
                                <li><a href="#">Under $100</a></li>
                                <li><a href="#">Over $100</a></li>
                                <li><a href="#">Gifts Card</a></li>
                                <li><a href="#">Shop All...</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a id="all-submenu" href="women.html">Women</a>
                        <div class="submenu-1">
                            <ul style="background-color: rgb(238, 236, 236); margin-left: 20px;">
                                <li><a style="font-size: 18px;  color: black; " href="">Women</a> </li>
                                <li><a href="">Beauty Gifts</a> </li>
                                <li><a href="">Causy Shop</a> </li>
                                <li><a href="">Designer Handbags</a> </li>
                                <li><a href="">Eco Friendly</a> </li>
                                <li><a href="">Fine Jwellery</a> </li>
                                <li><a href="">For the Trend Setter</a> </li>
                                <li><a href="">Gifts Card</a> </li>
                                <li><a href="">Gifts with a Purpose</a> </li>
                                <li><a href="">Intimates</a> </li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">Women Clothing</a></li>
                                <li><a href="#">Gifts for Her</a></li>
                                <li><a href="#">Gifts for Him</a></li>
                                <li><a href="#">Gifts for Kids</a></li>
                                <li><a href="#">Gifts for Pets</a></li>
                                <li><a href="#">Gifts for the Home</a></li>
                                <li><a href="#">Gifts Cards</a></li>
                                <li><a href="#">Shop All...</a></li>
                                <li><a style="font-size: 18px;  color: black; " href="#">Plus Size Clothing</a></li>
                                <li><a href="#">Active Gear</a></li>
                                <li><a href="#">Kids fan Gear</a></li>
                                <li><a href="#">Toys & Games</a></li>
                                <li><a href="#">Gift Cards</a></li>
                                <li><a href="#">Shop All..</a></li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">Women's Top</a></li>
                                <li><a href="#">Under $10</a></li>
                                <li><a href="#">Under $25</a></li>
                                <li><a href="#">Under $50</a></li>
                                <li><a href="#">Under $100</a></li>
                                <li><a href="#">Over $100</a></li>
                                <li><a href="#">Gifts Card</a></li>
                                <li><a href="#">Shop All...</a></li>
                                <li><a style="font-size: 18px;  color: black; " href="#">Junior Clothing</a></li>
                                <li><a href="#">Brahmin</a></li>
                                <li><a href="#">Estee Lauder</a></li>
                                <li><a href="#">Free Peoples</a></li>
                                <li><a href="#">Michal Chorls</a></li>
                                <li><a href="#">Ralph Lauren</a></li>
                                <li><a href="#">Shop All..</a></li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">Pettle Clothings</a></li>
                                <li><a href="#">Under $10</a></li>
                                <li><a href="#">Under $25</a></li>
                                <li><a href="#">Under $50</a></li>
                                <li><a href="#">Under $100</a></li>
                                <li><a href="#">Over $100</a></li>
                                <li><a href="#">Gifts Card</a></li>
                                <li><a href="#">Shop All...</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a id="all-submenu" href="./men.html">Men</a>
                        <div class="submenu-1">
                            <ul style="background-color: rgb(238, 236, 236); margin-left: 20px;">
                                <li><a style="font-size: 18px;  color: black; " href="">Men</a> </li>
                                <li><a href="">Beauty Gifts</a> </li>
                                <li><a href="">Causy Shop</a> </li>
                                <li><a href="">Designer Handbags</a> </li>
                                <li><a href="">Eco Friendly</a> </li>
                                <li><a href="">Fine Jwellery</a> </li>
                                <li><a href="">For the Trend Setter</a> </li>
                                <li><a href="">Gifts Card</a> </li>
                                <li><a href="">Gifts with a Purpose</a> </li>
                                <li><a href="">Intimates</a> </li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">Mens Clothing</a></li>
                                <li><a href="#">Gifts for Her</a></li>
                                <li><a href="#">Gifts for Him</a></li>
                                <li><a href="#">Gifts for Kids</a></li>
                                <li><a href="#">Gifts for Pets</a></li>
                                <li><a href="#">Gifts for the Home</a></li>
                                <li><a href="#">Gifts Cards</a></li>
                                <li><a href="#">Shop All...</a></li>
                                <li><a style="font-size: 18px;  color: black; " href="#">Shoes</a></li>
                                <li><a href="#">Active Gear</a></li>
                                <li><a href="#">Kids fan Gear</a></li>
                                <li><a href="#">Toys & Games</a></li>
                                <li><a href="#">Gift Cards</a></li>
                                <li><a href="#">Shop All..</a></li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">Men's Accesories</a></li>
                                <li><a href="#">Under $10</a></li>
                                <li><a href="#">Under $25</a></li>
                                <li><a href="#">Under $50</a></li>
                                <li><a href="#">Under $100</a></li>
                                <li><a href="#">Over $100</a></li>
                                <li><a href="#">Gifts Card</a></li>
                                <li><a href="#">Shop All...</a></li>
                                <li><a style="font-size: 18px;  color: black; " href="#">Big and Tall Clothing</a></li>
                                <li><a href="#">Brahmin</a></li>
                                <li><a href="#">Estee Lauder</a></li>
                                <li><a href="#">Free Peoples</a></li>
                                <li><a href="#">Michal Chorls</a></li>
                                <li><a href="#">Ralph Lauren</a></li>
                                <li><a href="#">Shop All..</a></li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">Young Man Clothings</a></li>
                                <li><a href="#">Under $10</a></li>
                                <li><a href="#">Under $25</a></li>
                                <li><a href="#">Under $50</a></li>
                                <li><a href="#">Under $100</a></li>
                                <li><a href="#">Over $100</a></li>
                                <li><a href="#">Gifts Card</a></li>
                                <li><a href="#">Shop All...</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a id="all-submenu" href="#">Kids</a>
                        <div class="submenu-1">
                            <ul style="background-color: rgb(238, 236, 236); margin-left: 20px;">
                                <li><a style="font-size: 18px;  color: black; " href="">Gifts</a> </li>
                                <li><a href="">Beauty Gifts</a> </li>
                                <li><a href="">Causy Shop</a> </li>
                                <li><a href="">Designer Handbags</a> </li>
                                <li><a href="">Eco Friendly</a> </li>
                                <li><a href="">Fine Jwellery</a> </li>
                                <li><a href="">For the Trend Setter</a> </li>
                                <li><a href="">Gifts Card</a> </li>
                                <li><a href="">Gifts with a Purpose</a> </li>
                                <li><a href="">Intimates</a> </li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">All Gifts</a></li>
                                <li><a href="#">Gifts for Her</a></li>
                                <li><a href="#">Gifts for Him</a></li>
                                <li><a href="#">Gifts for Kids</a></li>
                                <li><a href="#">Gifts for Pets</a></li>
                                <li><a href="#">Gifts for the Home</a></li>
                                <li><a href="#">Gifts Cards</a></li>
                                <li><a href="#">Shop All...</a></li>
                                <li><a style="font-size: 18px;  color: black; " href="#">Just for Kids</a></li>
                                <li><a href="#">Active Gear</a></li>
                                <li><a href="#">Kids fan Gear</a></li>
                                <li><a href="#">Toys & Games</a></li>
                                <li><a href="#">Gift Cards</a></li>
                                <li><a href="#">Shop All..</a></li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">Gifts by price</a></li>
                                <li><a href="#">Under $10</a></li>
                                <li><a href="#">Under $25</a></li>
                                <li><a href="#">Under $50</a></li>
                                <li><a href="#">Under $100</a></li>
                                <li><a href="#">Over $100</a></li>
                                <li><a href="#">Gifts Card</a></li>
                                <li><a href="#">Shop All...</a></li>
                                <li><a style="font-size: 18px;  color: black; " href="#">Favourite Brands</a></li>
                                <li><a href="#">Brahmin</a></li>
                                <li><a href="#">Estee Lauder</a></li>
                                <li><a href="#">Free Peoples</a></li>
                                <li><a href="#">Michal Chorls</a></li>
                                <li><a href="#">Ralph Lauren</a></li>
                                <li><a href="#">Shop All..</a></li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">Gifts by Recepient</a></li>
                                <li><a href="#">Under $10</a></li>
                                <li><a href="#">Under $25</a></li>
                                <li><a href="#">Under $50</a></li>
                                <li><a href="#">Under $100</a></li>
                                <li><a href="#">Over $100</a></li>
                                <li><a href="#">Gifts Card</a></li>
                                <li><a href="#">Shop All...</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a id="all-submenu" href="#">Shoes</a>
                        <div class="submenu-1">
                            <ul style="background-color: rgb(238, 236, 236); margin-left: 20px;">
                                <li><a style="font-size: 18px;  color: black; " href="">Gifts</a> </li>
                                <li><a href="">Beauty Gifts</a> </li>
                                <li><a href="">Causy Shop</a> </li>
                                <li><a href="">Designer Handbags</a> </li>
                                <li><a href="">Eco Friendly</a> </li>
                                <li><a href="">Fine Jwellery</a> </li>
                                <li><a href="">For the Trend Setter</a> </li>
                                <li><a href="">Gifts Card</a> </li>
                                <li><a href="">Gifts with a Purpose</a> </li>
                                <li><a href="">Intimates</a> </li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">All Gifts</a></li>
                                <li><a href="#">Gifts for Her</a></li>
                                <li><a href="#">Gifts for Him</a></li>
                                <li><a href="#">Gifts for Kids</a></li>
                                <li><a href="#">Gifts for Pets</a></li>
                                <li><a href="#">Gifts for the Home</a></li>
                                <li><a href="#">Gifts Cards</a></li>
                                <li><a href="#">Shop All...</a></li>
                                <li><a style="font-size: 18px;  color: black; " href="#">Just for Kids</a></li>
                                <li><a href="#">Active Gear</a></li>
                                <li><a href="#">Kids fan Gear</a></li>
                                <li><a href="#">Toys & Games</a></li>
                                <li><a href="#">Gift Cards</a></li>
                                <li><a href="#">Shop All..</a></li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">Gifts by price</a></li>
                                <li><a href="#">Under $10</a></li>
                                <li><a href="#">Under $25</a></li>
                                <li><a href="#">Under $50</a></li>
                                <li><a href="#">Under $100</a></li>
                                <li><a href="#">Over $100</a></li>
                                <li><a href="#">Gifts Card</a></li>
                                <li><a href="#">Shop All...</a></li>
                                <li><a style="font-size: 18px;  color: black; " href="#">Favourite Brands</a></li>
                                <li><a href="#">Brahmin</a></li>
                                <li><a href="#">Estee Lauder</a></li>
                                <li><a href="#">Free Peoples</a></li>
                                <li><a href="#">Michal Chorls</a></li>
                                <li><a href="#">Ralph Lauren</a></li>
                                <li><a href="#">Shop All..</a></li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">Gifts by Recepient</a></li>
                                <li><a href="#">Under $10</a></li>
                                <li><a href="#">Under $25</a></li>
                                <li><a href="#">Under $50</a></li>
                                <li><a href="#">Under $100</a></li>
                                <li><a href="#">Over $100</a></li>
                                <li><a href="#">Gifts Card</a></li>
                                <li><a href="#">Shop All...</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a id="all-submenu" href="#">Handbags</a>
                        <div class="submenu-1">
                            <ul style="background-color: rgb(238, 236, 236); margin-left: 20px;">
                                <li><a style="font-size: 18px;  color: black; " href="">Gifts</a> </li>
                                <li><a href="">Beauty Gifts</a> </li>
                                <li><a href="">Causy Shop</a> </li>
                                <li><a href="">Designer Handbags</a> </li>
                                <li><a href="">Eco Friendly</a> </li>
                                <li><a href="">Fine Jwellery</a> </li>
                                <li><a href="">For the Trend Setter</a> </li>
                                <li><a href="">Gifts Card</a> </li>
                                <li><a href="">Gifts with a Purpose</a> </li>
                                <li><a href="">Intimates</a> </li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">All Gifts</a></li>
                                <li><a href="#">Gifts for Her</a></li>
                                <li><a href="#">Gifts for Him</a></li>
                                <li><a href="#">Gifts for Kids</a></li>
                                <li><a href="#">Gifts for Pets</a></li>
                                <li><a href="#">Gifts for the Home</a></li>
                                <li><a href="#">Gifts Cards</a></li>
                                <li><a href="#">Shop All...</a></li>
                                <li><a style="font-size: 18px;  color: black; " href="#">Just for Kids</a></li>
                                <li><a href="#">Active Gear</a></li>
                                <li><a href="#">Kids fan Gear</a></li>
                                <li><a href="#">Toys & Games</a></li>
                                <li><a href="#">Gift Cards</a></li>
                                <li><a href="#">Shop All..</a></li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">Gifts by price</a></li>
                                <li><a href="#">Under $10</a></li>
                                <li><a href="#">Under $25</a></li>
                                <li><a href="#">Under $50</a></li>
                                <li><a href="#">Under $100</a></li>
                                <li><a href="#">Over $100</a></li>
                                <li><a href="#">Gifts Card</a></li>
                                <li><a href="#">Shop All...</a></li>
                                <li><a style="font-size: 18px;  color: black; " href="#">Favourite Brands</a></li>
                                <li><a href="#">Brahmin</a></li>
                                <li><a href="#">Estee Lauder</a></li>
                                <li><a href="#">Free Peoples</a></li>
                                <li><a href="#">Michal Chorls</a></li>
                                <li><a href="#">Ralph Lauren</a></li>
                                <li><a href="#">Shop All..</a></li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">Gifts by Recepient</a></li>
                                <li><a href="#">Under $10</a></li>
                                <li><a href="#">Under $25</a></li>
                                <li><a href="#">Under $50</a></li>
                                <li><a href="#">Under $100</a></li>
                                <li><a href="#">Over $100</a></li>
                                <li><a href="#">Gifts Card</a></li>
                                <li><a href="#">Shop All...</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a id="all-submenu" href="#">Jwelary</a>
                        <div class="submenu-1">
                            <ul style="background-color: rgb(238, 236, 236); margin-left: 20px;">
                                <li><a style="font-size: 18px;  color: black; " href="">Gifts</a> </li>
                                <li><a href="">Beauty Gifts</a> </li>
                                <li><a href="">Causy Shop</a> </li>
                                <li><a href="">Designer Handbags</a> </li>
                                <li><a href="">Eco Friendly</a> </li>
                                <li><a href="">Fine Jwellery</a> </li>
                                <li><a href="">For the Trend Setter</a> </li>
                                <li><a href="">Gifts Card</a> </li>
                                <li><a href="">Gifts with a Purpose</a> </li>
                                <li><a href="">Intimates</a> </li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">All Gifts</a></li>
                                <li><a href="#">Gifts for Her</a></li>
                                <li><a href="#">Gifts for Him</a></li>
                                <li><a href="#">Gifts for Kids</a></li>
                                <li><a href="#">Gifts for Pets</a></li>
                                <li><a href="#">Gifts for the Home</a></li>
                                <li><a href="#">Gifts Cards</a></li>
                                <li><a href="#">Shop All...</a></li>
                                <li><a style="font-size: 18px;  color: black; " href="#">Just for Kids</a></li>
                                <li><a href="#">Active Gear</a></li>
                                <li><a href="#">Kids fan Gear</a></li>
                                <li><a href="#">Toys & Games</a></li>
                                <li><a href="#">Gift Cards</a></li>
                                <li><a href="#">Shop All..</a></li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">Gifts by price</a></li>
                                <li><a href="#">Under $10</a></li>
                                <li><a href="#">Under $25</a></li>
                                <li><a href="#">Under $50</a></li>
                                <li><a href="#">Under $100</a></li>
                                <li><a href="#">Over $100</a></li>
                                <li><a href="#">Gifts Card</a></li>
                                <li><a href="#">Shop All...</a></li>
                                <li><a style="font-size: 18px;  color: black; " href="#">Favourite Brands</a></li>
                                <li><a href="#">Brahmin</a></li>
                                <li><a href="#">Estee Lauder</a></li>
                                <li><a href="#">Free Peoples</a></li>
                                <li><a href="#">Michal Chorls</a></li>
                                <li><a href="#">Ralph Lauren</a></li>
                                <li><a href="#">Shop All..</a></li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">Gifts by Recepient</a></li>
                                <li><a href="#">Under $10</a></li>
                                <li><a href="#">Under $25</a></li>
                                <li><a href="#">Under $50</a></li>
                                <li><a href="#">Under $100</a></li>
                                <li><a href="#">Over $100</a></li>
                                <li><a href="#">Gifts Card</a></li>
                                <li><a href="#">Shop All...</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a id="all-submenu" href="#">Beauty</a>
                        <div class="submenu-1">
                            <ul style="background-color: rgb(238, 236, 236); margin-left: 20px;">
                                <li><a style="font-size: 18px;  color: black; " href="">Gifts</a> </li>
                                <li><a href="">Beauty Gifts</a> </li>
                                <li><a href="">Causy Shop</a> </li>
                                <li><a href="">Designer Handbags</a> </li>
                                <li><a href="">Eco Friendly</a> </li>
                                <li><a href="">Fine Jwellery</a> </li>
                                <li><a href="">For the Trend Setter</a> </li>
                                <li><a href="">Gifts Card</a> </li>
                                <li><a href="">Gifts with a Purpose</a> </li>
                                <li><a href="">Intimates</a> </li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">All Gifts</a></li>
                                <li><a href="#">Gifts for Her</a></li>
                                <li><a href="#">Gifts for Him</a></li>
                                <li><a href="#">Gifts for Kids</a></li>
                                <li><a href="#">Gifts for Pets</a></li>
                                <li><a href="#">Gifts for the Home</a></li>
                                <li><a href="#">Gifts Cards</a></li>
                                <li><a href="#">Shop All...</a></li>
                                <li><a style="font-size: 18px;  color: black; " href="#">Just for Kids</a></li>
                                <li><a href="#">Active Gear</a></li>
                                <li><a href="#">Kids fan Gear</a></li>
                                <li><a href="#">Toys & Games</a></li>
                                <li><a href="#">Gift Cards</a></li>
                                <li><a href="#">Shop All..</a></li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">Gifts by price</a></li>
                                <li><a href="#">Under $10</a></li>
                                <li><a href="#">Under $25</a></li>
                                <li><a href="#">Under $50</a></li>
                                <li><a href="#">Under $100</a></li>
                                <li><a href="#">Over $100</a></li>
                                <li><a href="#">Gifts Card</a></li>
                                <li><a href="#">Shop All...</a></li>
                                <li><a style="font-size: 18px;  color: black; " href="#">Favourite Brands</a></li>
                                <li><a href="#">Brahmin</a></li>
                                <li><a href="#">Estee Lauder</a></li>
                                <li><a href="#">Free Peoples</a></li>
                                <li><a href="#">Michal Chorls</a></li>
                                <li><a href="#">Ralph Lauren</a></li>
                                <li><a href="#">Shop All..</a></li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">Gifts by Recepient</a></li>
                                <li><a href="#">Under $10</a></li>
                                <li><a href="#">Under $25</a></li>
                                <li><a href="#">Under $50</a></li>
                                <li><a href="#">Under $100</a></li>
                                <li><a href="#">Over $100</a></li>
                                <li><a href="#">Gifts Card</a></li>
                                <li><a href="#">Shop All...</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a id="all-submenu" href="#">Home</a>
                        <div class="submenu-1">
                            <ul style="background-color: rgb(238, 236, 236); margin-left: 20px;">
                                <li><a style="font-size: 18px;  color: black; " href="">Gifts</a> </li>
                                <li><a href="">Beauty Gifts</a> </li>
                                <li><a href="">Causy Shop</a> </li>
                                <li><a href="">Designer Handbags</a> </li>
                                <li><a href="">Eco Friendly</a> </li>
                                <li><a href="">Fine Jwellery</a> </li>
                                <li><a href="">For the Trend Setter</a> </li>
                                <li><a href="">Gifts Card</a> </li>
                                <li><a href="">Gifts with a Purpose</a> </li>
                                <li><a href="">Intimates</a> </li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">All Gifts</a></li>
                                <li><a href="#">Gifts for Her</a></li>
                                <li><a href="#">Gifts for Him</a></li>
                                <li><a href="#">Gifts for Kids</a></li>
                                <li><a href="#">Gifts for Pets</a></li>
                                <li><a href="#">Gifts for the Home</a></li>
                                <li><a href="#">Gifts Cards</a></li>
                                <li><a href="#">Shop All...</a></li>
                                <li><a style="font-size: 18px;  color: black; " href="#">Just for Kids</a></li>
                                <li><a href="#">Active Gear</a></li>
                                <li><a href="#">Kids fan Gear</a></li>
                                <li><a href="#">Toys & Games</a></li>
                                <li><a href="#">Gift Cards</a></li>
                                <li><a href="#">Shop All..</a></li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">Gifts by price</a></li>
                                <li><a href="#">Under $10</a></li>
                                <li><a href="#">Under $25</a></li>
                                <li><a href="#">Under $50</a></li>
                                <li><a href="#">Under $100</a></li>
                                <li><a href="#">Over $100</a></li>
                                <li><a href="#">Gifts Card</a></li>
                                <li><a href="#">Shop All...</a></li>
                                <li><a style="font-size: 18px;  color: black; " href="#">Favourite Brands</a></li>
                                <li><a href="#">Brahmin</a></li>
                                <li><a href="#">Estee Lauder</a></li>
                                <li><a href="#">Free Peoples</a></li>
                                <li><a href="#">Michal Chorls</a></li>
                                <li><a href="#">Ralph Lauren</a></li>
                                <li><a href="#">Shop All..</a></li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">Gifts by Recepient</a></li>
                                <li><a href="#">Under $10</a></li>
                                <li><a href="#">Under $25</a></li>
                                <li><a href="#">Under $50</a></li>
                                <li><a href="#">Under $100</a></li>
                                <li><a href="#">Over $100</a></li>
                                <li><a href="#">Gifts Card</a></li>
                                <li><a href="#">Shop All...</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a id="all-submenu" href="#">Bed & Bath</a>
                        <div class="submenu-1">
                            <ul style="background-color: rgb(238, 236, 236); margin-left: 20px;">
                                <li><a style="font-size: 18px;  color: black; " href="">Gifts</a> </li>
                                <li><a href="">Beauty Gifts</a> </li>
                                <li><a href="">Causy Shop</a> </li>
                                <li><a href="">Designer Handbags</a> </li>
                                <li><a href="">Eco Friendly</a> </li>
                                <li><a href="">Fine Jwellery</a> </li>
                                <li><a href="">For the Trend Setter</a> </li>
                                <li><a href="">Gifts Card</a> </li>
                                <li><a href="">Gifts with a Purpose</a> </li>
                                <li><a href="">Intimates</a> </li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">All Gifts</a></li>
                                <li><a href="#">Gifts for Her</a></li>
                                <li><a href="#">Gifts for Him</a></li>
                                <li><a href="#">Gifts for Kids</a></li>
                                <li><a href="#">Gifts for Pets</a></li>
                                <li><a href="#">Gifts for the Home</a></li>
                                <li><a href="#">Gifts Cards</a></li>
                                <li><a href="#">Shop All...</a></li>
                                <li><a style="font-size: 18px;  color: black; " href="#">Just for Kids</a></li>
                                <li><a href="#">Active Gear</a></li>
                                <li><a href="#">Kids fan Gear</a></li>
                                <li><a href="#">Toys & Games</a></li>
                                <li><a href="#">Gift Cards</a></li>
                                <li><a href="#">Shop All..</a></li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">Gifts by price</a></li>
                                <li><a href="#">Under $10</a></li>
                                <li><a href="#">Under $25</a></li>
                                <li><a href="#">Under $50</a></li>
                                <li><a href="#">Under $100</a></li>
                                <li><a href="#">Over $100</a></li>
                                <li><a href="#">Gifts Card</a></li>
                                <li><a href="#">Shop All...</a></li>
                                <li><a style="font-size: 18px;  color: black; " href="#">Favourite Brands</a></li>
                                <li><a href="#">Brahmin</a></li>
                                <li><a href="#">Estee Lauder</a></li>
                                <li><a href="#">Free Peoples</a></li>
                                <li><a href="#">Michal Chorls</a></li>
                                <li><a href="#">Ralph Lauren</a></li>
                                <li><a href="#">Shop All..</a></li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">Gifts by Recepient</a></li>
                                <li><a href="#">Under $10</a></li>
                                <li><a href="#">Under $25</a></li>
                                <li><a href="#">Under $50</a></li>
                                <li><a href="#">Under $100</a></li>
                                <li><a href="#">Over $100</a></li>
                                <li><a href="#">Gifts Card</a></li>
                                <li><a href="#">Shop All...</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a id="all-submenu" href="#">Conn's x Belk</a>
                        <div class="submenu-1">
                            <ul style="background-color: rgb(238, 236, 236); margin-left: 20px;">
                                <li><a style="font-size: 18px;  color: black; " href="">Gifts</a> </li>
                                <li><a href="">Beauty Gifts</a> </li>
                                <li><a href="">Causy Shop</a> </li>
                                <li><a href="">Designer Handbags</a> </li>
                                <li><a href="">Eco Friendly</a> </li>
                                <li><a href="">Fine Jwellery</a> </li>
                                <li><a href="">For the Trend Setter</a> </li>
                                <li><a href="">Gifts Card</a> </li>
                                <li><a href="">Gifts with a Purpose</a> </li>
                                <li><a href="">Intimates</a> </li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">All Gifts</a></li>
                                <li><a href="#">Gifts for Her</a></li>
                                <li><a href="#">Gifts for Him</a></li>
                                <li><a href="#">Gifts for Kids</a></li>
                                <li><a href="#">Gifts for Pets</a></li>
                                <li><a href="#">Gifts for the Home</a></li>
                                <li><a href="#">Gifts Cards</a></li>
                                <li><a href="#">Shop All...</a></li>
                                <li><a style="font-size: 18px;  color: black; " href="#">Just for Kids</a></li>
                                <li><a href="#">Active Gear</a></li>
                                <li><a href="#">Kids fan Gear</a></li>
                                <li><a href="#">Toys & Games</a></li>
                                <li><a href="#">Gift Cards</a></li>
                                <li><a href="#">Shop All..</a></li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">Gifts by price</a></li>
                                <li><a href="#">Under $10</a></li>
                                <li><a href="#">Under $25</a></li>
                                <li><a href="#">Under $50</a></li>
                                <li><a href="#">Under $100</a></li>
                                <li><a href="#">Over $100</a></li>
                                <li><a href="#">Gifts Card</a></li>
                                <li><a href="#">Shop All...</a></li>
                                <li><a style="font-size: 18px;  color: black; " href="#">Favourite Brands</a></li>
                                <li><a href="#">Brahmin</a></li>
                                <li><a href="#">Estee Lauder</a></li>
                                <li><a href="#">Free Peoples</a></li>
                                <li><a href="#">Michal Chorls</a></li>
                                <li><a href="#">Ralph Lauren</a></li>
                                <li><a href="#">Shop All..</a></li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">Gifts by Recepient</a></li>
                                <li><a href="#">Under $10</a></li>
                                <li><a href="#">Under $25</a></li>
                                <li><a href="#">Under $50</a></li>
                                <li><a href="#">Under $100</a></li>
                                <li><a href="#">Over $100</a></li>
                                <li><a href="#">Gifts Card</a></li>
                                <li><a href="#">Shop All...</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a id="all-submenu" href="#">Brands</a>
                        <div class="submenu-1">
                            <ul style="background-color: rgb(238, 236, 236); margin-left: 20px;">
                                <li><a style="font-size: 18px;  color: black; " href="">Gifts</a> </li>
                                <li><a href="">Beauty Gifts</a> </li>
                                <li><a href="">Causy Shop</a> </li>
                                <li><a href="">Designer Handbags</a> </li>
                                <li><a href="">Eco Friendly</a> </li>
                                <li><a href="">Fine Jwellery</a> </li>
                                <li><a href="">For the Trend Setter</a> </li>
                                <li><a href="">Gifts Card</a> </li>
                                <li><a href="">Gifts with a Purpose</a> </li>
                                <li><a href="">Intimates</a> </li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">All Gifts</a></li>
                                <li><a href="#">Gifts for Her</a></li>
                                <li><a href="#">Gifts for Him</a></li>
                                <li><a href="#">Gifts for Kids</a></li>
                                <li><a href="#">Gifts for Pets</a></li>
                                <li><a href="#">Gifts for the Home</a></li>
                                <li><a href="#">Gifts Cards</a></li>
                                <li><a href="#">Shop All...</a></li>
                                <li><a style="font-size: 18px;  color: black; " href="#">Just for Kids</a></li>
                                <li><a href="#">Active Gear</a></li>
                                <li><a href="#">Kids fan Gear</a></li>
                                <li><a href="#">Toys & Games</a></li>
                                <li><a href="#">Gift Cards</a></li>
                                <li><a href="#">Shop All..</a></li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">Gifts by price</a></li>
                                <li><a href="#">Under $10</a></li>
                                <li><a href="#">Under $25</a></li>
                                <li><a href="#">Under $50</a></li>
                                <li><a href="#">Under $100</a></li>
                                <li><a href="#">Over $100</a></li>
                                <li><a href="#">Gifts Card</a></li>
                                <li><a href="#">Shop All...</a></li>
                                <li><a style="font-size: 18px;  color: black; " href="#">Favourite Brands</a></li>
                                <li><a href="#">Brahmin</a></li>
                                <li><a href="#">Estee Lauder</a></li>
                                <li><a href="#">Free Peoples</a></li>
                                <li><a href="#">Michal Chorls</a></li>
                                <li><a href="#">Ralph Lauren</a></li>
                                <li><a href="#">Shop All..</a></li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">Gifts by Recepient</a></li>
                                <li><a href="#">Under $10</a></li>
                                <li><a href="#">Under $25</a></li>
                                <li><a href="#">Under $50</a></li>
                                <li><a href="#">Under $100</a></li>
                                <li><a href="#">Over $100</a></li>
                                <li><a href="#">Gifts Card</a></li>
                                <li><a href="#">Shop All...</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a id="all-submenu" href="#">Clearance</a>
                        <div class="submenu-1">
                            <ul style="background-color: rgb(238, 236, 236); margin-left: 20px;">
                                <li><a style="font-size: 18px;  color: black; " href="">Gifts</a> </li>
                                <li><a href="">Beauty Gifts</a> </li>
                                <li><a href="">Causy Shop</a> </li>
                                <li><a href="">Designer Handbags</a> </li>
                                <li><a href="">Eco Friendly</a> </li>
                                <li><a href="">Fine Jwellery</a> </li>
                                <li><a href="">For the Trend Setter</a> </li>
                                <li><a href="">Gifts Card</a> </li>
                                <li><a href="">Gifts with a Purpose</a> </li>
                                <li><a href="">Intimates</a> </li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">All Gifts</a></li>
                                <li><a href="#">Gifts for Her</a></li>
                                <li><a href="#">Gifts for Him</a></li>
                                <li><a href="#">Gifts for Kids</a></li>
                                <li><a href="#">Gifts for Pets</a></li>
                                <li><a href="#">Gifts for the Home</a></li>
                                <li><a href="#">Gifts Cards</a></li>
                                <li><a href="#">Shop All...</a></li>
                                <li><a style="font-size: 18px;  color: black; " href="#">Just for Kids</a></li>
                                <li><a href="#">Active Gear</a></li>
                                <li><a href="#">Kids fan Gear</a></li>
                                <li><a href="#">Toys & Games</a></li>
                                <li><a href="#">Gift Cards</a></li>
                                <li><a href="#">Shop All..</a></li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">Gifts by price</a></li>
                                <li><a href="#">Under $10</a></li>
                                <li><a href="#">Under $25</a></li>
                                <li><a href="#">Under $50</a></li>
                                <li><a href="#">Under $100</a></li>
                                <li><a href="#">Over $100</a></li>
                                <li><a href="#">Gifts Card</a></li>
                                <li><a href="#">Shop All...</a></li>
                                <li><a style="font-size: 18px;  color: black; " href="#">Favourite Brands</a></li>
                                <li><a href="#">Brahmin</a></li>
                                <li><a href="#">Estee Lauder</a></li>
                                <li><a href="#">Free Peoples</a></li>
                                <li><a href="#">Michal Chorls</a></li>
                                <li><a href="#">Ralph Lauren</a></li>
                                <li><a href="#">Shop All..</a></li>
                            </ul>
                            <ul>
                                <li><a style="font-size: 18px;  color: black; " href="#">Gifts by Recepient</a></li>
                                <li><a href="#">Under $10</a></li>
                                <li><a href="#">Under $25</a></li>
                                <li><a href="#">Under $50</a></li>
                                <li><a href="#">Under $100</a></li>
                                <li><a href="#">Over $100</a></li>
                                <li><a href="#">Gifts Card</a></li>
                                <li><a href="#">Shop All...</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <a id="Store" href=""><i class="fa-solid fa-shop"></i>Find A Store</a>
            </div>

        </div>
    
 `
}
export {
    navbar
};