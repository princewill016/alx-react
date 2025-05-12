import $ from 'jquery';
import _ from 'lodash';
import './body.css';

// Counter to track button clicks
let count = 0;

// Function to update counter
function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

// Add elements to the page
$('body').append('<div class="container"></div>');
$('.container').append('<p>Dashboard data for the students</p>');
$('.container').append('<button>Click here to get started</button>');
$('.container').append('<p id="count"></p>');

// Attach debounced click handler to button
$('button').on('click', _.debounce(updateCounter, 300));
