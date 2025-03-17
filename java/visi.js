// script.js
const products = [
    {
        name: "VISI",
        description: "Menjadikan perusahaan kopi terkemuka di Indonesia yang menyajikan kopi berkualitas dari berbagai seluruh Indonesia",
        image: "gudang 1.jpeg"
    },
    {
        name: "Misi",
        description: "Menghasilkan kopi berkualitas tinggi dengan menggunakan biji kopi segar dan proses pengolahan yang baik. Membangun hubungan yang kuat dengan petani kopi lokal untuk mendukung pertanian berkelanjutan. Meningkatkan kesadaran akan pentingnya kopi berkualitas dan mendukung budaya kopi di Indonesia. Mengembangkan produk kopi yang inovatif dan beragam untuk memenuhi kebutuhan pelanggan.",
        image: "misi.JPG"
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
