$(document).ready(function() {
    $('#hit input').click(function() {
        $.ajax({
            type: 'POST',
            url: '/game/player/hit'
        }).done(function(msg) {
            $('#game').replaceWith(msg);
        });
      return false;
    });

});
