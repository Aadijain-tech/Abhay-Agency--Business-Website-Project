// Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Floating Button Toggle
const menuBtn = document.querySelector(".menu-btn");
const floatingMenu = document.querySelector(".floating-menu");
const menuIcon = menuBtn.querySelector("img");

menuBtn.addEventListener("click", () => {
    floatingMenu.classList.toggle("active");
    menuBtn.classList.toggle("active");

    if (menuBtn.classList.contains("active")) {
        menuIcon.src = "https://api.iconify.design/lucide:x.svg";
    } else {
        menuIcon.src = "https://api.iconify.design/lucide:phone.svg";
    }
});

// Make floating buttons functional
const callBtn = document.querySelector(".call-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

callBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "tel:9425446126";
});

whatsappBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.open("https://wa.me/919425446126", "_blank");
});

// Testimonials Slider
const dots = document.querySelectorAll(".dot");
const testimonials = document.querySelectorAll(".testimonial");
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial) =>
        testimonial.classList.remove("active")
    );
    dots.forEach((dot) => dot.classList.remove("active"));

    testimonials[index].classList.add("active");
    dots[index].classList.add("active");
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentTestimonial = index;
        showTestimonial(currentTestimonial);
    });
});

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Scroll to top button visibility
window.addEventListener("scroll", () => {
    const scrollTopLink = document.querySelector(
        '.footer-links a[href="#home"]'
    );
    if (window.scrollY > 300) {
        scrollTopLink.style.display = "inline";
    } else {
        scrollTopLink.style.display = "none";
    }
});
