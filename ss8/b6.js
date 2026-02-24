const players = [
    "Messi - Forward - 25 - 15 - 34",
    "Ronaldo - Forward - 30 - 10 - 38",
    "Neymar - Forward - 18 - 20 - 32",
    "De Bruyne - Midfielder - 8 - 25 - 35",
    "Kante - Midfielder - 2 - 5 - 36",
    "Van Dijk - Defender - 5 - 3 - 33",
    "Alisson - Goalkeeper - 0 - 1 - 37",
];

function reportByPosition(players) {
    const filteredPlayers = players
        .map(player => {
            const [name, position, goals, assists, matches] = player.split(" - ");
            return {
                name,
                position,
                goals: parseInt(goals),
                assists: parseInt(assists),
                matches: parseInt(matches)
            };
        })
        .filter(player => player.goals >= 1);

    const positions = ["Forward", "Midfielder", "Defender", "Goalkeeper"];
    let totalGoals = 0;

    console.log("BÁO CÁO HIỆU SUẤT THEO VỊ TRÍ\n");

    positions.forEach(position => {
        const playersByPosition = filteredPlayers.filter(player => player.position === position);

        const numberOfPlayers = playersByPosition.length;
        const totalGoalsInGroup = playersByPosition.reduce((sum, player) => sum + player.goals, 0);
        const totalAssistsInGroup = playersByPosition.reduce((sum, player) => sum + player.assists, 0);
        const totalMatchesInGroup = playersByPosition.reduce((sum, player) => sum + player.matches, 0);
        const averagePerformancePerMatch = ((totalGoalsInGroup + totalAssistsInGroup) / totalMatchesInGroup).toFixed(2);

        if (numberOfPlayers > 0) {
            console.log(`${position}:\n`);
            console.log(`- Số cầu thủ: ${numberOfPlayers}`);
            console.log(`- Tổng bàn thắng: ${totalGoalsInGroup}`);
            console.log(`- Tổng kiến tạo: ${totalAssistsInGroup}`);
            console.log(`- Tổng số trận: ${totalMatchesInGroup}`);
            console.log(`- Trung bình hiệu suất/trận: ${averagePerformancePerMatch}\n`);

            totalGoals += totalGoalsInGroup;
        }
    });

    console.log("------------------------\n");
    console.log(`Tổng bàn thắng toàn đội: ${totalGoals}`);
}

reportByPosition(players);