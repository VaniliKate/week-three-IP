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


$(document).ready(function () {

    // Validate name
    $('#usercheck').hide();
    let usernameError = true;
    $('#usernames').keyup(function () {
        validateUsername();
    });

    function validateUsername() {
        let usernameValue = $('#usernames').val();
        if (usernameValue.length == '') {
            $('#usercheck').show();
            usernameError = false;
            return false;
        } else if ((usernameValue.length < 3) ||
            (usernameValue.length > 10)) {
            $('#usercheck').show();
            $('#usercheck').html("**length of username must be between 3 and 10");
            usernameError = false;
            return false;
        } else {
            $('#usercheck').hide();
        }
    }

    // Validate Email
    const email =
        document.getElementById('email');
    email.addEventListener('blur', () => {
        let regex =
            /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let s = email.value;
        if (regex.test(s)) {
            email.classList.remove(
                'is-invalid');
            emailError = true;
        } else {
            email.classList.add(
                'is-invalid');
            emailError = false;
        }
    })

    // Submit button
    $('#submitbtn').click(function () {
        validateUsername();
        validateEmail();
        if ((usernameError == true) &&
            (emailError == true)) {
            return true;
        } else {
            return false;
        }
    });
});

$("form").on("submit", function (event) {
    alert("Your message has been received")
    $("#myform")[0].reset();

    event.preventDefault();
});