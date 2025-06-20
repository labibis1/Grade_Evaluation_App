let title = document.querySelector(".title");
let result = document.querySelector(".user_input");
let buttonSubmit = document.querySelector(".btn_submit");
let resultOut = document.querySelector(".result_output");

buttonSubmit.addEventListener("click", function () {
  if (result >= 80) {
    resultOut.innerHTML = "A+";
  } else if (result > 100) {
    resultOut.innerHTML = "A+";
  } else if (result.value >= 80) {
    resultOut.innerHTML = "A+";
  } else if (result.value >= 70) {
    resultOut.innerHTML = "A";
  } else if (result.value >= 60) {
    resultOut.innerHTML = "A-";
  } else if (result.value >= 50) {
    resultOut.innerHTML = "B";
  } else if (result.value >= 40) {
    resultOut.innerHTML = "C";
  } else if (result.value >= 33) {
    resultOut.innerHTML = "Pass Korso";
  } else if ((result.value = " ")) {
    resultOut.innerHTML = "Valid Input Value Required";
  } else {
    resultOut.innerHTML = "Fail Korso ";
  }
});
