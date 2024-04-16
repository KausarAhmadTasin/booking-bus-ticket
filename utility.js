function setElementValueById(elementId, value) {
  document.getElementById(elementId).innerText = value;
}

function totalTicketPrice(id, value) {
  const totalPriceInput = document.getElementById(id).innerText;
  const totalPrice = parseInt(totalPriceInput);
  const valueInput = parseInt(value);
  const sum = totalPrice + valueInput;
  setElementValueById(id, sum);
}

function getInputValueById(elementId) {
  const inputValue = document.getElementById(elementId);
  const input = inputValue.value;
  return input;
}
