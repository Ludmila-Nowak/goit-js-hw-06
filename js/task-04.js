const btnDecrEl = document.querySelector('button[data-action = "decrement"]');
const btnIncrEl = document.querySelector('button[data-action = "increment"]');
const spanValueEl = document.querySelector("#value");

btnDecrEl.addEventListener("click", onBtnClickDecr);
btnIncrEl.addEventListener("click", onBtnClickIncr);

let counterValue = 0;

function onBtnClickDecr() {
  counterValue += Number(btnDecrEl.textContent);
  spanValueEl.textContent = counterValue;
}

function onBtnClickIncr() {
  counterValue += Number(btnIncrEl.textContent);
  spanValueEl.textContent = counterValue;
}
