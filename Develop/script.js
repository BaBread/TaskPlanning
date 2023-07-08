// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let nineAMEl = $('#hour-9')
let tenAMEl = $('#hour-10')
let elevenAMEl = $('#hour-11')
let twelvePMEl = $('#hour-12')
let onePMEl = $('#hour-13')
let twoPMEl = $('#hour-14')
let threePMEl = $('#hour-15')
let fourPMEl = $('#hour-16')
let fivePMEl = $('#hour-17')
let showDayEl = $('#currentDay')
let today = dayjs();
let saveBtn = $('.saveBtn')
showDayEl.text(today.format('YYYY-MM-DD hh:mm'))


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

$(document).ready(function () {
  
  saveBtn.on('click', function() {
    let textArea = $(this).siblings('.description');
    let textAreaValue = textArea.val();
    let textAreaValueString = JSON.stringify(textAreaValue);

    localStorage.setItem(textArea.parent().attr('id'),textAreaValueString);

  })



// TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


  
  $('.time-block').each(function() {
    let currentHour = dayjs().hour();
    let hour = parseInt($(this).attr('id').split('-')[1])
   
    if (hour < currentHour) {
      $(this).addClass('past');
      $(this).removeClass('present future');

    }

    else if (hour === currentHour) {
      $(this).addClass('present');
      $(this).removeClass('past future');

    }

    else {
      $(this).addClass('future');
      $(this).removeClass('past present');

    }



  })



  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

$('.description').each(function() {
  let storedText = localStorage.getItem($(this).parent().attr('id'))
  storedText = JSON.parse(storedText)
  $(this).text(storedText)




})



});