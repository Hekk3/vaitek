const cta = document.querySelector('.cta');

var swiper = new Swiper('.slider1', {
    navigation: {
      nextEl: '.svg-block-next',
      prevEl: '.svg-block-prev',
    },
    slidersPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });


let swiper2 = new Swiper('.main-catalog__slider-container', {
  freeMode: true,
  slidesPerView: 'auto',

  breakpoints: {
    320: {
      spaceBetween: 5,
    },

    600: {
      spaceBetween: 8,
    }
  }
});

let swiper3 = new Swiper('.product-slider__content', {
  slidesPerView: 4,
  spaceBetween: 23,

  navigation: {
    nextEl: '.product-slider__button--next-main',
    prevEl: '.product-slider__button--prev-main',
  },
   breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },

    520: {
      slidesPerView: 2,
      spaceBetween: 14
    },

    720: {
      slidesPerView: 3,
      spaceBetween: 18
    },

    992: {
      slidesPerView: 4,
    }
  }
});

// fixes

if (window.innerWidth < 1150 && cta != null && cta != undefined) {
  $(".catalog-blok").removeAttr("uk-scrollspy")

  let aAll = document.querySelectorAll('.catalog-blok a');

  for (let i = 0; i < aAll.length; i++) {
    aAll[i].classList.remove('uk-scrollspy-inview')
    aAll[i].style.visibility = "visible";
  }
}

let swiper4 = new Swiper('.catalog-swiper', {
  freeMode: true,
  slidesPerView: 'auto',
  spaceBetween: 19,

  navigation: {
    nextEl: '.product-slider__button--next-main',
    prevEl: '.product-slider__button--prev-main',
  },
});



$(".search-btn").click(function(){
  $('.form-input').fadeIn("slow",function (){
  })
})

$(".svg-close").click(function(){
  $('.form-input').fadeOut("slow",function (){
  $('.form-input').hide()

})
})

$('.header-mobile-main').hide()
$(".burger").click(function(){
  $('.header-mobile-main').fadeIn("slow",function (){
    $('.header-mobile-main').show()
  })
})

$(".svg-menu-close").click(function(){

  $('.header-mobile-main').fadeOut("slow",function (){
    $('.header-mobile-main').hide()
  })
})

if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) 
{
  $('.our_projects_slider_blok-title').css("-webkit-text-fill-color" , "inherit")
  $('.our_projects_slider_blok-title').css("-webkit-background-clip" , "unset")
  $('.our_projects_slider_blok-title').css("background" , "transparent")
  $('.our_projects_slider_blok_text-bg').css("background", "transparent")
}

document.addEventListener('click', function(e) {
  const menu = document.querySelector('.form-input');
  const btn = document.querySelector('.search-btn');
  const target = e.target;
  const its_menu = target == menu || menu.contains(target);
  const its_btnMenu = target == btn;
    
  if (!its_menu && !its_btnMenu) {
    $('.form-input').fadeOut("slow",function (){
      $('.form-input').hide()
    })
  }
});


// mask plagin

$(function(){
  //2. Получить элемент, к которому необходимо добавить маску
  $(".cta__input--tel").mask("+7 (999) 999-99-99");
});

$(function(){
  //2. Получить элемент, к которому необходимо добавить маску
  $(".modal__input--tel").mask("+7 (999) 999-99-99");
});

// End mask plagin


// hover menu

const hoverMenu = document.querySelectorAll('.main-catalog__bottom-dropmenu-container');
const hoverBtn = document.querySelectorAll('.main-catalog__bottom-menu .main-catalog__bottom-text');


function hoverMenuDel() {
  for (let i = 0; i < hoverMenu.length; i++) {
    hoverMenu[i].classList.remove('main-catalog__bottom-dropmenu-container--active')
  }
}


for (let i = 0; i < hoverBtn.length; i++) {
  hoverBtn[i].addEventListener('mouseenter', function() {
    hoverMenuDel()
    hoverMenu[i].classList.add('main-catalog__bottom-dropmenu-container--active');
  })
}

