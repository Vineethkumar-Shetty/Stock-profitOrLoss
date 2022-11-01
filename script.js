var input = document.querySelectorAll("input");
var initial = document.querySelector(".initial");
var quantity = document.querySelector(".quantity");
var current = document.querySelector(".current");
var btn = document.querySelector("button");
var output = document.querySelector(".result");
var resetbtn = document.querySelector(".reset");


function showMsg(msg,color) {
  output.innerText = msg;
  output.style.color = color;
}
function calculatePL(IP, quant, curr) {
  if (curr > IP) {
    //profit
    var profit = (curr - IP) * quant;
    var percentage = (profit / (IP * quant)) * 100;
    showMsg(
      `You have done your reserach.\nPROFIT = ${profit} \nPROFIT PERCENTAGE= ${percentage.toFixed(
        2
      )}%`,"#4cbb17"
    );
  } else if (curr === IP) {
    //no profit no loss
    showMsg("No pain no gain no gain no pain","yellow");
  } else {
    //loss
    var loss = (IP - curr) * quant;
    var lossPercentage = (loss / (IP * quant)) * 100;
    showMsg(
      `Bhai!! Kya kar rahe ho... \nLOSS = ${loss} \nLOSS PERCENTAGE = ${lossPercentage.toFixed(
        2
      )}%`,"red"
    );
  }
}

btn.addEventListener("click", function () {
  var IP = Number(initial.value);
  var quant = Number(quantity.value);
  var curr = Number(current.value);
  if (initial.value == "" || quantity.value == "" || current.value == "") {
    showMsg("Please enter a valid number");
  } else if (IP <= 0 || quant <= 0 || curr <= 0) {
    showMsg("Please enter a valid number");
  } else {
    calculatePL(IP, quant, curr);
  }
});
resetbtn.addEventListener("click", function () {
  window.location.reload();
});
