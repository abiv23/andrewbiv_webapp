/*
Countdown Clock
*/

window.onload = function() {
  joshIsSuspended();
  doTime('dec,12,2014,20:37:00');
  setInterval(function(){joshIsBack()}, 3000);
}

function doTime(then) {

  now = new Date();
  then = new Date(then);

  difference = (now - then);

  days = Math.floor(difference / (60 * 60 * 1000 * 24) * 1);
  hours = Math.floor((difference % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000) * 1);
  mins = Math.floor(((difference % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) / (60 * 1000) * 1);
  secs = Math.floor((((difference % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000 * 1);

  document.getElementById('timer').firstChild.nodeValue =

    'IT HAS ONLY BEEN ' + days + ' DAYS ' + hours + ' HOURS ' + mins + ' MINUTES AND ' + secs + ' SECONDS ';

  clearTimeout(doTime.to);
  doTime.to = setTimeout(function() {
    doTime(then);
  }, 1000);
  document.body.style.backgroundColor = "#EB3300";
}

function joshIsBack(){
  $('.josh-is-suspended').hide();
  $('.josh-is-back').show();
}

function joshIsSuspended(){
  $('.josh-is-back').hide();
}
