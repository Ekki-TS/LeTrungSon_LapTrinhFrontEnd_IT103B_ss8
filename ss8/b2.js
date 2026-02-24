const players = [
    "Messi",
    "Ronaldo",
    "Neymar",
    "De Bruyne",
    "Kante",
    "Van Dijk",
    "Alisson",
];

function getUpperNames(playerNames) {
    return playerNames.map(player => player.toUpperCase());
}

console.log(getUpperNames(players));