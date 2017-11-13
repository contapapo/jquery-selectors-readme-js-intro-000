// declare your functions here...
function paragraphSelector() {
   return $('p');
}

function lastImageSelector() {
  $('div img:last')
}

function ninjaBabySelector() {
  return $('#baby-ninja')
}

function divSelector() {
  $('.pics')
}

function firstListItem() {
  $('#pic-list li:first-child')
}

$(document).ready(function () {
  paragraphSelector();

  lastImageSelector()

  ninjaBabySelector()

  divSelector();

  firstListItem();

})
