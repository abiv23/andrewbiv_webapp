$(document).ready(function() {
    Materialize.scrollFire(options);
})

/* scrollfire initialize*/
var options = [{
    selector: '#demoToast',
    offset: 20,
    callback: function(el) {
        Materialize.toast('<a class="demo-toast" href="https://www.clickfox.com/demo-request">' + 'Let&rsquo;s take a look at a custom Demo' + '</a>', 18000)
    }

}];
