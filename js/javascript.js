console.log('loaded main js');

$(document).ready(setup);

function setup() {
  console.log('Inside setup');
  show_clubs();
}

function blow_up(data) {
  console.log('Inside blow_up');
  console.log(data);

}