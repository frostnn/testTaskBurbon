$('.slider-block').slick({
  dots: true,
  prevArrow: '<img class="slider-arrows slider-arrows__left" src="../img/arrowL.png" alt="" ></img>',
  nextArrow: '<img class="slider-arrows slider-arrows__right" src="../img/arrowR.png" alt="" ></img>', 
});

$('. .mobile-menu__burger').click(function() {
  $('.mobile-nav').addClass('open')
});
$('.mobile-nav__close').click(function() {
  $('.mobile-nav').removeClass('open')
});