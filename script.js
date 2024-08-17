let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100; // Calculate offset for slide
    slides.style.transform = `translateX(${offset}%)`;
}

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

// Auto-slide every 3 seconds
setInterval(() => {
    showSlide(currentIndex + 1);
}, 3000);

// Initialize the first slide
showSlide(currentIndex);
