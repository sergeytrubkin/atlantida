/*    эффект hover'a в our team   */

$(".team__item").mouseover(function() {
  $(this).find('.team__item-info-block').removeClass('team__visible');
});

$(".team__item").mouseout(function() {
  $(this).find('.team__item-info-block').addClass('team__visible');
});


