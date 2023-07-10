document.getElementById("btn-search").addEventListener("click", filterProducts);

// Adiciona o evento de entrada à caixa de entrada
document
  .getElementById("input-product")
  .addEventListener("input", filterProducts);

function filterProducts() {
  // Obtém o valor digitado na caixa de entrada
  let searchValue = document
    .getElementById("input-product")
    .value.toLowerCase();

  // Obtém todos os elementos de produtos
  let products = document.getElementsByClassName("products");

  // Percorre todos os elementos de produtos
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    let title = product.getElementsByClassName("product-title")[0];
    let description = product.getElementsByClassName("product-description")[0];

    // Obtém o texto do título e descrição do produto em minúsculas
    let productText = (title.textContent || title.innerText).toLowerCase();
    let descriptionText = (
      description.textContent || description.innerText
    ).toLowerCase();

    // Verifica se o texto pesquisado está presente no título ou na descrição
    if (
      searchValue === "" ||
      productText.includes(searchValue) ||
      descriptionText.includes(searchValue)
    ) {
      // Mostra o produto se corresponder à pesquisa ou se a pesquisa estiver vazia
      product.style.display = "block";
    } else {
      // Oculta o produto se não corresponder à pesquisa
      product.style.display = "none";
    }
  }
}
