/* в этот файл добавляет скрипты*/
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
