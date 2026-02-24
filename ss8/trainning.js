const squad = [

    ["Nguyen Van A", 10, "FW"],

    ["Tran Van B", 5, "MF"],

    ["Le Van C", 2, "DF"],

    ["Pham Van D", 12, "FW"],

    ["Hoang Van E", 0, "GK"],

    ["Dang Van F", 7, "MF"]
];

let choose;
do {
    choose = +prompt(` Nhập các lựa chọn: 
        1. Xem danh sách đội bóng
        2. Tìm kiếm cầu thủ
        3. Lọc vị trí
        4. Tính tổng bàn thắng
        5. Kiểm tra hiệu suất
        `);
        switch (choose) {
            case 0:
                console.log("Thoát chương trình");
                break;
            case 1:
                displayPLayer();
                break;
            case 2: 
                searchPlayer();
                break;
            case 3:
                filterByIndex();
                break;
            default: 
                console.log("Lựa chọn không hợp lệ");
        }
} while (choose != 0)

function displayPLayer(){
    squad.forEach((value,index,arr)=>{
        console.log(`Ten: ${value[0]} vi tri: ${value[1]} ban thang: ${value[2]} `);
    });
}

function searchPlayer(){
    let name = prompt("moi nhap ten cau thu");

    let result = squad.find((value) => {
        return value[0].toLowerCase() == name.toLowerCase();
    });
    if(result) {
        console.log("thong tin cau thu ", result) ; 
    } else
        console.log("khong tim thay cau thu");
}

function filterByIndex(){
    let index = prompt("moi nhap vi tri can loc: ");
    let result = squad.filter((value) =>{
        return value[2] == index;
    });
    console.log("result", result);
}