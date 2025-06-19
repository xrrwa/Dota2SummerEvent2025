document.addEventListener('DOMContentLoaded', function(){
    const slides = document.querySelector('.slides');
    const items = document.querySelectorAll('.slider-image');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    
    let slideIndex = 0;
    const totalItems = items.length;
    let itemWidth = items[0].clientWidth;

    
    
    updateSlider();
    
    nextBtn.addEventListener('click', function() {
        slideIndex = (slideIndex + 1) % totalItems;
        updateSlider();
    });
    
    prevBtn.addEventListener('click', function() {
        slideIndex = (slideIndex - 1 + totalItems) % totalItems;
        updateSlider();
    });
    
    function updateSlider() {
        itemWidth = items[0].clientWidth;
        slides.style.transform = `translateX(-${slideIndex * itemWidth}px)`;
    }

    window.addEventListener('resize', function() {
        itemWidth = items[0].clientWidth;
        slideIndex = 0;
        updateSlider();
    });
});