//cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

cartIcon.onclick = () => {
    cart.classList.add("active");
};

closeCart.onclick = () => {
    cart.classList.remove("active");
};


//cart working
if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}else{
    ready();
}
//Marking Function
function ready(){
   //Reomve Items From Cart 
   var reomveCartButtons = document.getElementsByClassName("cart-remove");
   console.log( reomveCartButtons);
   for (var i=0; i < reomveCartButtons.lenght; i++) {
    var button = reomveCartButtons[i];
    button.addEventListener("click", removeCartItem);
   }
}
//Reomve Items From Cart 
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
}
function updatetotal() {
    var cartContent = doucument.getElementsByClassName('cart-content')[0];
    var cartBoxes = doucument.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.lenght; i++){
        var cartBoxes = cartBoxes[i];
        


    }
}