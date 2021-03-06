$(function () {
  $('.sidenav-trigger').on('click', function () {
    $('body').css('overflow', 'hidden')
    $('#' + $(this).data('trigger')).css('display', 'block').animate({ right: 0 }, 200);
    $('.sidenav-overlay').css('display', 'block').animate({ opacity: 1 }, 200);
  })
  $('.sidenav-overlay').on('click', function () {
    $('#' + $('.sidenav-trigger').data('trigger')).animate({ right: '-300px' }, 200, function () {
      $(this).css('display', 'none');
    });
    $('.sidenav-overlay').animate({ opacity: 0 }, 200, function () {
      $(this).css('display', 'none')
      $('body').css('overflow', 'auto')
    });
  })
})
