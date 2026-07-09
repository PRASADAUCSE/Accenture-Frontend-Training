const menuBtn = document.getElementById("menu-btn");

const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");

});

const testimonials = [
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "- Mr. John Roller"
    },
    {
        text: "Bubble Consult helped us increase our business efficiency dramatically. Their team was outstanding.",
        author: "- Sarah Johnson"
    },
    {
        text: "Excellent customer support and a beautiful design. Highly recommended for any startup.",
        author: "- Michael Brown"
    }

];

let current = 0;

const text = document.getElementById("testimonialText");
const author = document.getElementById("testimonialAuthor");

function updateTestimonial() {
    text.textContent = testimonials[current].text;
    author.textContent = testimonials[current].author;
}

document.getElementById("nextBtn").onclick = () => {
    current++;
    if (current === testimonials.length) {
        current = 0;
    }
    updateTestimonial();
};

document.getElementById("prevBtn").onclick = () => {
    current--;
    if (current < 0) {
        current = testimonials.length - 1;
    }
    updateTestimonial();
};

updateTestimonial();
setInterval(() => {
    current++;
    if (current === testimonials.length) {
        current = 0;
    }
    updateTestimonial();
}, 4000);