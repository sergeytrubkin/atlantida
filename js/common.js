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




// console.log(review[0].textContent > 50)

