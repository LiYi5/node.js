$(document).ready(function() {

  $('form').on('submit', function(event) {
    event.preventDefault();
    let item = $('form input');
    let todo = { item: item.val().trim() };

    $.ajax({
      type: 'POST',
      url: '/todo',
      data: todo,
      success: function(data) {
        //do something with the data via front-end framework
        location.reload();
      }
    });

    return false;

  });

  $('li').on('click', function() {
    let item = $(this).text().trim().replace(/ /g, "-");
    $.ajax({
      type: 'DELETE',
      url: '/todo/' + item,
      success: function(data) {
        //do something with the data via front-end framework
        location.reload();
      }
    });
  });

});