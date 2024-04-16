const seatSelected = document.querySelectorAll(".seat-btn");
let x = 0;
let y = 40;

for (const getSeats of seatSelected) {
  getSeats.addEventListener("click", function (clickSeat) {
    if (x <= 3) {
      x = x + 1;
      y = y - 1;
      totalTicketPrice(
        "total-price",
        document.getElementById("seat-per-pay").innerText
      );
      const selectedArea = clickSeat.target.innerText;
      const price = document.getElementById("seat-per-pay").innerText;
      const selectContainer = document.getElementById("selected-container");
      const div = document.createElement("div");
      const title1 = document.createElement("h4");

      title1.innerText = selectedArea;
      const title2 = document.createElement("h4");
      title2.innerText = "Economy";
      const title3 = document.createElement("h4");
      title3.innerText = price;

      div.appendChild(title1);
      div.appendChild(title2);
      div.appendChild(title3);

      div.className = "flex justify-between w-full text-left mb-4";
      selectContainer.appendChild(div);
      clickSeat.target.classList.add("text-white");
      clickSeat.target.classList.add("bg-[#1DD100]");
      clickSeat.target.classList.add("pointer-events-none");
    } else {
      alert("You cannot select more than four seats");
    }
    setElementValueById("seat-count", x);
    setElementValueById("seat-left", y);
    grandTotalPrice();

    const busSeat = parseInt(document.getElementById("seat-count").innerText);
    if (busSeat > 3) {
      document.getElementById("apply").removeAttribute("disabled");
    } else {
      document.getElementById("apply").setAttribute("disabled", true);
    }

    document
      .getElementById("number-phone")
      .addEventListener("keyup", function (event) {
        const text = event.target.value.toString().length;
        const button = document.getElementById("modal-btn");
        if (text > 0 && busSeat > 0) {
          button.removeAttribute("disabled");
        } else {
          button.setAttribute("disabled", true);
        }
      });
  });
}
function grandTotalPrice() {
  const totalPrice = document.getElementById("total-price").innerText;
  const convertedTotalPrice = parseInt(totalPrice);
  setElementValueById("grand-total", convertedTotalPrice);
}

const button = document.getElementById("apply");
button.addEventListener("click", function () {
  const inputCoupon = getInputValueById("coupon");
  if (inputCoupon === "NEW15") {
    const grandTotal = document.getElementById("total-price").innerText;
    const convertedTotalPrice = parseInt(grandTotal);
    const discount = convertedTotalPrice * 0.15;
    const GrandTotalPrice = convertedTotalPrice - discount;

    document.getElementById("discount").innerText = discount;
    setElementValueById("grand-total", GrandTotalPrice);
    document.getElementById("hidden").className = "hidden";
    document.getElementById("discount-prise").classList.remove("hidden");
  } else if (inputCoupon === "Couple 20") {
    const grandTotal = document.getElementById("total-price").innerText;
    const convertedTotalPrice = parseInt(grandTotal);
    const discount = convertedTotalPrice * 0.2;
    const GrandTotalPrice = convertedTotalPrice - discount;

    document.getElementById("discount").innerText = discount;
    setElementValueById("grand-total", GrandTotalPrice);
    document.getElementById("hidden").className = "hidden";
    document.getElementById("discount-prise").classList.remove("hidden");
  } else {
    alert("Invalid Coupon");
  }
});
