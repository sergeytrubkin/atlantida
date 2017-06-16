/*    эффект hover'a в our team   */

$(".team__item").mouseover(function() {
  $(this).find('.team__item-info-block').removeClass('team__visible');
});

$(".team__item").mouseout(function() {
  $(this).find('.team__item-info-block').addClass('team__visible');
});


/*   проверка на длинну сообщения review    */

var review = $('.reviews__text');

for (var i = 0; i < review.length; i++) {
  if (review[i].textContent.length > 250) {
    review[i].textContent = (review[i].textContent.slice(0, 251) + "..." + review[i].textContent.slice(-1));
  }
}

/*    плавный скролл    */

var $page = $('html, body');

$('a[href*="#"]').click(function() {
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 700);
  return false;
});

/*    кнопка button-up    */

$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
    $('.scrollup').fadeIn();
  } else {
    $('.scrollup').fadeOut();
  }
});

