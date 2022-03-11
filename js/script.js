//product management toggle

$(document).ready(function () {
    $("img", "#product-show").click(function () {
        $("#product-hidden").toggle();
        $("#product-show").toggle();
    });
});
$(document).ready(function () {
    $("p", "#product-hidden").click(function () {
        $("#product-show").toggle();
        $("#product-hidden").toggle();
    });
});

//design toggle
$(document).ready(function () {
    $("img", "#design-show").click(function () {
        $("#design-hidden").toggle();
        $("#design-show").toggle();
    });
});
$(document).ready(function () {
    $("p", "#design-hidden").click(function () {
        $("#design-show").toggle();
        $("#design-hidden").toggle();
    });
});

//development toggle
$(document).ready(function () {
    $("img", "#development-show").click(function () {
        $("#development-hidden").toggle();
        $("#development-show").toggle();
    });
});
$(document).ready(function () {
    $("p", "#development-hidden").click(function () {
        $("#development-show").toggle();
        $("#development-hidden").toggle();
    });
});