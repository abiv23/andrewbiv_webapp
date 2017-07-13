$(document).ready(function() {
    materializeParallax();
})

/* vanashing top nav */

$("#nav-drop").hide();

$("#cityclick").mouseover(function() {
    $("#citydrop").slideDown('slow');
});

$("#wrapper").mouseleave(function() {
    $("#citydrop").slideUp('slow');
});

/* materialize toast */
/* for introduction of KonamiCode, still needs to be intergrated */
// var $toastContent = $('<span>Cheat Mode Unlocked</span>');
// Materialize.toast($toastContent, 5000);

/* materialize scrollfire */
/* for intro of project cards with animation not intergrated yet */
var options = [{
    selector: '#staggered-test',
    offset: 50,
    callback: function(el) {
        Materialize.toast("This is our ScrollFire Demo!", 1500);
    }
}, {
    selector: '#staggered-test',
    offset: 205,
    callback: function(el) {
        Materialize.toast("Please continue scrolling!", 1500);
    }
}, {
    selector: '#staggered-test',
    offset: 400,
    callback: function(el) {
        Materialize.showStaggeredList($(el));
    }
}, {
    selector: '#image-test',
    offset: 500,
    callback: function(el) {
        Materialize.fadeInImage($(el));
    }
}];
Materialize.scrollFire(options);

/* materializeParallax */

function materializeParallax() {
    $('.parallax').parallax();
}
