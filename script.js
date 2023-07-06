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

// Função para atualizar os dados do produto

const apiUrl = "https://fakestoreapi.com/products";
function atualizarProdutos() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      const produtos = data;

      const elementosProduto = document.querySelectorAll(".product");

      elementosProduto.forEach((elemento, index) => {
        elemento.src = produtos[index].image;

        const elementoPai = elemento.parentNode;

        const tituloElemento = elementoPai.querySelector(".product-title");
        tituloElemento.textContent = produtos[index].title;

        const precoElemento = elementoPai.querySelector(".product-price");
        precoElemento.textContent = "Preço: $" + produtos[index].price;
      });
    })
    .catch((error) => {
      console.error("Ocorreu um erro:", error);
    });
}

atualizarProdutos();
