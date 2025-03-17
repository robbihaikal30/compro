// script.js
const products = [
    {
        name: "Biji Kopi Mentah (Green Beans)",
        description: "Biji kopi mentah yang belum dipanggang. Biji kopi ini adalah produk yang dihasilkan dari buah kopi yang telah dipetik, tetapi belum melalui proses pemanggangan.",
        image: "green beans.jpg"
    },
    {
        name: "Biji Kopi Matang (Roasted Beans)",
        description: "Biji kopi yang telah dipanggang (di-roast) adalah biji kopi mentah (green beans) yang telah melalui proses pemanggangan untuk mengeluarkan rasa, aroma, dan warna khas kopi.",
        image: "roasted.jpg"
    }
    // Bisa ditambahkan produk lainnya sesuai kebutuhan
];

// Fungsi untuk menampilkan daftar produk kopi
function displayProducts() {
    const productList = document.getElementById("product-list");

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            </div>
        `;

        productList.appendChild(productCard);
    });
}

// Memanggil fungsi untuk menampilkan produk saat halaman dimuat
window.onload = displayProducts;
