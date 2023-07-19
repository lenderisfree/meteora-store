const bags = document.querySelectorAll(".bag");
const closeCart = document.querySelector("#close-cart");
const cart = document.querySelector(".cart");

bags.forEach((bag) => {
  bag.addEventListener("click", function () {
    cart.style.display = "block";
  });
});

closeCart.addEventListener("click", function () {
  cart.style.display = "none";
});
