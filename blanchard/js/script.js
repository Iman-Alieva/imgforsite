// scroll
const body = document.body;
const disableScroll = function () {
  let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
  let pagePosition = window.scrollY;
  fixBlocks.forEach((el) => {
    el.style.paddingRight = paddingOffset;
  });
  body.style.paddingRight = paddingOffset;
  body.classList.add('disable-scroll');
  body.dataset.position = pagePosition;
  body.style.top = -pagePosition + 'px';
};

const enableScroll = function () {
  let pagePosition = parseInt(document.body.dataset.position, 10);
  body.style.top = 'auto';
  body.classList.remove('disable-scroll');
  fixBlocks.forEach((el) => {
    el.style.paddingRight = '0px';
  });
  body.style.paddingRight = '0px';
  window.scroll({top: pagePosition, left: 0});
  body.removeAttribute('data-position');
}

//burger-menu
function setBurger(params) {
  const btn = document.querySelector(`.${params.btnClass}`);
  const btnClose = document.querySelector(`.${params.btnClose}`);
  const menu = document.querySelector(`.${params.menuClass}`);

  btn.setAttribute('aria-expanded', false);

  menu.addEventListener("animationend", function () {
    if (this.classList.contains(params.hiddenClass)) {
      this.classList.remove(params.activeClass);
      this.classList.remove(params.hiddenClass);
    }
  });

  btn.addEventListener("click", function () {
    disableScroll();

    menu.classList.add(params.activeClass);
    document.body.style.overflow = 'hidden';
    btn.setAttribute('aria-expanded', true);
    btnClose.removeAttribute('aria-expanded', false);
  });

  btnClose.addEventListener("click", function () {
    enableScroll();

    menu.classList.add(params.hiddenClass);
    document.body.removeAttribute('style');
    btn.setAttribute('aria-expanded', false);
    btnClose.setAttribute('aria-expanded', false);
  })
}

setBurger({
  btnClass: "burger",
  btnClose: "nav-close-btn",
  menuClass: "nav",
  activeClass: "is-opened",
  hiddenClass: "is-closed"
});

// search-form
const searchMobile = document.querySelector('.search-tablet');
const searchBtn = document.querySelector('.search__btn');
const headerSearchBtn = document.querySelector('.header-search');
const searchCloseBtn = document.querySelector('.search__close');
const searchInput = document.querySelector('.search__input');

searchBtn.addEventListener('click', () => {
  searchBtn.classList.add('active');
  searchInput.classList.add('active');
  searchCloseBtn.classList.add('active');
});

searchCloseBtn.addEventListener('click', () => {
  searchBtn.classList.remove('active');
  searchInput.classList.remove('active');
  searchCloseBtn.classList.remove('active');
})

headerSearchBtn.addEventListener('click', () => {
  searchMobile.classList.add('active');
});
searchCloseBtn.addEventListener('click', () => {
  searchMobile.classList.remove('active');
});

// anchors
document.querySelectorAll('.js-scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top: elementPosition,
      behavior: 'smooth'
    });
  });
});


const anchors = document.querySelectorAll('.js-scroll-link')

for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault()
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

// choices-list
const element = document.querySelector('.choices-list');
const choices = new Choices(element, {
  position: 'bottom',
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
});


// gallery
var galleryChecks = document.querySelectorAll("[name=periods]")
for (var i = 0; i < galleryChecks.length; i++){
  galleryChecks[i].addEventListener('change', changeCheck)
}
function changeCheck(){
  var galleryChecksChecked = this;
for (var i = 0; i < galleryChecks.length; i++){
  galleryChecks[i].checked = false;
}
  galleryChecksChecked.checked = true
}

// gallery-slide
const gallerySlide = document.querySelectorAll('.gallery-slide');
const overlay = document.querySelector('.overlay')
const modalOverlay = document.querySelector('.modal-overlay');
const modals = document.querySelectorAll('.modal');
const modalOverlayClose =  document.querySelector('.modal-overlay__close');

const fixBlocks = document.querySelectorAll('.overlay');

