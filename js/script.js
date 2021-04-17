$(document).ready(function (e) {
    $('.col-sm-4').mouseover(function () {
        $('.Image-Overlay', this).show();
    })

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

