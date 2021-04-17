$(document).ready(function (e) {
    $('.col-sm-4').mouseover(function () {
        $('.myhover', this).show();
        $('.overlay', this).show()
    }).mouseout(function () {
        $('.myhover', this).hide();
        $('.overlay', this).hide()
    });

    $('#design').click(function () {
        $('#design-showing').css('display', 'block');
    })

    $('#development').click(function () {
        $('#development-showing').css('display', 'block');
    })

    $('#productManagement').click(function () {
        $('#product-management-showing').css('display', 'block');
    })
});