gallerySlide.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');
    overlay.classList.add('is-open');
    modalOverlay.classList.add('is-open');
    disableScroll()

    document.querySelector(`[data-target="${path}"]`).classList.add('is-open');

    const modal = document.querySelector('.modal')
    const closeBtn = modal.querySelector('.modal-overlay__close')
    closeBtn.focus()
  })
});

modalOverlayClose.addEventListener('click', () => {
  if (modalOverlay.classList.contains('is-open')) {
    const modal = modalOverlay.querySelector('.modal.is-open')

    modalOverlay.classList.remove('is-open')
    modal.addEventListener('transitioned', () => {
      modal.classList.remove('is-open')
    })
    overlay.addEventListener('transitioned', () => {
      overlay.classList.remove('is-open')
    })
    enableScroll()
  }
})

// catalog
$(".accordion").accordion( {
  // active: false,
  collapsible: true,
  icons: false,
  heightStyle: "content"
});

let catalogTab = document.querySelectorAll('.catalog-item-tab')
for(let i = 0; i < catalogTab.length; i++) {
  catalogTab[i].tabIndex = '';
};

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.artist-item__name').forEach(function(artistName) {
    artistName.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;
      console.log(path);

      document.querySelectorAll('.artist-item__name').forEach(function(artistNameActive){
        artistNameActive.classList.remove('artist-item__name--active');
      });
      event.currentTarget.classList.add('artist-item__name--active');

      document.querySelectorAll('.artist-inf').forEach(function(artistNameContent) {
        artistNameContent.classList.remove('artist-inf--active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('artist-inf--active');
    });
  });
});

const artistLinks =  document.querySelectorAll('.artist-item__name');
(() => {
	const MOBILE_WIDTH = 1023;

	function getWindowWidth () {
	  return Math.max(
	    document.body.scrollWidth,
	    document.documentElement.scrollWidth,
	    document.body.offsetWidth,
	    document.documentElement.offsetWidth,
	    document.body.clientWidth,
	    document.documentElement.clientWidth
	  );
	}

	function scrollToContent (link, isMobile) {
		if (isMobile && getWindowWidth() > MOBILE_WIDTH) {
			return;
		}

	  const href = link.getAttribute('href').substring(1);
	  const scrollTarget = document.getElementById(href);
	  const elementPosition = scrollTarget.getBoundingClientRect().top;

	  window.scrollBy({
      top: elementPosition,
      behavior: 'smooth'
	  });
	}

	document.querySelectorAll('.artist-item__name').forEach(link => {
	  link.addEventListener('click', function(e) {
      e.preventDefault();

      scrollToContent(this, true);
	  });
	});
})();

// types-dropdown
const typesBtns = document.querySelectorAll('.types-item__btn');
const typesDrops = document.querySelectorAll('.types-dropdown');

function onDisable(el) {
  if (el.target.classList.contains('is-disabled')) {
    el.target.classList.remove('is-disabled', 'is-active');
    el.target.removeEventListener("animationend", onDisable);
  };
};

typesBtns.forEach(el => {
  el.addEventListener('click', (e) => {
    let currentBtn = e.currentTarget;
    let currentDrop = currentBtn.closest('.types-item').querySelector('.types-dropdown');

    typesBtns.forEach(el => {
      if(el !== currentBtn) {
        el.classList.remove('is-active');
      };
    });
    currentBtn.classList.toggle('is-active');

    typesDrops.forEach(el => {
      if (!el.classList.contains('is-active')) {
        el.classList.add('is-active');
        el.addEventListener("animationend", onDisable);
      } else {
        el.classList.add('is-disabled');
      };

      el.classList.remove('is-active');
    });
    currentDrop.classList.toggle('is-active');
  });






  document.addEventListener('click', (e) => {
    if (!e.target.closest('.types-list')) {
      typesBtns.forEach(el => {
        el.classList.remove('is-active');
      });

      typesDrops.forEach(el => {
        if (el.classList.contains('is-active')) {
          el.classList.add('is-disabled');
          el.addEventListener("animationend", onDisable);
        }
        el.classList.remove('is-active');
      });
    };
  })
});

