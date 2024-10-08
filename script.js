
let totalPriceElement = document.getElementById("total-price");
let totalPrice = 0;

function updateTotalPrice() {
  totalPriceElement.textContent = totalPrice.toFixed(2);
}


function addCartItemEventListeners(cartItem) {
  let quantitySpan = cartItem.querySelector(".quantity");
  let increaseButton = cartItem.querySelector(".increase");
  let decreaseButton = cartItem.querySelector(".decrease");
  let deleteButton = cartItem.querySelector(".delete-btn");
  let likeButton = cartItem.querySelector(".like-btn");
  let price = parseFloat(cartItem.dataset.price);

 
  let quantity = 0;


  increaseButton.addEventListener("click", () => {
    quantity++;
    quantitySpan.textContent = quantity;
    totalPrice += price;
    updateTotalPrice();
  });

 
  decreaseButton.addEventListener("click", () => {
    if (quantity > 0) {
      quantity--;
      quantitySpan.textContent = quantity;
      totalPrice -= price;
      updateTotalPrice();
    }
  });

  deleteButton.addEventListener("click", () => {
    totalPrice -= quantity * price;
    updateTotalPrice();
    cartItem.remove();
  });

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("active");
  });
}

let cartItems = document.querySelectorAll(".cart-item");
cartItems.forEach(addCartItemEventListeners);
