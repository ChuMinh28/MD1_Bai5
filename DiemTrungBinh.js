let inputvatly = prompt("Nhap diem Vat ly");
let inputtoan = prompt("Nhap diem Toan");
let inputhoa = prompt("Nhap diem Hoa");
let vatLy = parseInt(inputvatly);
let toan = parseInt(inputtoan);
let hoa = parseInt(inputhoa);
let average = (vatLy+toan+hoa)/3;
// alert(average)
document.write("Diem trung binh cua ban la:", + average)
