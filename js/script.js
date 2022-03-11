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



/*
function hover(mydiv) {
    mydiv.getElementsByTagName("img")[0].style.opacity = "0.5";
}

function normal(mydiv) {
    mydiv.getElementsByTagName("img")[0].style.opacity = "1";
}
*/

//Form input
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const box = document.getElementById('test');

function myPopUp() {
    alert("We have received your message.Thank you for reaching out to us");

}