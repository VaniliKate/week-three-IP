$(document).ready(function () {
    $("img").click(function () {
        $(".hidden").toggle();
        $(".show").toggle();
    });
});
$(document).ready(function () {
    $("p").click(function () {
        $(".show").toggle();
        $(".hidden").toggle();
    });
});