$(document).ready(function() {
    Materialize.scrollFire(options);
})

/* scrollfire initialize*/
var options = [{
    selector: '#demoToast',
    offset: 20,
    callback: function(el) {
        Materialize.toast('<a class="demo-toast" href="https://www.clickfox.com/#airline_whitepaper">' + 'Let&rsquo;s take a look at the White Paper!' + '</a>', 20000)
    }

}];
