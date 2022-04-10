let sIndex = 1;
slides(sIndex);

// Next/previous controls
function plusSlides1(n) {
  slides(sIndex += n);
}

// Thumbnail image controls
function cSlide(n) {
  slides(sIndex = n);
}

function slides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides9");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption9");
  if (n > slides.length) {sIndex = 1}
  if (n < 1) {sIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active1", "");
  }
  slides[sIndex-1].style.display = "block";
  dots[sIndex-1].className += " active1";
  captionText.innerHTML = dots[sIndex-1].alt;
}