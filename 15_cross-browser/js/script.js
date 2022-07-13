window.onload = function () {
  // Получаем все элементы с дата-атрибутом data-bg
  let images = document.querySelectorAll('[data-bg]');
  // Проходимся по каждому
  for (let i = 0; i < images.length; i++) {
    // Получаем значение каждого дата-атрибута
    let image = images[i].getAttribute('data-bg');
    // Каждому найденному элементу задаем свойство background-image с изображение формата jpg
    images[i].style.backgroundImage = 'url(' + image + ')';
  }

  // Проверяем, является ли браузер посетителя сайта Firefox и получаем его версию
  let isitFirefox = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
  let firefoxVer = isitFirefox ? parseInt(isitFirefox[1]) : 0;

  // Если есть поддержка Webp или браузер Firefox версии больше или равно 65
  if (canUseWebp() || firefoxVer >= 65) {
    // Делаем все то же самое что и для jpg, но уже для изображений формата Webp
    let imagesWebp = document.querySelectorAll('[data-bg-webp]');
    for (let i = 0; i < imagesWebp.length; i++) {
      let imageWebp = imagesWebp[i].getAttribute('data-bg-webp');
      imagesWebp[i].style.backgroundImage = 'url(' + imageWebp + ')';
    }
  }
};

// swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
})

// tab
document.addEventListener('DOMContentLoaded', function() {
   document.querySelectorAll('.how-tab__btn').forEach(function(howTabBtn) {
    howTabBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      console.log(path)

      document.querySelectorAll('.how-tab__btn').forEach(function(tabBtnActive) {
        tabBtnActive.classList.remove('how-tab__btn--active')
      })
      event.currentTarget.classList.add('how-tab__btn--active');

      document.querySelectorAll('.how-content').forEach(function(howContent) {
        howContent.classList.remove('how-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('how-content-active');
    });
  });
})

// accordion
$( ".accordion" ).accordion({
  active: false,
  collapsible: true,
  icons: false,
  heightStyle: "content"
});

// burger

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.nav').classList.add('burger-active')
  });

  document.querySelector('.menu-close').addEventListener('click', function () {
    document.querySelector('.nav').classList.remove('burger-active')
  });
});
