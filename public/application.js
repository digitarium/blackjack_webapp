$(document).ready(function() {
    // playerHits();
    // playerStays();
});

function player_hits() {
    $(document).on('click', '#hit input', function() {
        $.ajax({
            type: 'POST',
            url: '/game/player/hit'
        }).done(function(msg) {
            $('#game').replaceWith(msg);
        });

        return false;
    });
}

function player_stays() {
    $(document).on('click', '#stay input', function() {
        $.ajax({
            type: 'POST',
            url: '/game/player/stay'
        }).done(function(msg) {
            $('#game').replaceWith(msg);
        });

        return false;
    });
}
