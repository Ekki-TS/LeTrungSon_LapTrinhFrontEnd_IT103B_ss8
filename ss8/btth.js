const squad = [
    ["Nguyen Van A", 10, "FW"],
    ["Tran Van B", 5, "MF"],
    ["Le Van C", 2, "DF"],
    ["Pham Van D", 12, "FW"],
    ["Hoang Van E", 0, "GK"],
    ["Dang Van F", 7, "MF"]
];

function displayMenu() {
    const choice = parseInt(prompt(`--- QUẢN LÝ ĐỘI BÓNG ---
1. Xem danh sách
2. Tìm kiếm (Find)
3. Lọc vị trí (Filter)
4. Tổng bàn thắng (Reduce)
5. Kiểm tra hiệu suất (Some/Every)
0. Thoát`));
    
    switch(choice) {
        case 1:
            viewPlayers();
            break;
        case 2:
            searchPlayer();
            break;
        case 3:
            filterByPosition();
            break;
        case 4:
            totalGoals();
            break;
        case 5:
            checkPerformance();
            break;
        case 0:
            alert("Hẹn gặp lại!");
            return;
        default:
            alert("Chọn không hợp lệ!");
            break;
    }

    displayMenu();  
}

function viewPlayers() {
    squad.map(player => {
        alert(`${player[0]} (${player[2]}): ${player[1]} bàn thắng`);
    });
}

function searchPlayer() {
    const name = prompt("Nhập tên cầu thủ cần tìm:");
    const player = squad.find(p => p[0].toLowerCase() === name.toLowerCase());

    if (player) {
        alert(`${player[0]} (${player[2]}): ${player[1]} bàn thắng`);
    } else {
        alert("Cầu thủ không tìm thấy.");
    }
}

function filterByPosition() {
    const position = prompt("Nhập vị trí muốn lọc (FW/MF/DF/GK):");
    const filteredPlayers = squad.filter(player => player[2] === position);

    if (filteredPlayers.length > 0) {
        let result = "=> KẾT QUẢ LỌC:\n";
        filteredPlayers.forEach(player => {
            result += `- ${player[0]} (${player[1]} bàn)\n`;
        });
        alert(result);
    } else {
        alert("Không có cầu thủ nào ở vị trí này.");
    }
}

function totalGoals() {
    const total = squad.reduce((sum, player) => sum + player[1], 0);
    alert(`Tổng số bàn thắng toàn đội: ${total} bàn`);
}

function checkPerformance() {
    const hasNoGoals = squad.some(player => player[1] === 0);
    const allScored = squad.every(player => player[1] > 0);

    if (hasNoGoals) {
        alert("Có cầu thủ chưa ghi bàn.");
    } else {
        alert("Tất cả cầu thủ đều đã ghi bàn.");
    }

    if (allScored) {
        alert("Tất cả cầu thủ đều đã ghi bàn.");
    } else {
        alert("Không phải tất cả cầu thủ đều đã ghi bàn.");
    }
}

displayMenu();