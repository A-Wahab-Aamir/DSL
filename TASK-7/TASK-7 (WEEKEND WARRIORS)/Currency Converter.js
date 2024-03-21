// Cached DOM elements
const amountElement = document.getElementById("amount");
const fromElement = document.getElementById("from");
const toElement = document.getElementById("to");
const resultElement = document.getElementById("result");

// Rates object
const rates = {
  USD: { EUR: 0.85, GBP: 0.73, JPY: 111.20, CAD: 1.27 },
  EUR: { USD: 1.18, GBP: 0.86, JPY: 130.89, CAD: 1.48 },
  GBP: { USD: 1.38, EUR: 1.16, JPY: 152.22, CAD: 1.73 },
  JPY: { USD: 0.009, EUR: 0.008, GBP: 0.007, CAD: 0.011 },
  CAD: { USD: 0.79, EUR: 0.68, GBP: 0.58, JPY: 88.11 }
};

// Event listeners
document.getElementById("converter-form").addEventListener("submit", function(event) {
  event.preventDefault();
  convert();
});

document.getElementById("clear").addEventListener("click", clearFields);
fromElement.addEventListener("change", convert);
toElement.addEventListener("change", convert);

// Conversion function
function convert() {
  const amount = parseFloat(amountElement.value);
  const fromCurrency = fromElement.value;
  const toCurrency = toElement.value;
  const regexForText = /[a-zA-z]/;
  const regexForNumber = /\d/;

  if(regexForText.test(amount)){
    resultElement.innerText = "Please enter a Number.";
    return;
  }

  if (isNaN(amount)) {
    resultElement.innerText = "Please enter a valid amount.";
    return;
  }

  if (!(fromCurrency in rates) || !(toCurrency in rates[fromCurrency])) {
    resultElement.innerText = "Currency conversion not supported.";
    return;
  }

  const convertedAmount = amount * rates[fromCurrency][toCurrency];
  resultElement.innerText = `${amount}${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}

// Clear fields function
function clearFields() {
  amountElement.value = "";
  fromElement.selectedIndex = 0;
  toElement.selectedIndex = 0;
  resultElement.innerText = "";
}
