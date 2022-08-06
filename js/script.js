
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      320: {
        slidePreView: 4,
      },
    }
  });

  $(document).ready(function() {
    $('.header__burger').click(function(event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $("body").toggleClass('lock');
    });

  });

  $( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
    $( "#tabs" ).tabs();
  } );

  $(function() {
    $('#accordion').accordion({
      collapsible: true,
      active: false,
    });
  });

  const searchOpen = document.querySelector('.search__btn');
  const search =  document.querySelector('.search');
  const searchBtn = document.querySelector('.search__btn');
  const searchClose = document.querySelector('.search__close');

  searchOpen.addEventListener('click', () => {
    search.classList.add('search--open');
    searchBtn.classList.add('searchbtn--open');
  });

  searchClose.addEventListener('click', () => {
    search.classList.remove('search--open');
    searchBtn.classList.remove('searchbtn--open');
  });
