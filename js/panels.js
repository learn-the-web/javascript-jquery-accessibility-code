var $btn = $('.btn');
var $panel = $('.panel');

$btn.on('click', function () {
  $panel.toggleClass('js-panel-open');

  if ($btn.attr('aria-expanded') == 'false') {
    $btn.attr('aria-expanded', true);
    $panel.attr('aria-hidden', false);
  } else {
    $btn.attr('aria-expanded', false);
    $panel.attr('aria-hidden', true);
  }
});
