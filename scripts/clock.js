$(document).ready(function() {
    setInterval(setDate, 1000);
})

function setDate() {
    const secondHand = $('.second-hand');
    const minsHand = $('.min-hand');
    const hoursHand = $('.hour-hand');
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();
    const secondsToDegrees = (((seconds / 60) * 360) + 90); /* plus 90deg is to account for initial offset */
    const minsToDegrees = (((mins / 60) * 360) + ((seconds / 60) * 6) + 90);; /* plus 90deg is to account for initial offset */
    const hoursToDegrees = (((hours / 12) * 360) + ((mins / 60) * 30) + 90 - 360); /* plus 90deg is to account for initial offset */
    console.log(secondsToDegrees);
    // console.log(minsToDegrees);
    // console.log(hoursToDegrees);
    if (secondsToDegrees > 444) {
        console.log('broke the 360 degree mark');
        secondsToDegrees = 0;
    } else {
        console.log('still not over 360');
    }

    secondHand.css('transform', `rotate(${secondsToDegrees}deg)`);
    minsHand.css('transform', `rotate(${minsToDegrees}deg)`);
    hoursHand.css('transform', `rotate(${hoursToDegrees}deg)`);
}
