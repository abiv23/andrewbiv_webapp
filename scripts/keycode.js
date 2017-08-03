$(document).ready(function() {
    $(document).keydown(keyCode);
    $('.keyCodeIs').hide();
})

function keyCode(e) {
    //hard to degbug with preventDefault, erase this once in production
    // event.preventDefault();
    clearOut();
    let keyCoded = e.keyCode;
    let key = e.key;
    const keyUp = key.toUpperCase();
    $('.keycode-intro').hide();
    $('.keycode').text(keyCoded)
    $('.key').text(keyUp);
    $('.keyCodeIs').show();
}

function clearOut() {
    $('.keycode').empty();
    $('.key').empty();
}
