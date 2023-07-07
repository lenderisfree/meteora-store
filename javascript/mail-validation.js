function cleanField() {
  var emailInput = document.getElementById("email");
  var email = emailInput.value.trim();

  // Expressão regular para validar o formato do e-mail
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  var errorContainer = document.getElementById("errorContainer");

  if (email === "") {
    errorContainer.innerHTML = "Digite um e-mail.";
  } else if (!emailRegex.test(email)) {
    errorContainer.innerHTML = "Digite um e-mail válido.";
  } else {
    errorContainer.innerHTML = "";
    emailInput.value = "";
    openModal();
  }
}

function openModal() {
  var modal = document.getElementById("modalMail");
  modal.showModal();
}

const closeModalBtn = document.querySelector(".closeModal");
const modal = document.querySelector("#modalMail");
closeModalBtn.addEventListener("click", () => modal.close());

// Adicionar manipulação para limpar a mensagem de erro no evento input
var emailInput = document.getElementById("email");
emailInput.addEventListener("input", clearErrorMessage);

function clearErrorMessage() {
  var errorContainer = document.getElementById("errorContainer");
  errorContainer.innerHTML = "";
}
