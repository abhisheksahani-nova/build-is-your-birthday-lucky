var birthDate = document.querySelector("#birth-date");
var luckyNumber = document.querySelector("#lucky-number");
var button = document.querySelector("#check-button");
var message = document.querySelector("#output-message");

button.addEventListener("click", () => {
  message.style.display = "none";
  console.log(birthDate.value);
  var date = birthDate.value;
  var luckyNo = luckyNumber.value;

  if (date && luckyNo) {

    var sumOFDate = calculateBirthDateSum(date);
    checkLuckyNumber(sumOFDate, luckyNo);

  }else {
    showMessage("Enter value for both input fields");
  }
});

function showMessage(outputMessage) {

  message.style.display = "block";
  message.innerText = outputMessage;
}

function calculateBirthDateSum(date){
  date = date.replaceAll("-","");
  console.log(date);
  var sum = 0;

  for (var digit of date) {
    sum = sum + Number(digit);
  }
  return sum;
}

function checkLuckyNumber(sumOFDate,luckyNo) {

  if (sumOFDate % luckyNo === 0) {
    showMessage(`${luckyNo} is a lucky number!! 🥳 🥳 🥳`);
  }else {
    showMessage(`${luckyNo} is not that lucky 😕`);
  }
}
