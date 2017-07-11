$(document).ready(function() {
    contraKode();
    setIntervalKode();
})

/* being konami code */

function contraKode() {
    $('#flash').hide();
}

$(document).keyup(function(e) {
    console.log(e.which);
    input += e.which;
    clearTimeout(timer);
    timer = setTimeout(function() {
        input = "";
    }, 500);
    check_input();
});

function check_input() {
    if (input == secret) {
        //the secret code
        showcontraKode = true;
    }
};

function setIntervalKode() {
    setInterval(function() {
        $('#info').html('Keystroke: ' + input);
    }, 100);
}

/* end konami code */

$(function() {
    var className = $('.className');

    className.css("left", walking + "%");

    var horizontal = className.css('background-position-x');

    var flag = 0;
    var scroll = 23;
    console.log(walking);

    $(document).on("scroll", function() {

        if (showclassName == true) {

            var scroll = $(document).scrollTop();
            walking = walking - 1;
            className.css("left", walking + "%");

            if (walking == -10) {
                walking = 110;
            }

            if ((scroll % 3) == 0) {

                if (horizontal == "0px") {
                    className.css("background-position-x", "-65px");

                    horizontal = className.css('background-position-x');

                } else if ((horizontal == "-65px") && (flag == 0)) {
                    className.css("background-position-x", "-130px");

                    horizontal = className.css('background-position-x');

                    flag = 1;
                } else if ((horizontal == "-65px") && (flag == 1)) {
                    className.css("background-position-x", "0px");

                    horizontal = className.css('background-position-x');

                    flag = 0;
                } else if (horizontal == "-130px") {
                    className.css("background-position-x", "-65px");

                    horizontal = className.css('background-position-x');

                }
            }
        }
    });
});
