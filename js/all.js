document.addEventListener("DOMContentLoaded", function () {
  const cart = getCart();
  countCart(cart);
});

function initializeProductCatalog(element) {
  let productValue = {};
  try {
    productValue = element.value;
  } catch (error) {
    console.error("Invalid JSON in hidden input value:", productValue);
  }
  const cart = getCart();
  const productData = JSON.parse(productValue);
  const existingProduct = cart.find((item) => item.id === productData.id);

  setCartButtonWrapperDisplay(
    element.closest(".button-wrapper"),
    existingProduct ?? productData
  );
}

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function countCart(cart) {
  const cartCountElement = document.querySelector(".cart-count");
  if (cartCountElement) {
    cartCountElement.textContent = cart.reduce(
      (total, item) => total + item.count,
      0
    );
  }
}

function setCart(cart) {
  cart = cart.filter((item) => item.count > 0);
  localStorage.setItem("cart", JSON.stringify(cart));
  const cartUpdatedEvent = new Event("cartUpdated");
  window.dispatchEvent(cartUpdatedEvent);
}

function addToCart(event) {
  const cart = getCart();

  if (!event.target.value) return;

  const productData = JSON.parse(event.target.value);
  if (!productData) return;

  const existingProduct = cart.find((item) => item.id === productData.id);

  if (existingProduct) {
    if (existingProduct.count < productData.stock) {
      existingProduct.count++;
    } else {
      Swal.fire({
        title: "Not Enough Stock",
        text: "There's not enough stock!!!",
        icon: "warning",
        confirmButtonColor: "#100c08",
      });
      return;
    }
  } else {
    productData.count = 1;
    cart.push(productData);
  }

  setCart(cart);
  countCart(cart);

  let buttonWrapper = event.target.closest(".button-wrapper");
  setCartButtonWrapperDisplay(buttonWrapper, existingProduct ?? productData);
}

function removeFromCart(event) {
  const cart = getCart();
  if (!event.target.value) return;

  const productData = JSON.parse(event.target.value);
  if (!productData) return;

  const existingProduct = cart.find((item) => item.id === productData.id);
  let buttonWrapper = event.target.closest(".button-wrapper");

  if (!existingProduct) return;

  existingProduct.count <= 0 ? 0 : existingProduct.count--;
  setCartButtonWrapperDisplay(buttonWrapper, existingProduct);
  setCart(cart);
  countCart(cart);
}

function setCartButtonWrapperDisplay(element, product) {
  if (product?.count == undefined || product?.count <= 0) {
    element.innerHTML = `
            <button class="btn bt-icon btn-primary add-to-cart" onclick="addToCart(event)" value='${JSON.stringify(
              product
            )}'>
                <i class="bx bx-cart-alt"></i>
            </button>
          `;
  } else {
    element.innerHTML = `
            <button class="remove-from-cart btn btn-icon btn-secondary" onclick="removeFromCart(event)" value='${JSON.stringify(
              product
            )}'>-</button>
            <span class="product-count mx-2">${product.count}</span>
            <button class="add-to-cart btn btn-icon btn-secondary" onclick="addToCart(event)" value='${JSON.stringify(
              product
            )}'>+</button>
          `;
  }
}

function rupiahFormater(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
}

