const foodType = document.querySelector("#food-type");
const amount = document.querySelector("#amount");
const price = document.querySelector("#price");
foodType.addEventListener("input", function () {
  price.value = foodType.value * amount.value;
});

amount.addEventListener("input", function () {
  price.value = foodType.value * amount.value;
});

const bio = document.querySelector("#check-bio");
const premium = document.querySelector("#check-premimum");
const poor = document.querySelector("#check-poor");
const gift = document.querySelector("#check-gift");
const radio1 = document.querySelector("#radio1");
const radio2 = document.querySelector("#radio2");
const radio3 = document.querySelector("#radio3");

const calculate = document.querySelector("#calculate");
const sumary = document.querySelector("#sumary");
const budget = document.querySelector("#budget");
const message = document.querySelector("#message");
calculate.addEventListener("click", function () {
  let bud = budget.value;
  let suma = 0;
  suma = Number(price.value);
  if (bio.checked) {
    suma *= 1.3;
  }
  if (premium.checked) {
    suma *= 1.5;
  }
  if (poor.checked) {
    suma *= 0.85;
  }
  if (gift.checked) {
    suma += 500;
  }
  if (radio2.checked) {
    suma *= 1.1;
  } else if (radio3.checked) {
    suma += 250;
  }
  sumary.value = Math.round(suma);
  if (suma <= bud) {
    message.textContent = "Výsledná cena se vejde do vašich požadavků.";
    message.className = "text-success";
  } else {
    message.textContent = `Na zvolené krmivo vám chybí ${Math.round(
      suma - bud
    )} Kč`;
    message.className = "text-danger";
  }
});

const pattern = /\W/g;

const emailmess = document.querySelector("#emailmess");
const contact = document.querySelector("#contact");
const sendbtn = document.querySelector("#send");
let messa = "";
let con = contact.value;
contact.addEventListener("input", function () {
  con = contact.value;
  if (!con.match(pattern)) {
    messa = "";
    sendbtn.disabled = false;
  } else {
    messa = "Pole jméno může obsahovat pouze písmena a čísla.";
    sendbtn.disabled = true;
    emailmess.className = "text-danger";
  }
  emailmess.textContent = messa;
});
sendbtn.addEventListener("click", function () {
  if (con === "") {
    messa = "Pole kontakt musí být vyplněné.";
    sendbtn.disabled = true;
    emailmess.className = "text-danger";
  } else {
    messa = "Děkujeme za objednávku";
    emailmess.className = "text-success";
  }
  emailmess.textContent = messa;
  
});
