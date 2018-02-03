$(document).ready(function() {
  $(".draft-player").hide();
  $(".player").hover(playerSelected, playerDeselected);
})

function playerSelected(event){
  console.log(event.target.innerHTML);
  $(this).addClass('select-player');
  $(this).find(".draft-player").show();
  $(this).click(draftPlayer);
}

function playerDeselected(event){
  $(this).removeClass("select-player");
  $(this).find(".draft-player").hide();
}

function draftPlayer(event){
  event.preventDefault();
  const playerCard = event.currentTarget;
  playerCard.remove();
}
