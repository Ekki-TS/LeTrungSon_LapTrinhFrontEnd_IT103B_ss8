let playerIds = ["P001", "P002", "P003", "P004", "P005"];

let playerNames = [
  "Nguyễn Văn A",
  "Trần Thị B",
  "Lê Văn C",
  "Phạm Văn D",
  "Hoàng Thị E"
];

let playerJerseyNumbers = [10, 7, 8, 9, 11];

function printTeamRoster() {
  console.log(`\nDanh sách đội bóng (${playerIds.length} cầu thủ):`);
  for (let i = 0; i < playerIds.length; i++) {
    console.log(
      `${i + 1}. ${playerIds[i]} - ${playerNames[i]} - Số áo: ${playerJerseyNumbers[i]}`
    );
  }
}

function updatePlayerNameAndJersey(playerId, newName, newJerseyNumber) {
  let index = playerIds.indexOf(playerId);

  if (index !== -1) {
    playerNames[index] = newName;
    playerJerseyNumbers[index] = newJerseyNumber;
    return true;
  }

  return false;
}

printTeamRoster();

let searchId = prompt("Nhập mã cầu thủ muốn cập nhật (ví dụ: P001):");

let index = playerIds.indexOf(searchId);

if (index !== -1) {
  let newName = prompt("Nhập tên mới cho cầu thủ:");

  let newJerseyNumber = parseInt(
    prompt("Nhập số áo mới (1–99):")
  );

  while (
    isNaN(newJerseyNumber) ||
    newJerseyNumber < 1 ||
    newJerseyNumber > 99
  ) {
    newJerseyNumber = parseInt(
      prompt("Vui lòng nhập số áo hợp lệ (1–99):")
    );
  }

  let updated = updatePlayerNameAndJersey(
    searchId,
    newName,
    newJerseyNumber
  );

  if (updated) {
    console.log("\nCập nhật thành công!");
    printTeamRoster();
  }
} else {
  console.log("Không tìm thấy cầu thủ với mã này!");
}