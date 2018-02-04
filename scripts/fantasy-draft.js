$(document).ready(function() {
  $(".draft-player").hide();
  $(".draft-player").click(draftPlayer);
  $(".player").hover(playerSelected, playerDeselected);
})

function playerHover(event){
  console.log(event);
  playerSelected(event);
}

function playerSelected(event){
  $(this).addClass('select-player');
  $(this).find(".draft-player").show();
}

function playerDeselected(event){
  $(this).removeClass("select-player");
  $(this).find(".draft-player").hide();
}

function draftPlayer(event){
  event.preventDefault();
  const parent = $(this).parent();
  const parentText = ' - ' + parent.text();
  const playerCard = event.currentTarget;
  parent.remove();
  $(".active").append(parentText);
  nextPick();
}

function nextPick(){
  const nextLi = $(".active").next();
  $(".active").removeClass("active");
  nextLi.addClass("active");
}
