const CAR_PRODUCTS = "cartProductsId";

document.addEventListener("DOMContentLoaded", () => {
  loadProducts();
});

function getProductDb() {
  const url = "../dbProducts.json";

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
}

async function loadProducts() {
  console.log("Funcion ejecutada OK");
  const products = await getProductDb();
  console.log(products);
}
