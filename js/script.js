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




function hover(mydiv) {
    mydiv.getElementsByTagName("img")[0].style.opacity = "0.5";
}

function normal(mydiv) {
    mydiv.getElementsByTagName("img")[0].style.opacity = "1";
}

let div = document.getElementById('div#headings1');

div.innerHTML = div.innerHTML + 'Extra stuff';

function myClick() {
    text = "This text is added.";
    document.getElementById('heading1').innerHTML =
        document.getElementById('heading1').innerHTML + text;
}