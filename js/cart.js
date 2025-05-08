document.addEventListener("DOMContentLoaded", function () {
  let productCatalogWrapper = document.querySelector(
    ".list-product table tbody"
  );
  loadCart(getCart(), productCatalogWrapper);
  window.addEventListener("cartUpdated", function (event) {
    loadCart(getCart(), productCatalogWrapper);
  });

  let payButton = document.querySelector("button#pay");
  payButton.addEventListener("click", function () {
    resetCart();

    let modal = document.querySelector("#staticBackdrop");
    let modalInstance = bootstrap.Modal.getInstance(modal);
    modalInstance.hide();

    Swal.fire({
      title: "Payment Success",
      text: "Your payment has been processed successfully.",
      icon: "success",
      confirmButtonColor: "#100c08",
    });

    setTimeout(() => {
      window.location.href = "/milestone";
    }, 1000);
  });
});

function payNow() {
  const cart = getCart();
  loadCart(cart, document.querySelector(".list-product table tbody"));
  if (cart.length === 0) {
    Swal.fire({
      title: "Empty Cart",
      text: "Your cart is empty.",
      icon: "warning",
      confirmButtonColor: "#100c08",
    });
    return;
  }

  let modal = document.querySelector("#staticBackdrop");
  let modalInstance = new bootstrap.Modal(modal);
  modalInstance.show();
}

function loadCart(products, productCatalogWrapper) {
  let display = "";
  products.forEach((product) => {
    display += `<tr>
                      <td>
                        <img
                          src="${product.image_url}"
                          alt=""
                          width="130"
                        />
                      </td>
                      <td>${product.name}</td>
                      <td>${rupiahFormater(product.price)}</td>
                      <td>
                        <div class="button-wrapper">
                          <input type="hidden" name="product-value" value='${JSON.stringify(
                            product
                          )}'>
                        </div>
                      </td>
                      <td>${rupiahFormater(product.price * product.count)}</td>
                    </tr>`;
  });

  productCatalogWrapper.innerHTML = display;
  productCatalogWrapper
    .querySelectorAll("tr td:nth-child(4)")
    .forEach((element) => {
      let valueElement = element.querySelector(
        ".button-wrapper input[type='hidden']"
      );
      initializeProductCatalog(valueElement);
    });

  let totalQuantity = products.reduce((sum, product) => sum + product.count, 0);
  let totalPrice = products.reduce(
    (sum, product) => sum + product.count * product.price,
    0
  );
  let tax = (totalPrice * 10) / 100;

  let cartTableListProduct = productCatalogWrapper.closest("table");

  cartTableListProduct.querySelector("tfoot").innerHTML = `
                                    <tr>
                                        <th colspan="3" class="text-center">
                                            <span class="total">Subtotal</span>
                                        </th>
                                        <th><span class="qty">${totalQuantity}</span></th>
                                        <th><span class="total">${rupiahFormater(
                                          totalPrice
                                        )}</span></th>
                                    </tr>`;

  let checkoutProduct = document.querySelector(".checkout-product");

  checkoutProduct.innerHTML = `<div class="card">
            <div class="card-header">
              <h3>Checkout</h3>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <p>Subtotal</p>
                <b class="subtotal">${rupiahFormater(totalPrice)}</b>
              </div>
              <div class="d-flex justify-content-between text-muted">
                <p>Tax 10%</p>
                <b class="tax">${rupiahFormater(tax)}</b>
              </div>
              <hr />
              <div class="d-flex justify-content-between">
                <p>Total</p>
                <b class="total">${rupiahFormater(totalPrice + tax)}</b>
              </div>
              <button type="button" class="btn btn-dark w-100" onclick="payNow()">Pay Now</button>
            </div>
          </div>`;
}
