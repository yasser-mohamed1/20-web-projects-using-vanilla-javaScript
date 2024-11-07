const currencyElOne = document.getElementById("currency-one");
const amountElOne = document.getElementById("amount-one");
const currencyElTwo = document.getElementById("currency-two");
const amountElTwo = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

function calculate() {
  console.log("calculate");
  const currencyOne = currencyElOne.value;
  const currencyTwo = currencyElTwo.value;

  fetch(`https://exchangeratesapi.io/${currencyOne}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currencyTwo] / data.rate[currencyOne];
      rateEl.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;
      amountElTwo.value = (amountElOne.value * rate).toFixed(2);
    });
}

currencyElOne.addEventListener("change", calculate);
currencyElTwo.addEventListener("change", calculate);
amountElOne.addEventListener("input", calculate);
amountElTwo.addEventListener("input", calculate);

swap.addEventListener("click", () => {
  const temp = currencyElOne.value;
  currencyElOne.value = currencyElTwo.value;
  currencyElTwo.value = temp;
  calculate();
});

calculate();
