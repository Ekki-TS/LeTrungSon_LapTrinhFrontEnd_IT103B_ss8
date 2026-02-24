let playerIds = [];
let playerPositions = [];

const positions = ["Thủ môn", "Hậu vệ", "Tiền vệ", "Tiền đạo"];

let n = parseInt(prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?"));

while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Vui lòng nhập số nguyên dương hợp lệ:"));
}

for (let i = 0; i < n; i++) {
  console.log(`Nhập cầu thủ ${i + 1}:`);

  let id;
  while (true) {
    id = prompt("Mã cầu thủ:");
    if (!playerIds.includes(id)) {
      break;
    } else {
      alert("Mã cầu thủ đã tồn tại! Vui lòng nhập lại.");
    }
  }

  let posChoice = parseInt(
    prompt("Vị trí (1: Thủ môn 2: Hậu vệ 3: Tiền vệ 4: Tiền đạo):")
  );

  while (isNaN(posChoice) || posChoice < 1 || posChoice > 4) {
    posChoice = parseInt(prompt("Nhập lại vị trí hợp lệ (1-4):"));
  }

  playerIds.push(id);
  playerPositions.push(positions[posChoice - 1]);
}

function printTeamRoster() {
  console.log(`\nĐội bóng hiện tại (${playerIds.length} cầu thủ):`);
  for (let i = 0; i < playerIds.length; i++) {
    console.log(`${i + 1}. ${playerIds[i]} - ${playerPositions[i]}`);
  }
}

function findPlayersByPosition(position) {
  let indexes = [];
  for (let i = 0; i < playerPositions.length; i++) {
    if (playerPositions[i] === position) {
      indexes.push(i);
    }
  }
  return indexes;
}

printTeamRoster();

let searchChoice = parseInt(
  prompt("Nhập vị trí cầu thủ muốn đếm (1: Thủ môn 2: Hậu vệ 3: Tiền vệ 4: Tiền đạo):")
);

while (isNaN(searchChoice) || searchChoice < 1 || searchChoice > 4) {
  searchChoice = parseInt(prompt("Nhập lại vị trí hợp lệ (1-4):"));
}

let searchPosition = positions[searchChoice - 1];

let result = findPlayersByPosition(searchPosition);

console.log(`\nSố cầu thủ ở vị trí ${searchPosition}: ${result.length}`);
console.log(`Các chỉ số cầu thủ ở vị trí ${searchPosition}: ${result.join(", ")}`);