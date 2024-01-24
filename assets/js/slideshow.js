// Function to control slides for a specific slideshow
function plusSlides(n, slideshowId) {
  showSlides(slideIndex[slideshowId] += n, slideshowId);
}

// Function to display slides for a specific slideshow
function showSlides(n, slideshowId) {
  var i;
  var slides = document.querySelectorAll(`#${slideshowId} .mySlides`);
  if (n > slides.length) { slideIndex[slideshowId] = 1; }
  if (n < 1) { slideIndex[slideshowId] = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex[slideshowId] - 1].style.display = "block";
}

// Initialize slide index for each slideshow
var slideIndex = {
  'slideshow1': 1,
  'slideshow2': 1,
  'slideshow3':1,
  // Add more slide indexes for additional slideshows
};

// Show the initial slides for each slideshow
showSlides(slideIndex['slideshow1'], 'slideshow1');
showSlides(slideIndex['slideshow2'], 'slideshow2');
showSlides(slideIndex['slideshow3'], 'slideshow3');


