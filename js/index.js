const cta = document.querySelector('.cta');



// swipers
// =======

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

let swiper4 = new Swiper('.bad-catalog__slider-container', {
  slidesPerView: 'auto',
  spaceBetween: 19,

  navigation: {
    nextEl: '.product-slider__button--next-main',
    prevEl: '.product-slider__button--prev-main',
  },
});


// End swipers
// ==========



// fixes
// =====

if (window.innerWidth < 1150 && cta != null && cta != undefined) {

  let aAll = document.querySelectorAll('.catalog-blok a');

  for (let i = 0; i < aAll.length; i++) {
    aAll[i].classList.remove('uk-scrollspy-inview')
    aAll[i].style.visibility = "visible";
  }
}

$(".search-btn").click(function(){
  $('.form-input').fadeIn("slow",function (){
  })
})

$(".svg-close").click(function(){
  $('.form-input').fadeOut("slow",function (){
  $('.form-input').hide()

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
      $('.form-input').fadeOut();
  }
});

// End fixed
// =========




// mask plagin
// ===========

$(function(){
  $(".cta__input--tel").mask("+7 (999) 999-99-99");
});

$(function(){
  $(".modal__input--tel").mask("+7 (999) 999-99-99");
});

// End mask plagin
// ===============




// validate form
// =============

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
// =================




// modal
// =====

$('.modal').hide()
$(".btn-modal").click(function(){
    $('.modal').fadeIn()
})

$(".modal__close").click(function() {
  $('.modal').fadeOut()
})

const modalDark = document.querySelector('.modal__dark');
const modalMain = document.querySelector('.modal');

if (modalMain) {
  modalDark.addEventListener('click', function(e) {
    const menu = document.querySelector('.modal__body');
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
      
    if (!its_menu) {
      $('.modal').fadeOut()
    }
  });
}

// End modal
// =========



// adaptive catalog menu 
// =====================

const mainCatalogIs = document.querySelector('.main-catalog__list');

function selectStart()  {
  if (mainCatalogIs && window.innerWidth <= 768) {

      $('.main-catalog__list').selectric({
        disableOnMobile: false,
        nativeOnMobile: false,

        onOpen: function() {
          $('.selectric-main-catalog__list .selectric-items').fadeIn()
        },

        onClose: function() {
          $('.selectric-main-catalog__list .selectric-items').fadeOut()
        }
      });

  } else if (mainCatalogIs && window.innerWidth > 768) {

    $('.main-catalog__list').selectric('destroy');
    $('.main-catalog__list').selectric('destroy');

    var Selectric = $('.main-catalog__list').data('selectric');

    if (Selectric) {
      Selectric.destroy();
    }

  }
}

window.onresize = function(event) {
  selectStart();
};

selectStart();



if (mainCatalogIs) {
  $(function() {
    $('.main-catalog__bottom-menu-idk_first .main-catalog_selectric').selectric({
      disableOnMobile: false,
      nativeOnMobile: false,

      onBeforeInit: function() {
        const img1 = document.querySelector('.main-catalog__bottom-menu-idk_first .main-catalog__select-img-close-1');

        img1.addEventListener('click', function() {
          $('.main-catalog__bottom-menu-idk_first .main-catalog_selectric').selectric('open'); 
        })
      },

      onOpen: function() {
        const img1 = document.querySelector('.main-catalog__bottom-menu-idk_first .main-catalog__select-img-close-1');
        const img2 = document.querySelector('.main-catalog__bottom-menu-idk_first .main-catalog__select-img-close');

        img1.classList.add('active');
        img2.classList.add('active');
      },

      onClose: function() {
        const img1 = document.querySelector('.main-catalog__bottom-menu-idk_first .main-catalog__select-img-close-1');
        const img2 = document.querySelector('.main-catalog__bottom-menu-idk_first .main-catalog__select-img-close');

        img1.classList.remove('active');
        img2.classList.remove('active');
      }
    });
  });

  $(function() {


    $('.main-catalog__bottom-menu-idk_second .main-catalog_selectric').selectric({
      disableOnMobile: false,
      nativeOnMobile: false,


      onBeforeClose: function() {
        const selectLabel = document.querySelector('.main-catalog__bottom-menu-idk_second .selected');
        const selectImgRotate = document.querySelector('.selectric-img-rotate');


        if (selectLabel) {
          if (selectLabel.getAttribute('data-index') === '1') {

            selectImgRotate.classList.add('rotate');

          } else if (selectLabel.getAttribute('data-index') !== '1') {

            selectImgRotate.classList.remove('rotate');
          }
        }
      },
    });
  });
}

// End menu catalog
// ================



// validate cta
// ============

if (cta) {
  const ctaButton = document.querySelector('.cta__button');
  const input1Cta = document.querySelector('.cta__input--first');
  const input2Cta = document.querySelector('.cta__input--second');

  function inputClassAddRemove(input) {

    input.classList.add('cta__input-hint');

    setTimeout(function() {
      input.classList.remove('cta__input-hint');
    }, 2000);

    event.preventDefault();
  }

  ctaButton.addEventListener('click', function(event) {

    if (input1Cta.value === '') {

      inputClassAddRemove(input1Cta);

    }

    if (input2Cta.value === '') {

      inputClassAddRemove(input2Cta);

    }
  });
}

// End validate cta
// ================



// cookie
// ======

const cookie = document.querySelector('.cookie-message');
const cookieClose = document.querySelector('.cookie-message__close');

if (cookie) {
  cookie.classList.add('cookie-message_open');

  cookieClose.addEventListener('click', function() {
    cookie.classList.remove('cookie-message_open');
  });
}

// End cookie
// ==========



// catalog slider like checkbox
// ============================

const likeCheckboxItems = document.querySelectorAll('.main-catalog__slider-item');
const likeCheckboxClose = document.querySelectorAll('.main-catalog__slider-img');

for (let i = 0; i < likeCheckboxItems.length; i++) {
  likeCheckboxItems[i].addEventListener('click', function(e){
    if (e.target == likeCheckboxClose[i]) return;
    likeCheckboxItems[i].classList.toggle('main-catalog__slider-item--current');
  });
}

for (let i = 0; i < likeCheckboxClose.length; i++) {
  likeCheckboxClose[i].addEventListener('click', function(){
    likeCheckboxItems[i].classList.remove('main-catalog__slider-item--current');
  });
}

// End catalog slider like checkbox
// ================================



/* header-mobile */
/* ============= */

window.onload = function(e) {
  const burgerBtn = document.querySelector('.burger');
  const closeBtn = document.querySelector('.svg-menu-close');
  const headerMobileMenu = document.querySelector('.header-mobile-main');

  burgerBtn.addEventListener('click', function() {
    headerMobileMenu.classList.add('active');
    document.querySelector('body').style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', function() {
    headerMobileMenu.classList.remove('active');
    document.querySelector('body').style.overflow = 'unset';
  });
}

/* End header-mobile */
/* ================= */