// contacts
var selector = document.querySelector('input[type="tel"]');
var im = new Inputmask("+7(999)999-99-99");
im.mask(selector);

new window.JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 30,
    },

    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        console.log(phone)
        return Number(phone) && phone.length === 10
      },
    },
  },
  messages: {
    name: {
      required: 'Как вас зовут?',
      minLength: 'Минимальная длина имени от 3 букв',
    },
    tel: {
      required: 'Укажите ваш телефон',
      function: 'Не полностью введен номер телефона',
    },
  },
    colorWrong: '#D11616'
});

// tooltip
tippy('.tooltip', {
  theme: 'lavander',
  maxWidth: 264,
});

// map
ymaps.ready(init);
function init() {
  // const mapElem = document.querySelector('#map');
  const myMap = new ymaps.Map(
    'map',
    {
      center: [55.75845532363718,37.60116725834606],
      zoom: 14,
      controls: []
    },
  );

  GeolocationControl = ymaps.templateLayoutFactory.createClass('<div class="map-geo">'+
  '<div class="map-geo-btn">'+
  '<svg class="map-geo-btn__ikon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.385 12.42l16.01-7.614a.6.6 0 0 1 .8.8l-7.616 16.009a.6.6 0 0 1-1.11-.068l-2.005-6.011-6.01-2.004a.6.6 0 0 1-.069-1.111z" fill="currentColor"></path></svg>'+
  '</div>' +
  '</div>',),
  geolocationControl = new ymaps.control.GeolocationControl({options: {layout: GeolocationControl}});
  myMap.controls.add(geolocationControl, { float: 'none', position: {right: '50px', top: '355px'} });

  ZoomControl = ymaps.templateLayoutFactory.createClass('<div class="map-zoom">'+
    '<div class="map-zoom-btn" id="zoom-in"><svg class="map-zoom-btn__ikon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 5.992c0-.537.448-.992 1-.992.556 0 1 .444 1 .992V11h5.008c.537 0 .992.448.992 1 0 .556-.444 1-.992 1H13v5.008c0 .537-.448.992-1 .992-.556 0-1-.444-1-.992V13H5.992C5.455 13 5 12.552 5 12c0-.556.444-1 .992-1H11V5.992z" fill="currentColor"></path></svg></div>' +
    '<div class="map-zoom-btn" id="zoom-out"><svg class="map-zoom-btn__ikon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z" fill="currentColor"></path></svg></div>' +
    '</div>',{

    build: function () {
      ZoomControl.superclass.build.call(this);
      this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
      this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);
      $('#zoom-in').bind('click', this.zoomInCallback);
      $('#zoom-out').bind('click', this.zoomOutCallback);
    },

    clear: function () {
      $('#zoom-in').unbind('click', this.zoomInCallback);
      $('#zoom-out').unbind('click', this.zoomOutCallback);
      ZoomControl.superclass.clear.call(this);
    },

    zoomIn: function () {
      var map = this.getData().control.getMap();
      this.events.fire('zoomchange', {
        oldZoom: map.getZoom(),
        newZoom: map.getZoom() + 1
      });
    },
    zoomOut: function () {
      var map = this.getData().control.getMap();
      this.events.fire('zoomchange', {
        oldZoom: map.getZoom(),
        newZoom: map.getZoom() - 1
      });
    }
  }),
  zoomControl = new ymaps.control.ZoomControl({options: {layout: ZoomControl}});
  myMap.controls.add(zoomControl, { float: 'none', position: {right: '50px', top: '264px'} });
  myMap.behaviors.disable(['scrollZoom']);

  const myPlacemark = new ymaps.Placemark(
    [55.75846806898367, 37.60108849999989],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/map-placemark.svg",
      iconImageSize: [20, 20],
      iconImageOffset: [10, -10],
    }
  );

  myMap.geoObjects.add(myPlacemark);
  setTimeout(() => {
    myMap.container.fitToViewport();
  }, 5000);
};

