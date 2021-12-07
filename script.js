function changeBackground() {
    let element = document.body;
    element.classList.toggle("dark-mode");
  }

  
// Slideshow
const slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

const slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

let index = 0, time = 4000;
	slides[index].classList.add('active');

	setInterval( () => {
		slides[index].classList.remove('active');
		
		index++;
		if (index === slides.length) index = 0;

		slides[index].classList.add('active');

	}, time);
}