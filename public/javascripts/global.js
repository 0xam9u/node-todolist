$(document).ready(function() {
});

$('a.linkdeletetodo').click(function(event) {
  $target = $(event.target)
  event.preventDefault();
  $.ajax({
    type: 'DELETE',
    url: '/todos/delete/' + $(this).attr('rel'),
    success: function(response) {
      $target.parent().remove();
    },
    error: function(error) {
      alert('Error');
    }
  });
});
