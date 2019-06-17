var task = $('.task');
var btn = $('.submit-btn');
var container = $('.card-container');
var notes = $('.notes');
btn.on("click",toDo);

function toDo(){
  var task = $('.task').val();
  var notes = $('.notes').val();
  container.append(`<p class="toDo">${task}</p>`);
  $('.task').val("");//clears input field
  $('.notes').val("");// clears input field
}
