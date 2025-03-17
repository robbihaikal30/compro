window.addEventListener("load", function() {
    setTimeout(() => {
        document.getElementById("loading-screen").style.opacity = "0"; // Efek transparan

        setTimeout(() => {
            document.getElementById("loading-screen").style.display = "none"; // Hapus elemen setelah animasi
        }, 1000);
    }, 3000);
});