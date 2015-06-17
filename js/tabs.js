var $tabs = $('.tabs');
var $panels = $('.panel');

$tabs.on('click', 'a', function (e) {
  e.preventDefault();
  var id = $(this).attr('href');

  $tabs.find('[aria-selected="true"]').attr({
    'aria-selected': false,
    'tabindex': -1
  });
  $(this).attr({
    'aria-selected': true,
    'tabindex': 0
  });

  $panels.filter('[aria-hidden="false"]').attr('aria-hidden', true);
  $(id).attr('aria-hidden', false);
});

$tabs.on('keydown', function (e) {
  switch (e.keyCode) {
    case 39: // Right
      $tabs.find('[aria-selected="true"]').parents('li').next().children('a').click().focus();
      break;
    case 37: // Left
      $tabs.find('[aria-selected="true"]').parents('li').prev().children('a').click().focus();
      break;
  }
});
