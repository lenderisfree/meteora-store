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
