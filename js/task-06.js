const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur() {
  const addTextLength = inputEl.value.trim().length;
  const dataTextLength = Number(inputEl.getAttribute("data-length"));

  if (addTextLength === dataTextLength) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
