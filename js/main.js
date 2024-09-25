const btnDonate = document.getElementById("donate-btn");
const btnHistory = document.getElementById("history-btn");
const donateContainer = document.getElementById("donate-container");
const historyContainer = document.getElementById("history-container");

btnDonate.addEventListener("click", function (event) {
  event.preventDefault();
  historyContainer.classList.add("hidden");
  donateContainer.classList.remove("hidden");
  donateContainer.classList.add("visible");
  btnHistory.classList.remove("bg-btn_bg");
  btnDonate.classList.add("bg-btn_bg");
});

btnHistory.addEventListener("click", function (event) {
  event.preventDefault();
  historyContainer.classList.add("flex");
  historyContainer.classList.remove("hidden");
  donateContainer.classList.add("hidden");
  donateContainer.classList.remove("flex");
  btnHistory.classList.add("bg-btn_bg");
  btnDonate.classList.remove("bg-btn_bg");
});

// modal
const clsModal = document.getElementById("cls-modal");
const modal = document.getElementById("modal");
clsModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
});

let sum = 5500;
const mainBalance = document.getElementById("main-balance");

// common function
const handleDonation = (inputVal, val, title) => {
  let value = parseInt(val.innerHTML);
  let date = new Date();

  if (
    isNaN(inputVal) ||
    inputVal <= 0 ||
    sum <= 0 ||
    inputVal === "" ||
    inputVal > sum
  ) {
    alert("Invalid Donate Ammount");
  } else {
    sum -= inputVal;
    val.innerHTML = value += inputVal;
    mainBalance.innerText = sum;
    modal.classList.add("flex");
    modal.classList.remove("hidden");
    historyContainer.innerHTML += `
        <div class="flex flex-col justify-start items-start gap-3 border p-5 rounded w-[100%]">
            <h1 class="text-2xl font-semibold capitalize">${inputVal} Taka is  ${title.innerText}</h1>
            <p class="text-[gray] capitalize">${date}</p>
        </div>
        `;
  }
};
//  first box
const donateBtnOne = function () {
  let inputAmount1 = CommonFunction("donation-input-1");
  let title1 = CommonFunction("title-Text-1");
  const inputField1 = Number(CommonFunction("input-box-1").value);
  handleDonation(inputField1, inputAmount1, title1);
};
//  second box
const donateBtnTwo = function () {
  let inputAmount2 = CommonFunction("donation-input-2");
  let title2 = CommonFunction("title-Text-2");
  const inputField2 = Number(CommonFunction("input-box-2").value);
  handleDonation(inputField2, inputAmount2, title2);
};
//  third box
const donateBtnThree = function () {
  let inputAmount3 = CommonFunction("donation-input-3");
  let title3 = CommonFunction("title-Text-3");
  const inputField3 = Number(CommonFunction("input-box-3").value);
  handleDonation(inputField3, inputAmount3, title3);
};
