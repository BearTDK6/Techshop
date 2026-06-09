const products = [
    {
        image: "image/airpod-removebg-preview.png",
        name: "AirPods",
        price: 450000,
        discountPercent: 20,
        quantity: 12
    },
    {
        image: "image/macbook-removebg-preview.png",
        name: "Mac",
        price: 520000,
        discountPercent: 15,
        quantity: 8
    }
    ,
    {
        image: "image/macbook-removebg-preview.png",
        name: "Mac",
        price: 520000,
        discountPercent: 15,
        quantity: 8
    },
    {
        image: "image/macbook-removebg-preview.png",
        name: "Mac",
        price: 520000,
        discountPercent: 15,
        quantity: 8
    },
    {
        image: "image/macbook-removebg-preview.png",
        name: "Mac",
        price: 520000,
        discountPercent: 15,
        quantity: 8
    },
    {
        image: "image/macbook-removebg-preview.png",
        name: "Mac",
        price: 520000,
        discountPercent: 15,
        quantity: 8
    },
    {
        image: "image/macbook-removebg-preview.png",
        name: "Mac",
        price: 520000,
        discountPercent: 15,
        quantity: 8
    }
];


function formatMoney(value) {
    return value + " VND";
}

function renderProducts(element, data) {
    element.innerHTML = "";

    data.forEach((item) => {
        const finalPrice = Math.round(item.price * (100 - item.discountPercent) / 100);

        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
          <img class="product-image" src="${item.image}" alt="${item.name}">
          <div class="product-body">
            <h2 class="product-name">${item.name}</h2>

            <div class="price-wrap">
              <span class="price-original">${formatMoney(item.price)}</span>
              <span class="price-final">${formatMoney(finalPrice)}</span>
            </div>

            <div class="product-meta">
              <div class="meta-row">
                <span>Discount</span>
                <span class="badge">-${item.discountPercent}%</span>
              </div>
              <div class="meta-row">
                <span>So luong</span>
                <span>${item.quantity}</span>
              </div>
            </div>
          </div>
        `;

        element.appendChild(card);
    });

}

const productList = document.getElementById("productList");
console.log(productList);
if (productList) {
    renderProducts(productList, products);
}

// const categories = [
//     {
//         name: "Điện thoại",
//         image: "image/iphone-removebg-preview.png"
//     },
//     {
//         name: "Laptop",
//         image: "image/macbook-removebg-preview.png"
//     }
// ]
// const categoryList = document.getElementById("categoryList");
// console.log({ categoryList });
// if (categoryList) {
//     renderCategories(categoryList, categories);
// }


// function renderCategories(element, data) {
//     element.innerHTML = "";
//     data.forEach((item) => {

//         const btn = document.createElement("button");
//         btn.className = "category";
//         btn.innerHTML = item.name;
//         btn.onclick = () => renderProducts(productList, laptop);
//         // card.innerHTML = `            <h2 class="product-name">${item.name}</h2>

        

//         element.appendChild(btn);
//     });

// }