for (let i = 0; i < hoverBtn.length; i++) {
  hoverBtn[i].addEventListener('mouseleave', function() {
      hoverMenu[i].classList.remove('main-catalog__bottom-dropmenu-container--active');
  })
}

for (let i = 0; i < hoverMenu.length; i++) {
  hoverMenu[i].addEventListener('mouseenter', function() {
    hoverMenuDel()
    hoverMenu[i].classList.add('main-catalog__bottom-dropmenu-container--active');
  })
}

for (let i = 0; i < hoverMenu.length; i++) {
  hoverMenu[i].addEventListener('mouseleave', function() {
    hoverMenu[i].classList.remove('main-catalog__bottom-dropmenu-container--active');
  })
}

// End hover menu


// validate form


$(function() {
  jQuery(function($) {
    $('.cta__input--first').on('keypress', function() {
      var that = this;
      setTimeout(function() {
        var res = /[^А-Яа-яЁёa-zA-Z -]/g.exec(that.value);
        that.value = that.value.replace(res, '');
      }, 0);
    });
  });
})

$.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
  $('.cta__input--tel').click(function(){
    $(this).setCursorPosition(4);  // set position number
  });

// End validate form

const modalButton = document.querySelector('.modal__button');
const input1 = document.querySelector('.modal__input--first');
const input2 = document.querySelector('.modal__input--second');
const input3 = document.querySelector('.modal__input--third');
const input3Checkbox = document.querySelector('.modal__checkbox-text')

modalButton.addEventListener('click', function(event) {

  if (input1.value === '') {
    input1.classList.add('modal__input-hint');

    setTimeout(function() {
      input1.classList.remove('modal__input-hint');
    }, 2000);

    event.preventDefault()
  }

  if (input2.value === '') {
    input2.classList.add('modal__input-hint');

    setTimeout(function() {
      input2.classList.remove('modal__input-hint');
    }, 2000);

    event.preventDefault()
  }

  if (!input3.checked) {
    input3Checkbox.classList.add('modal__input-hinted--checkbox-hinted');

    setTimeout(function() {
      input3Checkbox.classList.remove('modal__input-hinted--checkbox-hinted');
    }, 2000);

    event.preventDefault()
  }
});


$(function() {
  jQuery(function($) {
    $('.modal__input--first').on('keypress', function() {
      var that = this;
      setTimeout(function() {
        var res = /[^А-Яа-яЁёa-zA-Z -]/g.exec(that.value);
        that.value = that.value.replace(res, '');
      }, 0);
    });
  });
})

$.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };

  $('.modal__input--tel').click(function(){
    $(this).setCursorPosition(4);  // set position number
  });

// End validate form


// modal

$('.modal').hide()
$(".btn-modal").click(function(){
    $('.modal').fadeIn()
})

$(".modal__close").click(function() {
  $('.modal').fadeOut()
})

const modalDark = document.querySelector('.modal__dark');

modalDark.addEventListener('click', function(e) {
  const menu = document.querySelector('.modal__body');
  const target = e.target;
  const its_menu = target == menu || menu.contains(target);
    
  if (!its_menu) {
    $('.modal').fadeOut()
  }
});

// End modal


// adaptive catalog menu 

const mainCatalogIs = document.querySelector('.main-catalog__list');

if (window.innerWidth <= 768 && mainCatalogIs) {
  $(function() {
    $('.main-catalog__list').selectric();
  });
}


//  End menu catalog

// validate cta

if (cta) {
  const ctaButton = document.querySelector('.cta__button');
  const input1Cta = document.querySelector('.cta__input--first');
  const input2Cta = document.querySelector('.cta__input--second');

  ctaButton.addEventListener('click', function(event) {

    if (input1Cta.value === '') {
      input1Cta.classList.add('cta__input-hint');

      setTimeout(function() {
        input1Cta.classList.remove('cta__input-hint');
      }, 2000);

      event.preventDefault()
    }

    if (input2Cta.value === '') {
      input2Cta.classList.add('cta__input-hint');

      setTimeout(function() {
        input2Cta.classList.remove('cta__input-hint');
      }, 2000);

      event.preventDefault()
    }
  });
}

// End validate cta