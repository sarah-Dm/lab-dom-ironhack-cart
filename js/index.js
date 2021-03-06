// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = Number(product.querySelector(".price span").innerHTML);
  const quantity = Number(product.querySelector(".quantity input").value); // balise html.value
  const subtotal = product.querySelector(".subtotal span"); //pas innerHTML car on pointe la span, on ne va pas chercher le texte
  let result = price * quantity;
  subtotal.innerHTML = result; //pointe l'interieur où ajouter le texte
  return result;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName("product");
  // [ product1, product2 ]
  let sumTotal = 0;

  for (let i = 0; i < products.length; i++) {
    // = 0 + 25 * 2
    // sumTotal = 50
    // = 50 + 45 * 1
    // sumTotal = 95

    sumTotal = sumTotal + updateSubtotal(products[i]);
  }

  // ITERATION 3
  document.querySelector("#total-value span").innerHTML = sumTotal;
  return sumTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget; //bouton sur lequel on a cliqué
  console.log("The target in remove is:", target);
  //... your code goes here
  target.parentNode.removeChild();
}

window.addEventListener("click", removeProduct);

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
