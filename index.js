function showReaction() {
    var anime = document.getElementById('animeInput').value.trim();

    if (anime !== '') {
        var reaction = getReaction(anime);
        alert('Your favorite anime is ' + anime + '! Reaction: ' + reaction);
    } else {
        alert('Please enter your favorite anime!');
    }
}

function getReaction(anime) {
    switch (anime.toLowerCase()) {
        case 'naruto':
            return 'Believe it!';
        case 'one piece':
            return 'I am going to be the Pirate King!';
        case 'attack on titan':
            return 'Erwin Smith: Dedicate your hearts!';
        case 'my hero academia':
            return 'Plus Ultra!';
        case 'hunter X hunter':
            return 'May you find the Kilua to your Gon';
        default:
            return 'Anime is Amaizing!';
    }
}
