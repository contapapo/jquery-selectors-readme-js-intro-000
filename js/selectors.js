// declare your functions here...
$(document).ready(function () {
  var paragraphSelector = function() {
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
