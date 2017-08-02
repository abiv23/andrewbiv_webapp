$(document).ready(function() {
    $(document).keydown(keyCode);
    $('.keyCodeIs').hide();
})

function keyCode(e) {
    clearOut();
    keycodeScroll();
    let keyCoded = e.keyCode;
    let key = e.key;
    const keyUp = key.toUpperCase();
    $('.keycode-intro').hide();
    $('.keycode').text(keyCoded)
    $('.keycode');
    $('.key').text(keyUp);
    $('.keyCodeIs').show();
}

function clearOut() {
    $('.keycode').empty();
    $('.key').empty();
}

function keycodeScroll() {
    console.log('in key code scroll')
    $(document).scrollTop($('.keycode').offset().top);
}
