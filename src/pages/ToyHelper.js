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
  //Buy Button work
  document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyButtonClicked);
}
//Buy Button
function buyButtonClicked(){
  alert('Your Order is placed')
  var cartContent = document.getElementsByClassName('cart-item')[0];
  while (cartContent.hasChildNodes()){
    cartContent.removeChild(cartContent.firstChild);
  }
  updatetotal();
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
  var toyProducts = button.parentElement;
  var title = toyProducts.getElementsByClassName('cart-item-title')[0].innerText;
  var productImg = toyProducts.getElementsByClassName("cart-item-image")[0].sec;
  //var price = toyProducts.getElementsByClassName("price")[0].innerText;
  addProductToCart(title, price, productImg);
  console.log(title, ProductImg);
  updatetotal();
}
function addProductToCart(title, price, productImg){
  var CartShopBox = document.createElement("div");
  // cartShopBox.classList.add('cart-box')
  var cartItems = document.getElementsByClassName('cart-item');
  var cartItemsNames = carItems.getElementsByClassName('cart-item-title');
  for (var i = 0; i < cartItemsNames.length; i++){
    alert("You have already add this item to cart");
    return;
  }
}
var cartBoxContent = `
        <div><img className = "cart-item-image" src = {require('../images/Toy Catolog/Copy of snake.jpg')} alt = 'Modified Snake Toy'/> </div>
        <div>
          <h3 className = "cart-item-title">
            Snake Toy
          </h3>
          <h4 className = "cart-item-info">
            Info About Item
          </h4>
          <div className = "item-quantity-changer"> {/* Contains the trash can and item quantity counter */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="cart-trash" viewBox="0 0 16 16">
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
          </svg>
          <div className = "counter">
        	<div className="minus">-</div>
          <div type = "number" value="1" className = "cart-quantity">1</div>
        	<div className="plus">+</div>
          </div>
          </div>
          </div>`;
          cartShopBox.innerHTML = cartBoxContent;
          cartItems.append(cartShopBox);
          cartShopBox.getElementByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
          cartShopBox.getElementByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);


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