const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

[menuBtn, closeMenuBtn].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    menu.classList.toggle("menu-active"); //o toggle quer dizer que, se a classe existir, ele remove, se ela não existir, ela coloca. Ou seja, ele alterna.
  });
});

// Open modal
const modal = document.querySelector("dialog");
const openModalBtn = document.querySelector(".btn-sendMail");
const closeModalBtn = document.querySelector(".closeModal");

openModalBtn.addEventListener("click", () => modal.showModal());
closeModalBtn.addEventListener("click", () => modal.close());

//clean email information

function cleanField() {
  document.querySelector("#email").value = "";
}

// Modal cards

const btnMore = document.querySelectorAll(".btn-more");
const modalOverlay = document.querySelector(".modal-overlay");
const modalImage = document.querySelector(".modal-image");
const modalTitle = document.querySelector(".modal-title");
const modalDescription = document.querySelector(".modal-description");
const modalPrice = document.querySelector(".modal-price");
const modalClose = document.querySelector(".modal-close");

btnMore.forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.closest(".products");
    const productImage = product.querySelector(".product");
    const productTitle = product.querySelector(".product-title").textContent;
    const productDescription = product.querySelector(
      ".product-description"
    ).textContent;
    const productPrice = product.querySelector(".product-price").textContent;

    modalImage.src = productImage.src;
    modalTitle.textContent = productTitle;
    modalDescription.textContent = productDescription;
    modalPrice.textContent = productPrice;
  });
});
