$(document).ready(function () {
    $('.header__top__icons > .icon.search').click(function (e) {
        if ($(e.target).attr('id') !== 'title-search-input') {
            $('.search__panel').toggle(400);
        }
    });

    $('.header__menu__mobile > span').click(function (e) {
        $('.header__menu__mobile > .mobile_panel').addClass('opened');
    });

    $('.mobile_panel--close').click(function (e) {
        $(this).parent().removeClass('opened');
    });

    $('.popular > .popular-wrapper').slick({
       infinite: false,
       slidesToShow: 3,
       slidesToScroll: 1,
       arrows: false,
       dots: true,
       responsive: [
          {
             breakpoint: 1071,
             settings: {
                slidesToShow: 2,
             }
          },

          {
             breakpoint: 801,
             settings: {
                slidesToShow: 1,
             }
          }
       ],
    });
});