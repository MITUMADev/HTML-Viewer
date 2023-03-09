$(function() {

  // Handle form submission

  $('#url-form').submit(function(event) {

    event.preventDefault();

    const url = $('#url-input').val();

    $.get(url, function(data) {

      $('#html-output').text(data);

    });

  });

});

