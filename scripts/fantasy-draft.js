$(document).ready(function() {
  $(".draft-player").hide();
  $(".player").hover(playerSelected, playerDeselected);

})

function playerSelected(event){
  console.log(event.target.innerHTML);
  // $(".player").removeClass('draft-player');
  // $(".player").removeClass('select-player');
  // $(this).removeClass('active');
  $(this).addClass('select-player');
  $(this).find(".draft-player").show();
  // $(this).off('click', playerSelected);
}

function playerDeselected(event){
  $(this).removeClass('select-player');
    $(this).find(".draft-player").hide();
}
