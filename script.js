
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", function () {
    const isOpen = navigation.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

const navigationLinks = navigation.querySelectorAll("a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navigation.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Buka menu navigasi");
        menuToggle.textContent = "☰";
    });
});

const greetingButton = document.getElementById("greetingButton");
const greetingMessage = document.getElementById("greetingMessage");

greetingButton.addEventListener("click", function () {
    greetingMessage.textContent =
        "Halo! Makasii banyak uda liat semuaa. Happy Weekend! (Semua hari jadi weekend) 🤎";

    greetingButton.textContent = "Terima Kasih! ✓";
});

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();
