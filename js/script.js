//product management toggle

$(document).ready(function () {
    $("img").click(function () {
        $("#product-hidden").toggle();
        $("#product-show").toggle();
    });
});
$(document).ready(function () {
    $("p").click(function () {
        $("#product-show").toggle();
        $("#product-hidden").toggle();
    });
});

//design toggle
$(document).ready(function () {
    $("img").click(function () {
        $("#design-hidden").toggle();
        $("#design-show").toggle();
    });
});
$(document).ready(function () {
    $("p").click(function () {
        $("#design-show").toggle();
        $("#design-hidden").toggle();
    });
});

//development toggle
$(document).ready(function () {
    $("img").click(function () {
        $("#development-hidden").toggle();
        $("#development-show").toggle();
    });
});
$(document).ready(function () {
    $("p").click(function () {
        $("#development-show").toggle();
        $("#development-hidden").toggle();
    });
});