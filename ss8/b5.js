const players = [
    "Messi - Forward - 30 - 10",
    "Ronaldo - Forward - 25 - 15",
    "Neymar - Forward - 20 - 18",
    "De Bruyne - Midfielder - 10 - 23",
    "Kante - Midfielder - 5 - 7",
    "Van Dijk - Defender - 1 - 7",
    "Alisson - Goalkeeper - 0 - 0",
];

function reportTopPerformers(minPerformance, players) {
    const filteredPlayers = players
        .map(player => {
            const [name, position, goals, assists] = player.split(" - ");
            const performance = parseInt(goals) + parseInt(assists); 
            return { name, performance }; 
        })
        .filter(player => player.performance >= minPerformance);

    filteredPlayers.forEach(player => {
        console.log(`${player.name}: ${player.performance}`);
    });

    const totalPerformance = filteredPlayers
        .reduce((total, player) => total + player.performance, 0);

    console.log(`Tổng hiệu suất: ${totalPerformance}`);

    return totalPerformance;
}

console.log(reportTopPerformers(30, players));  
console.log(reportTopPerformers(20, players));  
console.log(reportTopPerformers(50, players));  