function getProducts() {
  return [
    {
      id: 1,
      name: "Canon 700D",
      description:
        "A versatile DSLR camera perfect for beginners and enthusiasts.",
      category: "camera",
      brand: "canon",
      color: "black",
      price: 7500000,
      stock: 10,
      image_url:
        "https://tse2.mm.bing.net/th?id=OIP.gUhiZTFcmRhS4zzspjKI0gHaGM&pid=Api&P=0&h=180",
    },
    {
      id: 2,
      name: "Canon 5D",
      description:
        "A professional-grade DSLR camera for advanced photographers.",
      category: "camera",
      brand: "canon",
      color: "black",
      price: 25000000,
      stock: 3,
      image_url:
        "https://tse2.mm.bing.net/th?id=OIP.gUhiZTFcmRhS4zzspjKI0gHaGM&pid=Api&P=0&h=180",
    },
    {
      id: 3,
      name: "Nikon D3500",
      description:
        "A compact and easy-to-use DSLR camera for everyday photography.",
      category: "camera",
      brand: "nikon",
      color: "black",
      price: 8500000,
      stock: 8,
      image_url:
        "https://tse2.mm.bing.net/th?id=OIP.gUhiZTFcmRhS4zzspjKI0gHaGM&pid=Api&P=0&h=180",
    },
    {
      id: 4,
      name: "Sony Alpha A7 III",
      description: "A full-frame mirrorless camera designed for professionals.",
      category: "camera",
      brand: "sony",
      color: "mixcolor",
      price: 32000000,
      stock: 5,
      image_url:
        "https://tse2.mm.bing.net/th?id=OIP.gUhiZTFcmRhS4zzspjKI0gHaGM&pid=Api&P=0&h=180",
    },
    {
      id: 5,
      name: "Fujifilm X-T4",
      description:
        "A high-performance mirrorless camera with advanced features.",
      category: "camera",
      brand: "fujifilm",
      color: "white",
      price: 20000000,
      stock: 7,
      image_url:
        "https://tse2.mm.bing.net/th?id=OIP.gUhiZTFcmRhS4zzspjKI0gHaGM&pid=Api&P=0&h=180",
    },
    {
      id: 6,
      name: "Canon EF 50mm f/1.8",
      description: "A lightweight and affordable lens for stunning portraits.",
      category: "lens",
      brand: "canon",
      color: "black",
      price: 1500000,
      stock: 15,
      image_url:
        "https://tse2.mm.bing.net/th?id=OIP.gUhiZTFcmRhS4zzspjKI0gHaGM&pid=Api&P=0&h=180",
    },
    {
      id: 7,
      name: "Nikon AF-S DX 35mm f/1.8G",
      description:
        "A prime lens with excellent sharpness and low-light performance.",
      category: "lens",
      brand: "nikon",
      color: "black",
      price: 2500000,
      stock: 12,
      image_url:
        "https://tse2.mm.bing.net/th?id=OIP.gUhiZTFcmRhS4zzspjKI0gHaGM&pid=Api&P=0&h=180",
    },
    {
      id: 8,
      name: "Godox SL60W",
      description:
        "A powerful and affordable LED light for studio photography.",
      category: "lighting",
      brand: "godox",
      color: "white",
      price: 1200000,
      stock: 20,
      image_url:
        "https://tse2.mm.bing.net/th?id=OIP.gUhiZTFcmRhS4zzspjKI0gHaGM&pid=Api&P=0&h=180",
    },
    {
      id: 9,
      name: "Manfrotto Compact Action Tripod",
      description: "A lightweight and portable tripod for travel photography.",
      category: "tripod",
      brand: "manfrotto",
      color: "mixcolor",
      price: 800000,
      stock: 10,
      image_url:
        "https://tse2.mm.bing.net/th?id=OIP.gUhiZTFcmRhS4zzspjKI0gHaGM&pid=Api&P=0&h=180",
    },
    {
      id: 10,
      name: "Sony GP-VPT2BT",
      description: "A wireless shooting grip and tripod for vlogging.",
      category: "tripod",
      brand: "sony",
      color: "black",
      price: 1500000,
      stock: 6,
      image_url:
        "https://tse2.mm.bing.net/th?id=OIP.gUhiZTFcmRhS4zzspjKI0gHaGM&pid=Api&P=0&h=180",
    },
    {
      id: 11,
      name: "Neewer 660 LED Video Light",
      description: "A versatile LED light for video and photography.",
      category: "lighting",
      brand: "neewer",
      color: "black",
      price: 1800000,
      stock: 15,
      image_url:
        "https://tse2.mm.bing.net/th?id=OIP.gUhiZTFcmRhS4zzspjKI0gHaGM&pid=Api&P=0&h=180",
    },
    {
      id: 12,
      name: "Aputure Amaran AL-M9",
      description: "A compact and portable LED light for on-the-go shooting.",
      category: "lighting",
      brand: "aputure",
      color: "white",
      price: 900000,
      stock: 25,
      image_url:
        "https://tse2.mm.bing.net/th?id=OIP.gUhiZTFcmRhS4zzspjKI0gHaGM&pid=Api&P=0&h=180",
    },
    {
      id: 13,
      name: "Joby GorillaPod 3K Kit",
      description: "A flexible tripod for creative photography angles.",
      category: "tripod",
      brand: "joby",
      color: "black",
      price: 1200000,
      stock: 8,
      image_url:
        "https://tse2.mm.bing.net/th?id=OIP.gUhiZTFcmRhS4zzspjKI0gHaGM&pid=Api&P=0&h=180",
    },
    {
      id: 14,
      name: "Benro TMA28A Mach3",
      description: "A durable and stable tripod for professional use.",
      category: "tripod",
      brand: "benro",
      color: "black",
      price: 2500000,
      stock: 5,
      image_url:
        "https://tse2.mm.bing.net/th?id=OIP.gUhiZTFcmRhS4zzspjKI0gHaGM&pid=Api&P=0&h=180",
    },
  ];
}

function resetCart() {
  localStorage.removeItem("cart");
  const cartUpdatedEvent = new Event("cartUpdated");
  window.dispatchEvent(cartUpdatedEvent);
  countCart([]);
}

function resetForm(form) {
  if (!(form instanceof HTMLFormElement)) {
    console.error("Provided element is not a form.");
    return;
  }
  if (form) {
    form.reset();
  }
}

