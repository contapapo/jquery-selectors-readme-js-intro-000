// declare your functions here...
function paragraphSelector() {
   return $('p');
}

$(document).ready(function () {
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
})
