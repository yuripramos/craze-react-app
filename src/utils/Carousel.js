export function CarouselAuto() {
  var slides = document.getElementsByClassName("testimonial-item"),
    arrows = document.getElementsByClassName("lnr"),
    carouselCount = 0,
    interval = 4000,
    scrollInterval,
    cancelAutoSlide = false;

  // Converting Collections to array
  slides = [...slides];
  arrows = [...arrows];

  arrows[0].addEventListener("click", function(e) {
    e = e || window.event;
    e.preventDefault();
    carouselCount -= 100;
    slider();
  });
  arrows[1].addEventListener("click", sliderEvent);
  if (!cancelAutoSlide) {
    arrows[1].addEventListener("autoClick", sliderEvent);
  }

  function sliderEvent(e) {
    e = e || window.event;
    e.preventDefault();
    carouselCount += 100;
    slider(e);
  }

  function slider(e) {
    switch (carouselCount) {
      case -100:
        carouselCount = 0;
        break;
      case 300:
        carouselCount = 0;
        break;
      default:
        break;
    }

    for (var i = 0; i < slides.length; i += 1) {
      slides[i].setAttribute(
        "style",
        "transform:translateX(-" + carouselCount + "%)"
      );
    }
    if (e.type === "click") {
      cancelAutoSlide = true;
    }
  }

  // create new Event to dispatch click for auto scroll
  var autoClick = new Event("autoClick");
  function autoScroll() {
    if (!cancelAutoSlide) {
      arrows[1].dispatchEvent(autoClick);
    }
  }

  // set timing of dispatch click events
  if (!cancelAutoSlide) {
    scrollInterval = setInterval(autoScroll, interval);
  }
}

export function getindex(carouselCount) {
  return carouselCount;
}
