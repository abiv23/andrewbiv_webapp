$(document).ready(function() {
  $(".draft-player").hide();
  $(".draft-player").click(draftPlayer);
  $(".save-draft").click(saveDraft);
  loadDraft();
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

function saveDraft() {
  const draft = [];

  const collection = $('.draft-collection');

  collection.children('li').each(function (team) {
    draft.push($(this).html());
  });

  localStorage.setItem('draft', draft);
}

function loadDraft() {
  const draftStorage = localStorage.getItem('draft');

  if (!draftStorage) { return }

  const draft = draftStorage.split(',');

  const draftTeam = draft.find(function (team) {
    return team.indexOf('-') === -1;
  });

  const collection = $('.draft-collection');

  collection.children('li').each(function () {
    $(this).removeClass("active");
  });

  collection.children('li').each(function (index) {
    if ($(this).html() === draftTeam) {
      $(this).addClass("active");
    }
  });

  collection.children('li').each(function (index) {
    draft.push($(this).html(draft[index]));
  });
}

function nextPick(){
  const nextLi = $(".active").next();
  $(".active").removeClass("active");
  nextLi.addClass("active");
}
