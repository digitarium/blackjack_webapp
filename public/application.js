$(document).ready(function() {
    playerHits();
    playerStays();
    dealerHits();
});

function playerHits() {
    $(document).on('click', 'form#hit input', function() {
        $.ajax({
            type: 'POST',
            url: '/game/player/hit'
        }).done(function(msg) {
            $('div#game').replaceWith(msg);
        });

        return false;
    });
}

function playerStays() {
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

function dealerHits() {
    $(document).on('click', 'form#dealer_hit input', function() {
        $.ajax({
            type: 'POST',
            url: '/game/dealer/hit'
        }).done(function(msg) {
            $('#game').replaceWith(msg);
        });

        return false;
    });
}
