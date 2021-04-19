$(document).ready(function (e) {
  $('.col-sm-4').mouseover(function () {
    $('.myhover', this).show();
    $('.overlay', this).show()
  }).mouseout(function () {
    $('.myhover', this).hide();
    $('.overlay', this).hide()
  });

  $('#img_design').click(function () {
    $('#dv_design').css('display', 'block');
  })

  $('#img_development').click(function () {
    $('#dv_development').css('display', 'block');
  })

  $('#img_productManagement').click(function () {
    $('#dv_productManagement').css('display', 'block');
  })
});

