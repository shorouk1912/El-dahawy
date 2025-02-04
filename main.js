document.addEventListener("DOMContentLoaded", function () {
    let serviceSlides = document.querySelectorAll(".services-slider .slide");
    let currentServiceIndex = 1;
    function showServiceSlide(index) {
    serviceSlides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
        slide.classList.add("active");
    }
    });
}
document.getElementById("next-service").addEventListener("click", function () {
    currentServiceIndex = (currentServiceIndex + 1) % serviceSlides.length;
    showServiceSlide(currentServiceIndex);
    });
document.getElementById("prev-service").addEventListener("click", function () {
    currentServiceIndex =
    (currentServiceIndex - 1 + serviceSlides.length) % serviceSlides.length;
    showServiceSlide(currentServiceIndex);
    });
  // Auto slide every 4 seconds
    setInterval(function () {
    currentServiceIndex = (currentServiceIndex + 1) % serviceSlides.length;
    showServiceSlide(currentServiceIndex);
    }, 4000);
});
//testimonial
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let currentIndex = 1;
    function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
        slide.classList.add("active");
    }
    });
    }
    document.getElementById("next").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    });
    document.getElementById("prev").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
    });
  // Auto slide every 4 seconds
    setInterval(function () {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    }, 4000);
});
window.onscroll = function () {
  let button = document.getElementById("backToTop");
  if (document.documentElement.scrollTop > 200) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
