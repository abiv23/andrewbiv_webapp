// Konami Code
neededkeys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65], started = false, count = 0;
$(document).keydown(function(e) {
    key = e.keyCode;
    if (!started) {
        if (key == 38) {
            started = true;
        }
    }
    if (started) {
        if (neededkeys[count] == key) {
            count++;
        } else {
            reset();
        }
        if (count == 10) {
            reset();
            // Do your stuff here
            alert('Cheat Codes Activated');
            $('body').css('background-color', '#FFA8A8');
            // Turn down for what
            var s = document.createElement('script');
            s.setAttribute('src', 'https://nthitz.github.io/turndownforwhatjs/tdfw.js');
            document.body.appendChild(s);
        }
    } else {
        reset();
    }
});

function reset() {
    started = false;
    count = 0;
}
