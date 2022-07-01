//hero-swiper
let heroSwiper = new Swiper('.hero-swiper', {
  loop: true,
  effect: 'fade',
  speed: 1000,
  autoplay: {
    delay: 16000
  }
})

// gallery-swiper
let gallerySwiper = new Swiper('.gallery-swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 35,
  pagination: {
    el: '.gallery-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: ".gallery-nav-next",
    prevEl: ".gallery-nav-prev",
    disabledClass: "swiper-nav-btn-f_disabled"
  },
  breakpoints: {
    768: {
      spaceBetween: 35,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1325: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
  a11y: false,
  keyboard: true,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: 'slide-visible',

  on: {
    init: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    },
    slideChange: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    }
  }
});

// events-swiper
let eventsSlider = new Swiper(".events-swiper", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  pagination: {
    el: '.events-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: ".events-nav-next",
    prevEl: ".events-nav-prev",
    disabledClass: "events-nav-btn-disabled"
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 25,
    },
    1325: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  },
});

// partners-swiper
let partnersSwiper = new Swiper ('.partners-swiper', {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  navigation: {
    nextEl: ".partners-nav-next",
    prevEl: ".partners-nav-prev",
    disabledClass: "swiper-nav-btn-s_disabled"
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    1325: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  },
  a11y: false,
  keyboard: true,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: 'slide-visible',

  on: {
    init: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    },
    slideChange: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    }
  }
})
