function show_clubs() {
  console.log('Inside show_clubs');
  $.get('backend/clubs/show_clubs.php').done(display_clubs).fail(blow_up);
}

function display_clubs(data) {
  console.log('Inside display_clubs');
  data = JSON.parse(data);
  console.log(data);

  $('#list_clubs').append(data); // use jQuery to append clubs to div#list_clubs
  // now display it!!!!
  for (var counter = 0; counter < data.length; counter++) {

    var tr = $('<tr>');

    var clubs = data[counter].clubs_id;
    var td = $('<td>');
    td.text(clubs);
    tr.append(td);

    var nationality = data[counter].nationality_id;
    var td = $('<td>');
    td.text(nationality);
    tr.append(td);

    // edit button
    var td = $('<td>'); // jQuery creates a <td> object
    var button = $('<button>'); // jQuery creates a <button> object
    button.addClass('btn btn-success edit'); // add classes to <button>
    button.text('edit'); // sets button text to 'edit'
    var clubs_id = data[counter].clubs_id; // grab clubs_id from json
    button.attr('id', clubs_id); // adds unique id to <button>
    td.append(button); // adds button to <td>
    tr.append(td); // adds <td> to <tr>

    // delete button
    var td = $('<td>'); // jQuery creates a <td> object
    var button = $('<button>'); // jQuery creates a <button> object
    button.addClass('btn btn-danger delete'); // add classes to <button>
    button.text('delete'); // sets button text to 'delete'
    var clubs_id = data[counter].clubs_id; // grab clubs_id from json
    button.attr('id', clubs_id); // adds unique id to <button>
    td.append(button); // adds button to <td>
    tr.append(td); // adds <td> to <tr>

    $('#list_clubs tbody').append(tr); // adds finished <tr> to <tbody>
  }

  $('.edit').click(do_edit);
  $('.delete').click(do_delete);
} // end of display_clubs() function!

function do_edit() {
  console.log('Inside do_edit');
  console.log($(this).attr('id'));
  //example code to talk to backend
  // var edit_team = {
  //   team: $(this).attr('id'),
  //   some_other_value: another_var
  // }
  //$.get('backend/teams/edit_team.php', edit_team).done(team_edited).fail(blow_up);
}

function do_delete() {
  console.log('Inside do_delete');
  console.log($(this).attr('id'));
}