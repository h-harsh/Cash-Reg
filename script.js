var noOfNotes = document.querySelectorAll(".table-data");
var currencyArray = ['2000', '500', '100', '20', '10', '5', '1'];
var calcBtn = document.querySelector("#calculate-btn");
var billAmount = document.getElementById("bill-amount");
var cashCollected = document.getElementById("cash-collected");
var finalOutput = document.querySelector("#final-output");

var billAmountValue;
var cashCollectedValue;
var netReturnAmount
billAmount.addEventListener("change", function () {
  billAmountValue = billAmount.value;
  console.log(billAmountValue)
})
cashCollected.addEventListener("change", function () {
  cashCollectedValue = cashCollected.value
  console.log(cashCollectedValue)
})



calcBtn.addEventListener("click", mains);

function mains() {
  var netReturnAmount = cashCollectedValue - billAmountValue;
  console.log(billAmountValue, cashCollectedValue, netReturnAmount)
  if (netReturnAmount < 0) {
    finalOutput.innerHTML = "You are paying less than your billed amount"
  } else if (cashCollectedValue === billAmountValue) {
    finalOutput.innerHTML = "Thankyou, no amount left"
  }
  else if (netReturnAmount > 0) {
    // var netReturnAmount = cashCollectedValue - billAmountValue;
    // console.log(billAmountValue, cashCollectedValue, netReturnAmount)
    for (i = 0; i <= currencyArray.length; i++) {
      while (netReturnAmount >= currencyArray[i]) {
        var notes = Math.floor(netReturnAmount / currencyArray[i])
        console.log(`${notes} notes of ${currencyArray[i]}`)
        noOfNotes[i].innerText = `${notes}`
        netReturnAmount = netReturnAmount % currencyArray[i];
      }
    }
    finalOutput.innerHTML = `you get ₹ ${cashCollectedValue - billAmountValue}`
  } else {
    finalOutput.innerHTML = "main kya karuuuu"
    console.log(billAmountValue, cashCollectedValue, netReturnAmount)
  }

}

var resetbtn = document.getElementById("reset-button")
resetbtn.addEventListener("click", function () {
  billAmount.value = ''
  cashCollected.value = ''
  finalOutput.innerHTML = ""

  for (i = 0; i < noOfNotes.length; i++) {
    noOfNotes[i].innerHTML = " "
  }
  console.clear();
})