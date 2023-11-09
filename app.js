"use strict";
const bill = document.querySelector(".bill");
const listBtn1 = document.querySelector(".li-1");
const listBtn2 = document.querySelector(".li-2");
const listBtn3 = document.querySelector(".li-3");
const listBtn4 = document.querySelector(".li-4");
const listBtn5 = document.querySelector(".li-5");
const customBtn = document.querySelector(".custom");
const personsNum = document.querySelector(".person");
const calcPerPerson = document.querySelector(".per__person");
const calcTotalPerson = document.querySelector(".total");
const perPersonValue = document.querySelector(".per");
const totalValue = document.querySelector(".total__value");
const reset = document.querySelector(".btn");

let billAmount, numPeople, customPercent, totalTip, tipPerPerson, totalPerson;

const save = [];

//per person
function displayInput() {
  tipPerPerson = document.getElementById("billing").value;
  perPersonValue.innerText = `$${tipPerPerson}.00`;
  const person = perPersonValue.innerText;
}

//total persons
function display() {
  totalPerson = personsNum.value;
  totalValue.innerText = `$${totalPerson}.00`;
  save.splice(1, 0, totalPerson);

  if (listBtn1 && totalPerson > 0) {
    const one = parseInt(save[1]) * 1;
    totalValue.innerText = `$${Math.abs(billAmount / one)}`;
  } else {
    document.querySelector(".error").style.display = "block";
  }
}

//tips
listBtn1.addEventListener("click", () => {
  billAmount = parseInt(bill.value) * 0.05;
  perPersonValue.textContent = `$${billAmount}`;

  totalTip = save.push(parseInt(bill.value) * 0.05);
  totalValue.textContent = `$${billAmount}`;
});

listBtn2.addEventListener("click", () => {
  billAmount = parseInt(bill.value) * 0.1;
  perPersonValue.textContent = `$${billAmount}.00`;

  totalTip = save.push(parseInt(bill.value) * 0.1);
  totalValue.textContent = `$${billAmount}.00`;
});

listBtn3.addEventListener("click", () => {
  billAmount = parseInt(bill.value) * 0.15;
  perPersonValue.textContent = `$${billAmount}.00`;

  totalTip = save.push(parseInt(bill.value) * 0.15);
  totalValue.textContent = `$${billAmount}.00`;
});

listBtn4.addEventListener("click", () => {
  billAmount = parseInt(bill.value) * 0.25;
  perPersonValue.textContent = `$${billAmount}.00`;

  totalTip = save.push(parseInt(bill.value) * 0.25);
  totalValue.textContent = `$${billAmount}.00`;
});

listBtn5.addEventListener("click", () => {
  billAmount = parseInt(bill.value) * 0.5;
  perPersonValue.textContent = `$${billAmount}.00`;

  totalTip = save.push(parseInt(bill.value) * 0.5);
  totalValue.textContent = `$${billAmount}.00`;
});

reset.addEventListener("click", function (e) {
  e.preventDefault();
  perPersonValue.innerText = `$${0}.00`;
  totalValue.innerText = `$${0}.00`;
  bill.value = "";
  personsNum.value = "";
});