function generateInsertQueries(data) {
  const tableName = "products";
  const insertQuery = `INSERT INTO ${tableName} (id, name, description, category, brand, color, price, stock, image_url) VALUES 
    (1, 'Canon 700D', 'A versatile DSLR camera perfect for beginners and enthusiasts.', 'camera', 'canon', 'black', 7500000, 10, 'https://tse2.mm.bing.net/th?id=OIP.gUhiZTFcmRhS4zzspjKI0gHaGM&pid=Api&P=0&h=180'),
    (2, 'Canon 5D', 'A professional-grade DSLR camera for advanced photographers.', 'camera', 'canon', 'black', 25000000, 3, 'https://tse2.mm.bing.net/th?id=OIP.gUhiZTFcmRhS4zzspjKI0gHaGM&pid=Api&P=0&h=180'),
    (3, 'Nikon D3500', 'A compact and easy-to-use DSLR camera for everyday photography.', 'camera', 'nikon', 'black', 8500000, 8, 'https://tse2.mm.bing.net/th?id=OIP.gUhiZTFcmRhS4zzspjKI0gHaGM&pid=Api&P=0&h=180'),
    (4, 'Sony Alpha A7 III', 'A full-frame mirrorless camera designed for professionals.', 'camera', 'sony', 'mixcolor', 32000000, 5, 'https://tse2.mm.bing.net/th?id=OIP.gUhiZTFcmRhS4zzspjKI0gHaGM&pid=Api&P=0&h=180'),
    (5, 'Fujifilm X-T4', 'A high-performance mirrorless camera with advanced features.', 'camera', 'fujifilm', 'white', 20000000, 7, 'https://tse2.mm.bing.net/th?id=OIP.gUhiZTFcmRhS4zzspjKI0gHaGM&pid=Api&P=0&h=180'),
    (6, 'Canon EF 50mm f/1.8', 'A lightweight and affordable lens for stunning portraits.', 'lens', 'canon', 'black', 1500000, 15, 'https://tse2.mm.bing.net/th?id=OIP.gUhiZTFcmRhS4zzspjKI0gHaGM&pid=Api&P=0&h=180'),
    (7, 'Nikon AF-S DX 35mm f/1.8G', 'A prime lens with excellent sharpness and low-light performance.', 'lens', 'nikon', 'black', 2500000, 12, 'https://tse2.mm.bing.net/th?id=OIP.gUhiZTFcmRhS4zzspjKI0gHaGM&pid=Api&P=0&h=180'),
    (8, 'Godox SL60W', 'A powerful and affordable LED light for studio photography.', 'lighting', 'godox', 'white', 1200000, 20, 'https://tse2.mm.bing.net/th?id=OIP.gUhiZTFcmRhS4zzspjKI0gHaGM&pid=Api&P=0&h=180'),
    (9, 'Manfrotto Compact Action Tripod', 'A lightweight and portable tripod for travel photography.', 'tripod', 'manfrotto', 'mixcolor', 800000, 10, 'https://tse2.mm.bing.net/th?id=OIP.gUhiZTFcmRhS4zzspjKI0gHaGM&pid=Api&P=0&h=180'),
    (10, 'Sony GP-VPT2BT', 'A wireless shooting grip and tripod for vlogging.', 'tripod', 'sony', 'black', 1500000, 6, 'https://tse2.mm.bing.net/th?id=OIP.gUhiZTFcmRhS4zzspjKI0gHaGM&pid=Api&P=0&h=180'),
    (11, 'Neewer 660 LED Video Light', 'A versatile LED light for video and photography.', 'lighting', 'neewer', 'black', 1800000, 15, 'https://tse2.mm.bing.net/th?id=OIP.gUhiZTFcmRhS4zzspjKI0gHaGM&pid=Api&P=0&h=180'),
    (12, 'Aputure Amaran AL-M9', 'A compact and portable LED light for on-the-go shooting.', 'lighting', 'aputure', 'white', 900000, 25, 'https://tse2.mm.bing.net/th?id=OIP.gUhiZTFcmRhS4zzspjKI0gHaGM&pid=Api&P=0&h=180'),
    (13, 'Joby GorillaPod 3K Kit', 'A flexible tripod for creative photography angles.', 'tripod', 'joby', 'black', 1200000, 8, 'https://tse2.mm.bing.net/th?id=OIP.gUhiZTFcmRhS4zzspjKI0gHaGM&pid=Api&P=0&h=180'),
    (14, 'Benro TMA28A Mach3', 'A durable and stable tripod for professional use.', 'tripod', 'benro', 'black', 2500000, 5, 'https://tse2.mm.bing.net/th?id=OIP.gUhiZTFcmRhS4zzspjKI0gHaGM&pid=Api&P=0&h=180');`;
  console.log(insertQuery);
}
