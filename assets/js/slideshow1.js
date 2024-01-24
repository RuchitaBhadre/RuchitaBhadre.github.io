var slideIndex1 = 1;
  var slideIndex2 = 1;
  var slideIndex3 = 1;

  showSlides(1, 1);
  showSlides(1, 2);
  showSlides(1, 3);

  function plusSlides(n, slideshowIndex) {
    showSlides(slideIndex1 += n, 1);
    showSlides(slideIndex2 += n, 2);
    showSlides(slideIndex3 += n, 3);
  }

  function currentSlide(n, slideshowIndex) {
    showSlides(slideIndex1 = n, 1);
    showSlides(slideIndex2 = n, 2);
    showSlides(slideIndex3 = n, 3);
  }

  function showSlides(n, slideshowIndex) {
    var i;
    var slides = document.querySelectorAll(".slideshow-container:nth-child(" + slideshowIndex + ") .mySlides");
    if (n > slides.length) { n = 1; }
    if (n < 1) { n = slides.length; }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[n - 1].style.display = "block";
  }
