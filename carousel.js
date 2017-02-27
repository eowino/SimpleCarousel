const prevBtn = document.getElementById('carouselPrev');
const nextBtn = document.getElementById('carouselNext');
const carousel = document.getElementById('carousel');

prevBtn.addEventListener('click', function() {
	carousel.style.marginLeft = "0%";
});

nextBtn.addEventListener('click', function() {
	carousel.style.marginLeft = "-100%";
});