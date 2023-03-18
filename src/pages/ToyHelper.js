console.log("JavaScript file loaded");

// Cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-button");

//Open Cart
if (cartIcon) {
    cartIcon.onclick = () => {
        cart.classList.add("active");
    };
}

//Close Cart
if (closeCart) {
    cartIcon.onclick = () => {
        cart.classList.add("active");
    };
}

//Cart Working JS
if (document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', ready)
}else{
  ready();
}

// Making Function
function ready(){
  //Remove Items from Cart
  var reomveCartButtons = document.getElementsByClassName('cart-trash')
  console.log(reomveCartButtons)
  for (var i = 0; i < reomveCartButtons.length; i++){
    var button = reomveCartButtons[i]
    button.addEventListener("click", removeCartItem)
  }
  //Quantity Changes
  var quantityInputs = document.getElementsByClassName('cart-quantity')
  for (var i = 0; i < quantityInputs.length; i++){
    var input = quantityInputs[i]
    input.addEventListener("change", quantityChanged)
  }
  //Add To Cart
  var addCart = document.getElementsByClassName('add-button')
  for (var i = 0; i < addCart.length; i++){
    var button = addCart[i]
    button.addEventListener('click', addCartClicked);
  }
}

// Quantity Changes
function quantityChanged(event){
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1;
  }
  updatetotal();
}

// Reomve Items from cart
function removeCartItem(event){
  var buttonClicked = event.target
  buttonClicked.parentElement.remove()
  updatetotal();
}

//Add To Cart
function addCartClicked(event){
  var button = event.target
  var toyProducts = button.parentElement
  var title = toyProducts.getElementsByClassName('cart-item-title')[0].innerText
  var productImg = toyProducts.getElementsByClassName("cart-item-image")[0].sec;
  //var price = toyProducts.getElementsByClassName("price")[0].innerText
  console.log(title, ProductImg);
  updatetotal();
}
function addProductToCart(title, price, productImg){
  var CartShopBox = document.createElement("div");
  // cartShopBox.classList.add('cart-box')
  var cartItems = document.getElementsByClassName('cart-item')
  var cartItemsNames = carItems.getElementsByClassName('cart-item-title')
}

//Update Total
function updatetotal(){
  var cartContent = document.getElementsByClassName('cart-item-info')[0]
  var cartBoxes = cartContent.getElementByClassName('item-quantity-changer')
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++){
    var cartBox = cartBoxes[i]
    var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
    //var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value
    // This is unfinished, needs price elements(around 38:00-39:00 in vid)
    //total = total + price * quantity;

    //If price Contains some Cents Value
    total = Math.round(total * 100)/100;

    //document.getElementsByClassName("total-price")[0].innerText = "$" + total;
    //Note total-price is a placeholder
  }
}