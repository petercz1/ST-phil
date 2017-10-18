console.log('loaded');

$(document).ready(setup);

function setup() {
  console.log('Inside setup');
  show_clubs();
}

function show_clubs() {
  console.log('Inside show_clubs');
  $.get('backend/clubs/show_clubs.php').done(display_clubs).fail(blow_up);
}

function display_clubs(data) {
  console.log('Inside display_clubs');
  console.log(data); // hopefully a list of clubs!
  // now do jQuery/js to show clubs on the page
  $('#list_clubs').append(data);
}

function blow_up(data) {
  console.log('Inside blow_up');
  console.log(data);

}