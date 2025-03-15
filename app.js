const carouselInner = document.querySelector('.block-element');
const slides = document.querySelectorAll('.block-card');
const totalSlides = slides.length;
let index = 0;

function moveCarousel() {
    index++;
    if (index >= totalSlides) {
        index = 0;  // Reset to first slide
    }
    let offset = -index * 300; // Assuming each slide is 300px wide
    carouselInner.style.transform = `translateX(${offset}px)`;
}

// Change slide every 3 seconds
setInterval(moveCarousel, 3000);