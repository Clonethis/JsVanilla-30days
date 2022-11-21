//calculates at most 'wait' times per second
// will run fc 'checkSlid' only 'wait' <- largen num means less calls
function debounce(func, wait = 16, immediate = true) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
const sliderImages = document.querySelectorAll(".images");
console.log(sliderImages);
function checkSlide(e) {
  sliderImages.forEach((slideImage) => {
    console.log(slideImage);
    console.log("run");
    // halfway through the image -> scroll from top
    const slideInAt =
      window.scrollY + window.innerHeight - slideImage.offsetHeight / 2;
    console.log(slideInAt);
    // offsetTop -> how far is image from top of window
    const imageBottom = slideImage.offsetTop + slideImage.offsetHeight;

    const isHalfShown = slideInAt > slideImage.offsetTop;
    // checks if we are past image and should reverse the image where it was -> hidden outside of page boundaries
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      //   console.log(run);
      slideImage.classList.add("active");
    } else {
      slideImage.classList.remove("active");
    }
  });
  //   console.count(e);
}
window.addEventListener("scroll", debounce(checkSlide));
