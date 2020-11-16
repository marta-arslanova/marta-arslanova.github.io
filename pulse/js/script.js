$(document).ready(function(){

  //Slider
  $('.carousel__inner').slick({
    dots: false,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: '<button type="button" class="slick-next"><img src="../img/carousel/right.png" alt="slide"></div></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/carousel/left.png" alt="slide"></div></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false,
        }
      },
    ]
  });

  // Tabs
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab--active)', function() {
    $(this)
      .addClass('catalog__tab--active').siblings().removeClass('catalog__tab--active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content--active').eq($(this).index()).addClass('catalog__content--active');
  });

  
  // Catalog
  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content--active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list--active');
      })
    });
  };
  
  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');
  

// Modal windows
  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  });

  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });

  $('.button--buy').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });
  
// Validation forms
  function validateForms (form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: 'required',
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Введите свое имя",
          minlength: jQuery.validator.format("Минимум {0} символа")
        },
        phone: "Введите свой номер телефона",
        email: {
          required: "Введите свою почту",
          email: "Неправильно введен адрес почты",
        }
      }
    });
  };

  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');

  // Mask of number
  $('input[name=phone]').mask('+7 (999) 999-99-99');

  // Sending letters
  $('form').submit(function (e){
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'mailer/smart.php',
      data: $(this).serialize()
    }).done(function () {
      $(this).find('input').val('');
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');


      $('form').trigger('reset');
    });
    return false;
  });
});


