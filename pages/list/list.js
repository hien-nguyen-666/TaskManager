// openForm1 = () = ()
// Hình như chỉ cho phép 1 dòng code

// Mở popup
function openForm1() {
  document.getElementById("myPopup1").style.display = "block";
  document.getElementById("myPopup2").style.display = "none";
  document.getElementById("myPopup3").style.display = "none";
  document.getElementById("myPopup4").style.display = "none";
}
function openForm2() {
  document.getElementById("myPopup1").style.display = "none";
  document.getElementById("myPopup2").style.display = "block";
  document.getElementById("myPopup3").style.display = "none";
  document.getElementById("myPopup4").style.display = "none";
}
function openForm3() {
  document.getElementById("myPopup1").style.display = "none";
  document.getElementById("myPopup2").style.display = "none";
  document.getElementById("myPopup3").style.display = "block";
  document.getElementById("myPopup4").style.display = "none";
}
function openForm4() {
  document.getElementById("myPopup1").style.display = "none";
  document.getElementById("myPopup2").style.display = "none";
  document.getElementById("myPopup3").style.display = "none";
  document.getElementById("myPopup4").style.display = "block";
}

// Đóng popup
function closeForm() {
  document.getElementById("myPopup1").style.display = "none";
  document.getElementById("myPopup2").style.display = "none";
  document.getElementById("myPopup3").style.display = "none";
  document.getElementById("myPopup4").style.display = "none";
}