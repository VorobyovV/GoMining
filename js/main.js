let burgerMenu = document.getElementById('burger')
let overlay = document.getElementById('header__mobile')
let body = document.getElementById('body')
burgerMenu.addEventListener('click', function (e) {
  this.firstElementChild.classList.toggle('active')
  overlay.classList.toggle('active')
  body.classList.toggle('active')
  e.preventDefault()
})

let item = document.querySelectorAll('.faq__item')

item.forEach(items => {
  items.addEventListener('click', e => {
    let itemClick = items.classList.contains('active')
    if (itemClick == true) {
      for (var i = 0; i < item.length; i++) {
        item[i].classList.remove('active')
      }
    } else {
      for (var i = 0; i < item.length; i++) {
        item[i].classList.remove('active')
      }
      items.classList.toggle('active')
    }
  })
})

let copy = document.getElementById('tooltip-link')

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-copy]').forEach(e => {
    e.addEventListener('click', o => {
      copy.style.opacity = null;
      o.preventDefault(),
        (function (e) {
          const o = document.createElement('input')
          o.setAttribute('type', 'text'),
            o.setAttribute('value', e),
            document.body.appendChild(o),
            o.select(),
            o.setSelectionRange(0, 99999),
            document.execCommand('copy'),
            document.body.removeChild(o)
        })(e.getAttribute('data-copy')),
        e.classList.add('copied'),
        setTimeout(() => {
          e.classList.remove('copied')
        }, 2e3)
      setTimeout(() => {
        copy.style.opacity = 0
      }, 3500)
    })
  })
})

var mySwiper = new Swiper('.buy .swiper-container', {
  spaceBetween: 53,
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  speed: 200,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1.1,

      spaceBetween: 100,
    },

    767: {
      slidesPerView: 1.1,
      spaceBetween: 0,
    },
    991: {
      slidesPerView: 3,
    },

    1399: {
      slidesPerView: 3,
    },
  },
})

var mySwiper2 = new Swiper('.pick .pick__blocks', {
  spaceBetween: 28,
  slidesPerView: 4,
  speed: 200,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 16,
    },

    767: {
      slidesPerView: 2,
      spaceBetween: 28,
    },
    991: {
      slidesPerView: 3,
    },

    1399: {
      slidesPerView: 4,
    },
  },
})
