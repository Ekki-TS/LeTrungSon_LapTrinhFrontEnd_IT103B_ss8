let players = [];

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
    let isDuplicate = false;

    for (let j = 0; j < players.length; j++) {
      let parts = players[j].split("-");
      if (parts[0] === id) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate && id.trim() !== "") {
      break;
    } else {
      alert("Mã cầu thủ đã tồn tại hoặc không hợp lệ! Nhập lại.");
    }
  }

  let name = prompt("Tên cầu thủ:");
  while (!name || name.trim() === "") {
    name = prompt("Tên không được để trống. Nhập lại:");
  }

  let posChoice = parseInt(
    prompt("Vị trí (1: Thủ môn 2: Hậu vệ 3: Tiền vệ 4: Tiền đạo):")
  );

  while (isNaN(posChoice) || posChoice < 1 || posChoice > 4) {
    posChoice = parseInt(prompt("Nhập lại vị trí hợp lệ (1-4):"));
  }

  let position = positions[posChoice - 1];

  players.push(`${id}-${name}-${position}`);
}

function printTeamRoster() {
  console.log(`\nDanh sách đội bóng (${players.length} cầu thủ):`);

  for (let i = 0; i < players.length; i++) {
    let parts = players[i].split("-");
    console.log(
      `${i + 1}. Mã: ${parts[0]} | Tên: ${parts[1]} | Vị trí: ${parts[2]}`
    );
  }
}

function pushPlayer(id, name, position) {
  players.push(`${id}-${name}-${position}`);
}

printTeamRoster();