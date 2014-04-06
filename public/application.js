$(document).ready(function() {
    $(document).on('click', '#hit input', function() {
        $.ajax({
            type: 'POST',
            url: '/game/player/hit'
        }).done(function(msg) {
            $('#game').replaceWith(msg);
        });
      return false;
    });

 });
