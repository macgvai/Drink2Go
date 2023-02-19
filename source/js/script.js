/* меню мобайл*/
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');



navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});


/* Gallery */

const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


//range input

const slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [400, 800],
    connect: true,
    range: {
        'min': 0,
        'max': 900
    }
});

const input0 = document.getElementById('input-0');
const input1 = document.getElementById('input-1');
const inputs = [input0, input1]


slider.noUiSlider.on('update', function (values, handle) {
  inputs[handle].value = Math.round(values[handle])
})

const setRangeSlider = (i, value) => {
  let arr = [null, null];
  arr[i] = value;
  slider.noUiSlider.set(arr)
};

inputs.forEach((el, index) => {
  el.addEventListener('change', e => {
    setRangeSlider(index, e.currentTarget.value);
  })
})


/* Map */

const position = [59.968266, 30.3174089];
const map = L.map('map').setView(position, 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


const mainPinIcon = L.icon({
  iconUrl: './img/Map-Pin.svg',
  iconSize: [39, 50],
  iconAnchor: [18, 50],
});

const mainPin = L.marker(
  {
    lat: position[0],
    lng: position[1],
  },
  {
    draggable: false,
    icon: mainPinIcon,
  },
);
mainPin.addTo(map);
