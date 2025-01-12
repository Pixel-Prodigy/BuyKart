const post = document.querySelector(".post");
const newBox = document.querySelector(".new_box");
const backButton = document.querySelector(".back_button");
const content = document.querySelector(".content");
let productCount = 5;

post.addEventListener("click", function () {
  newBox.classList.remove("hide");
});

backButton.addEventListener("click", function () {
  newBox.classList.add("hide");
});

const addNewBox = document.querySelector(".add_new_box");
addNewBox.addEventListener("click", () => {
  const imgProduct = document.querySelector("#img_product");
  const headingProduct = document.querySelector("#heading_product");
  const textProduct = document.querySelector("#text_product");
  const priceProduct = document.querySelector("#new_box_price");

  if (
    imgProduct.value.trim() !== "" &&
    headingProduct.value.trim() !== "" &&
    textProduct.value.trim() !== "" &&
    priceProduct.value.trim() !== ""
  ) {
    productCount++;

    const addProduct = document.createElement("div");
    addProduct.classList.add("product");
    addProduct.innerHTML = `
            <img src="${imgProduct.value}" alt="${headingProduct.value}" class="product-image new_product_image"/>
            <h3 class="product-title new_product_title">${headingProduct.value}</h3>
            <p class="product-description new_product_text">${textProduct.value}</p>
            <div class="product-rating"><span class="rating">No rating</span></div>
            <p class="product-price new_product_price">$${priceProduct.value}</p>
            <button class="add-to-cart ${productCount}">Add to Cart</button>
        `;

    content.appendChild(addProduct);

    imgProduct.value = "";
    headingProduct.value = "";
    textProduct.value = "";
    priceProduct.value = "";
    const addToKartButton = addProduct.querySelector(".add-to-cart");
    addToKartButton.addEventListener("click", function () {
      let productClass = "";
      const classes = this.classList;
      const classList = [...classes];
      for (const i of classList) {
        if (i !== "add_to_cart") {
          productClass = i;
        }
      }

      const addDiv = document.getElementsByClassName(productClass)[0];
      const parentOfButton = addDiv.parentElement;
      const cloneParent = parentOfButton.cloneNode(true);
      kartContent.appendChild(cloneParent);
      const kartHeading = document.querySelector(".kart_heading");
      kartHeading.style.display = "none";
      addToKartButton.classList.add("product_added");
      this.textContent = "Added";
      cloneParent.classList.add("kart_product_style");
    });
  } else {
    alert("Fill all the values 'idiot'");
  }
});
const kart = document.querySelector(".kart");
const buy = document.querySelector(".buy");
const kartContent = document.querySelector(".kart_content");
const payment = document.querySelector(".payment"); // Ensure payment section is selected

kart.addEventListener("click", () => {
  content.classList.add("hide_content");
  kartContent.style.display = "block";
});

let productClass = "";
kart.addEventListener("click", () => {
  content.classList.add("hide_content");
  kartContent.classList.remove("kart_hide");
});

buy.addEventListener("click", () => {
  kartContent.style.display = "none";
  content.classList.remove("hide_content");

  // Ensure payment modal is shown
  payment.classList.remove("hide_payment");
});

// Add product to cart and show cart contents
const addToKartButtons = document.querySelectorAll(".add-to-cart");
addToKartButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const classes = this.classList;
    const classList = [...classes];
    let productClass = "";
    for (const i of classList) {
      if (i !== "add_to_cart") {
        productClass = i;
      }
    }

    const addDiv = document.getElementsByClassName(productClass)[0];
    const parentOfButton = addDiv.parentElement;
    const cloneParent = parentOfButton.cloneNode(true);
    const buyButtonKart = cloneParent.querySelector("button.add-to-cart");
    const removeFromKart = document.createElement("button");
    removeFromKart.classList.add("remove_from_kart");
    removeFromKart.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
            </svg>
        `;
    cloneParent.appendChild(removeFromKart);
    kartContent.appendChild(cloneParent);

    const kartHeading = document.querySelector(".kart_heading");
    kartHeading.style.display = "none";

    this.classList.add("product_added");
    this.textContent = "Added";
    cloneParent.classList.add("kart_product_style");

    const buttonAdv = cloneParent.querySelector("button");
    buttonAdv.textContent = "Buy Now";

    buyButtonKart.addEventListener("click", () => {
      payment.classList.remove("hide_payment");
    });

    const backButton1 = document.querySelector(".back_button1");
         backButton1.addEventListener("click", () => {
        payment.classList.add("hide_payment")
      });
   
      kart.addEventListener("click", () => {
        content.classList.add("hide_content");
        kartContent.style.display = "block";
        payment.classList.add("hide_payment");
      });
    removeFromKart.addEventListener("click", function () {
      cloneParent.remove();

      button.classList.remove("product_added");
      button.textContent = "Add to Cart";

      if (kartContent.children.length === 0) {
        kartHeading.style.display = "block";
      }
    });
  });
});
