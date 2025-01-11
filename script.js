const post = document.querySelector(".post");
const newBox = document.querySelector(".new_box");
const backButton = document.querySelector(".back_button");
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
    const container = document.querySelector(".content");

    
    if (
        imgProduct.value.trim() !== "" &&
        headingProduct.value.trim() !== "" &&
        textProduct.value.trim() !== "" &&
        priceProduct.value.trim() !== ""
    ) {
        const addProduct = document.createElement("div");
        addProduct.classList.add("product");

        addProduct.innerHTML = `
            <img src="${imgProduct.value}" alt="${headingProduct.value}" class="product-image new_product_image"/>
            <h3 class="product-title new_product_title">${headingProduct.value}</h3>
            <p class="product-description new_product_text">${textProduct.value}</p>
            <div class="product-rating"><span>⭐⭐⭐⭐☆</span></div>
            <span class="product-price new_product_price">$${priceProduct.value}</span>
            <button class="add-to-cart">Add to Cart</button>
        `;

        container.appendChild(addProduct);

        imgProduct.value = "";
        headingProduct.value = "";
        textProduct.value = "";
        priceProduct.value = "";
    } else {
        alert("Fill all the values 'idiot'");
    }
});

const kart = document.querySelector(".kart")
const buy =document.querySelector(".buy")