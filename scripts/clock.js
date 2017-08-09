$(document).ready(function() {
    setInterval(setDate, 1000);
    setInterval(setDateFooter, 1000);
})

function setDate() {
    const secondHand = $('.second-hand');
    const minsHand = $('.min-hand');
    const hoursHand = $('hour-hand');
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();
    const secondsToDegrees = (((seconds / 60) * 360) + 90); /* plus 90deg is to account for initial offset */
    const minsToDegrees = (((mins / 60) * 360) + 90); /* plus 90deg is to account for initial offset */
    const hoursToDegrees = (((hours / 12) * 360) + 90); /* plus 90deg is to account for initial offset */
    console.log(hours);
    console.log(hoursToDegrees);
    secondHand.css('transform', `rotate(${secondsToDegrees}deg)`);
    minsHand.css('transform', `rotate(${minsToDegrees}deg)`);
    hoursHand.css('transform', `rotate(${hoursToDegrees}deg)`);
}

function setDateFooter() {
    const secondHand = $('.footer-second-hand');
    const minsHand = $('.footer-min-hand');
    const hoursHand = $('footer-hour-hand');
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();
    const secondsToDegrees = (((seconds / 60) * 360) + 90); /* plus 90deg is to account for initial offset */
    const minsToDegrees = (((mins / 60) * 360) + 90); /* plus 90deg is to account for initial offset */
    const hoursToDegrees = (((hours / 12) * 360) + 90); /* plus 90deg is to account for initial offset */
    console.log(hours);
    console.log(hoursToDegrees);
    secondHand.css('transform', `rotate(${secondsToDegrees}deg)`);
    minsHand.css('transform', `rotate(${minsToDegrees}deg)`);
    hoursHand.css('transform', `rotate(${hoursToDegrees}deg)`);
}
