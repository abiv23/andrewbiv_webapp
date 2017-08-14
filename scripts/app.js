$(document).ready(function() {
    Materialize.scrollFire(options);
    setInterval(setDateFooter, 1000);
})

function setDateFooter() {
    const hoursHand = $('.footer-hours-hand');
    const secondHand = $('.footer-second-hand');
    const minsHand = $('.footer-min-hand');
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();
    const secondsToDegrees = (((seconds / 60) * 360) + 90); /* plus 90deg is to account for initial offset */
    const minsToDegrees = (((mins / 60) * 360) + ((seconds / 60) * 6) + 90); /* plus 90deg is to account for initial offset */
    const hoursToDegrees = (((hours / 12) * 360) + ((mins / 60) * 30) + 90); /* plus 90deg is to account for initial offset */
    secondHand.css('transform', `rotate(${secondsToDegrees}deg)`);
    minsHand.css('transform', `rotate(${minsToDegrees}deg)`);
    hoursHand.css('transform', `rotate(${hoursToDegrees}deg)`);
}

/* scrollfire initialize*/
var options = [{
    selector: '#contactToast',
    offset: 20,
    callback: function(el) {
        Materialize.toast('<a href="/contact.html">' + 'Let&rsquo;s talk! Contact me' + '</a>', 8000)
    }

}, {
    selector: '#aboutToast',
    offset: 20,
    callback: function(el) {
        Materialize.toast('<a href="/projects.html">' + "See my projects" + '</a>', 8000)
    }
}, {
    selector: '#seoToast',
    offset: 20,
    callback: function(el) {
        Materialize.toast('<a href="/porch-light.html">See my Development work</a>')
    }
}, {
    selector: '#plgToast',
    offset: 20,
    callback: function(el) {
        Materialize.toast('<a href="/seo.html">See my SEO work</a>')
    }
}];


/* scrollfire examples */
// var options = [
//       {selector: '#staggered-test', offset: 50, callback: function(el) {
//         Materialize.toast("This is our ScrollFire Demo!", 1500 );
//       } },
//       {selector: '#staggered-test', offset: 205, callback: function(el) {
//         Materialize.toast("Please continue scrolling!", 1500 );
//       } },
//       {selector: '#staggered-test', offset: 400, callback: function(el) {
//         Materialize.showStaggeredList($(el));
//       } },
//       {selector: '#image-test', offset: 500, callback: function(el) {
//         Materialize.fadeInImage($(el));
//       } }
//     ];
//     Materialize.scrollFire(options);

/* materialize toast */
/* for introduction of KonamiCode, still needs to be intergrated */
// var $toastContent = $('<span>Cheat Mode Unlocked</span>');
// Materialize.toast($toastContent, 5000);

/* materialize scrollfire */
/* for intro of project cards with animation not intergrated yet */
// var options = [{
//     selector: '#staggered-test',
//     offset: 50,
//     callback: function(el) {
//         Materialize.toast("This is our ScrollFire Demo!", 1500);
//     }
// }, {
//     selector: '#staggered-test',
//     offset: 205,
//     callback: function(el) {
//         Materialize.toast("Please continue scrolling!", 1500);
//     }
// }, {
//     selector: '#staggered-test',
//     offset: 400,
//     callback: function(el) {
//         Materialize.showStaggeredList($(el));
//     }
// }, {
//     selector: '#image-test',
//     offset: 500,
//     callback: function(el) {
//         Materialize.fadeInImage($(el));
//     }
// }];
// Materialize.scrollFire(options);

/* materializeParallax */

// function materializeParallax() {
//     $('.parallax').parallax();
// }


/* vanashing top nav */

// $("#nav-drop").hide();
//
// $("#cityclick").mouseover(function() {
//     $("#citydrop").slideDown('slow');
// });
//
// $("#wrapper").mouseleave(function() {
//     $("#citydrop").slideUp('slow');
// });
