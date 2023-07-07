const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

[menuBtn, closeMenuBtn].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    menu.classList.toggle("menu-active"); //o toggle quer dizer que, se a classe existir, ele remove, se ela não existir, ela coloca. Ou seja, ele alterna.
  });
});

// Modal cards

const modalImage = document.querySelector(".modal-image");
const modalTitle = document.querySelector(".modal-title");
const modalDescription = document.querySelector(".modal-description");
const modalPrice = document.querySelector(".modal-price");
const btnMore = document.querySelectorAll(".btn-seeCardInfo");
const modalOverlay = document.querySelector("#modalCards");
const modalClose = document.querySelector(".closeModalCard");

btnMore.forEach((button) => {
  button.addEventListener("click", () => {
    openModal();
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

modalClose.addEventListener("click", () => {
  closeModal();
});

function openModal() {
  modalOverlay.showModal();
}

function closeModal() {
  modalOverlay.close();
}
