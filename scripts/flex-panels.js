$(document).ready(function() {
    imageClickListener();
})
const panels = $('.panels');

function imageClickListener() {
    panels.each(function() {
        $(this).on('click', function(e) {
            toggleOpen(e);
        });
    });
    panels.each(function() {
        $(this).on('transitionend', function(e) {
            toggleActive(e);
        });
    })
}

function toggleOpen(e) {
    if ($(e.target).parent('div').hasClass('open')) {
        $(e.target).parent('div').removeClass('open')
    } else {
        $(e.target).parent('div').addClass('open');
    }
    if ($(e.target).parent('div').hasClass('open-active')) {
        $(e.target).parent('div').removeClass('open-active')
    } else {
        $(e.target).parent('div').addClass('open-active');
    }
}
