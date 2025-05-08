document.addEventListener("DOMContentLoaded", function () {
  const products = getProducts();

  const savedFilterCriteria = localStorage.getItem("filterCriteria");
  if (savedFilterCriteria) {
    const {
      name,
      category,
      selectedBrands,
      selectedColors,
      minPrice,
      maxPrice,
    } = JSON.parse(savedFilterCriteria);

    let filteredProducts = filterProduct(
      products,
      name,
      category,
      selectedBrands,
      selectedColors,
      minPrice,
      maxPrice
    );

    // Apply filter criteria to related elements in HTML
    if (category) {
      const categoryInput = document.querySelector(
        `input[name=filter_category][value=${category}]`
      );
      if (categoryInput) categoryInput.checked = true;
    }

    if (selectedBrands && selectedBrands.length > 0) {
      selectedBrands.forEach((brand) => {
        const brandInput = document.querySelector(
          `input[name=filter_brand][value="${brand}"]`
        );
        if (brandInput) brandInput.checked = true;
      });
    }

    if (selectedColors && selectedColors.length > 0) {
      selectedColors.forEach((color) => {
        const colorInput = document.querySelector(
          `input[name=filter_color][value="${color}"]`
        );
        if (colorInput) colorInput.checked = true;
      });
    }

    if (minPrice !== null) {
      const minPriceInput = document.querySelector(
        "input[name=filter_min_price]"
      );
      if (minPriceInput) minPriceInput.value = minPrice;
    }

    if (maxPrice !== null) {
      const maxPriceInput = document.querySelector(
        "input[name=filter_max_price]"
      );
      if (maxPriceInput) maxPriceInput.value = maxPrice;
    }

    updateBreadCrumb(category);

    refrestProductCatalog(filteredProducts);
  } else {
    refrestProductCatalog(products);
  }

  const filterButtons = document.querySelectorAll("button[name=apply_filter]");
  filterButtons.forEach((filterButton) => {
    filterButton.addEventListener("click", function () {
      console.log("masuk");
      const name = document.querySelector("input[name=search_filter]").value;

      const category = document.querySelector(
        "input[name=filter_category]:checked"
      ).value;

      const brandCheckboxes = document.querySelectorAll(
        "input[name=filter_brand]:checked"
      );
      const colorCheckboxes = document.querySelectorAll(
        "input[name=filter_color]:checked"
      );

      const selectedBrands = Array.from(brandCheckboxes).map(
        (checkbox) => checkbox.value
      );
      const selectedColors = Array.from(colorCheckboxes).map(
        (checkbox) => checkbox.value
      );

      const minPriceInput = document.querySelector(
        "input[name=filter_min_price]"
      );

      const maxPriceInput = document.querySelector(
        "input[name=filter_max_price]"
      );

      const minPrice = minPriceInput.value
        ? parseFloat(minPriceInput.value)
        : null;

      const maxPrice = maxPriceInput.value
        ? parseFloat(maxPriceInput.value)
        : null;

      // Save filter criteria to localStorage
      localStorage.setItem(
        "filterCriteria",
        JSON.stringify({ name, category, selectedBrands, minPrice, maxPrice })
      );

      let filteredProducts = filterProduct(
        products,
        name,
        category,
        selectedBrands,
        selectedColors,
        minPrice,
        maxPrice
      );

      updateBreadCrumb(category);

      refrestProductCatalog(filteredProducts);
    });
  });

  const clearFilterButton = document.querySelector("button[name=clear_filter]");
  clearFilterButton.addEventListener("click", function () {
    clearFilterCriteria(products);
  });
});

function filterProduct(
  products,
  name,
  category,
  selectedBrands = [],
  selectedColors = [],
  minPrice,
  maxPrice
) {
  const filteredProducts = products.filter((product) => {
    const categoryMatch = category === "all" || product.category === category;
    const brandMatch =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const colorMatch =
      selectedColors.length === 0 || selectedColors.includes(product.color);
    const priceMatch =
      (minPrice === null || product.price >= minPrice) &&
      (maxPrice === null || product.price <= maxPrice);
    const nameMatch =
      !name || product.name.toLowerCase().includes(name.toLowerCase());

    return categoryMatch && brandMatch && colorMatch && priceMatch && nameMatch;
  });
  return filteredProducts;
}

function refrestProductCatalog(products) {
  let productCatalogWrapper = document.querySelector(
    "main .product-catalog #product-card"
  );

  let display = "";
  products.forEach((product) => {
    display += `<div class="col-md-4 mb-3">
                    <div class="card">
                    <input
                        type="hidden"
                        name="product_data"
                        value='${JSON.stringify(product)}'
                    />
                    <img
                        src="${product.image_url}"
                        class="card-img-top mx-auto"
                        alt="${product.name}"
                    />
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">
                        ${product.description}
                        </p>
                        <div
                        class="price-cart-wrapper d-flex align-items-center justify-content-between"
                        >
                        <div class="price-wrapper">
                            <small class="text-muted">Price:</small>
                            <p class="m-0"><strong>${rupiahFormater(
                              product.price
                            )}</strong></p>
                        </div>
                        <div class="button-wrapper">
                            <button
                            value='${JSON.stringify(product)}'
                            class="btn bt-icon btn-primary add-to-cart"
                            onclick="addToCart(event)"
                            >
                            <i class="bx bx-cart-alt"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>`;
  });

  productCatalogWrapper.innerHTML = display;

  let cardWrapper = document.querySelectorAll(".product-catalog .card");

  cardWrapper.forEach((card) => {
    let valueElement = card.querySelector(".button-wrapper button");
    initializeProductCatalog(valueElement);
  });
}

function clearFilterCriteria(products) {
  const filterCollapse = document.querySelector("#filterCollapse");
  const inputs = filterCollapse.querySelectorAll("input");

  inputs.forEach((input) => {
    if (input.type === "checkbox" || input.type === "radio") {
      input.checked = false;
    } else if (input.type === "text" || input.type === "number") {
      input.value = "";
    }
  });

  const categoryWrapper = document.querySelector(
    ".category-wrapper input:nth-child(1)"
  );
  if (categoryWrapper && categoryWrapper.type === "radio") {
    categoryWrapper.checked = true;
  }

  refrestProductCatalog(products);
  localStorage.removeItem("filterCriteria");
  breadcrumbItem.textContent = "All";
}

function updateBreadCrumb(category) {
  const breadcrumbItem = document.querySelector(
    ".product-catalog .breadcrumb li:last-child"
  );

  breadcrumbItem.textContent = category && category !== "" ? category : "All";
}
