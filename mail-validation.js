const openModalBtn = document.querySelector(".btn-sendMail");
const closeModalBtn = document.querySelector(".closeModal");
const emailInput = document.getElementById("email");
const errorSpan = document.getElementById("error-email");
const modal = document.querySelector("#modalMail");

openModalBtn.addEventListener("click", () => validateEmail());
closeModalBtn.addEventListener("click", () => modal.close());

function validateEmail() {
  var email = emailInput.value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    errorSpan.innerText = "E-mail inválido.";
    emailInput.focus();
  } else {
    // E-mail válido, continue com o envio do formulário ou outra ação desejada.

    cleanField();
    modal.showModal();
  }
}

function cleanField() {
  emailInput.value = "";
}
