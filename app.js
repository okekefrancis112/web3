const fullName = document.querySelector("#full-name"),
  tierOne = document.querySelector("#tier-1"),
  tierTwo = document.querySelector("#tier-2"),
  tierThree = document.querySelector("#tier-3"),
  tBody = document.querySelector("#t-body"),
  submit = document.querySelector("#submit"),
  totalAmount = document.querySelector("#total-amount");

const updateTable = (tBody, valOne, valTwo, valThree, valFour, valFive) => {
  const tRows = document.createElement("tr");
  const tDataOne = document.createElement("td");
  const tDataTwo = document.createElement("td");
  const tDataThree = document.createElement("td");
  const tDataFour = document.createElement("td");
  const tDataFive = document.createElement("td");

  tDataOne.textContent = valOne;
  tDataTwo.textContent = valTwo;
  tDataThree.textContent = valThree;
  tDataFour.textContent = valFour;
  tDataFive.textContent = valFive;

  tDataFive.setAttribute("data-amount", "amount");

  tRows.append(tDataOne, tDataTwo, tDataThree, tDataFour, tDataFive);
  tBody.appendChild(tRows);
};

submit.onclick = (e) => {
  e.preventDefault();
  let tierValue;
  let tierOption;
  let tierInterest;
  let amount;

  if (tierOne.checked) {
    tierOption = tierOne.dataset.tier;
    tierValue = tierOne.value;
    tierInterest = 7 + "%";
    amount = (1.07 * tierValue).toFixed(2);
  }
  if (tierTwo.checked) {
    tierOption = tierTwo.dataset.tier;
    tierValue = tierTwo.value;
    tierInterest = 12 + "%";
    amount = (1.12 * tierValue).toFixed(2);
  }
  if (tierThree.checked) {
    tierOption = tierThree.dataset.tier;
    tierValue = tierThree.value;
    tierInterest = 25 + "%";
    amount = (1.25 * tierValue).toFixed(2);
  }

  updateTable(
    tBody,
    fullName.value,
    tierOption,
    tierInterest,
    tierValue,
    amount
  );

  const allAmounts = document.querySelectorAll("[data-amount]");

  let allVal = 0;
  allAmounts.forEach((val) => {
    allVal += parseInt(val.textContent);
  });

  totalAmount.textContent = allVal;
};