import $ from 'jquery';
import _ from 'lodash';

// Counter to track button clicks
let count = 0;

// Function to update counter
function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

// Add elements to the page
$('body').append('<p>ALX Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - ALX</p>');

// Attach debounced click handler to button
$('button').on('click', _.debounce(updateCounter, 300));
