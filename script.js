const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

[menuBtn, closeMenuBtn].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    menu.classList.toggle("menu-active"); //o toggle quer dizer que, se a classe existir, ele remove, se ela não existir, ela coloca. Ou seja, ele alterna.
  });
});

// Open modal
const modal = document.querySelector("#modalMail");
const openModalBtn = document.querySelector(".btn-sendMail");
const closeModalBtn = document.querySelector(".closeModal");

openModalBtn.addEventListener("click", () => modal.showModal());
closeModalBtn.addEventListener("click", () => modal.close());

//clean email information

function cleanField() {
  document.querySelector("#email").value = "";
}

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
const apiUrl = "https://foxcoding.net/api/getProductsList";

// Função para atualizar os dados do produto
function updateProductData() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const products = data?.data?.products || [];
      const productElements = document.querySelectorAll(".products");

      productElements.forEach((productElement, index) => {
        const product = products[index];
        if (product) {
          const productImageElement = productElement.querySelector(".product");
          const productTitleElement =
            productElement.querySelector(".product-title");
          const productDescriptionElement = productElement.querySelector(
            ".product-description"
          );
          const productPriceElement =
            productElement.querySelector(".product-price");

          productImageElement.src = product.image || "";
          productTitleElement.textContent = product.name || "";
          productDescriptionElement.textContent = product.description || "";
          productPriceElement.textContent = `R$ ${product.price || ""}`;
        }
      });
    })
    .catch((error) => {
      console.log("Falha ao fazer a solicitação à API:", error);
    });
}

// Chamar a função para atualizar os dados do produto
updateProductData();
