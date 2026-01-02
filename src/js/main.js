const dodajSzklanke = document.querySelector(".addGlass");
const usunSzklanke = document.querySelector(".removeGlass");
const numberText = document.querySelector(".number-js");
let key = new Date().toLocaleString().slice(0, 9);

setInterval(() => {
  if (key !== new Date().toLocaleString().slice(0, 9)) {
    key = new Date().toLocaleString().slice(0, 9);
    checkValue();
  }
}, 60000);

const checkValue = () => {
  if (localStorage.getItem(key) === null) {
    numberText.innerHTML = 0;
    localStorage.setItem(key, "0");
  } else {
    numberText.innerHTML = parseInt(localStorage.getItem(key));
  }
};

checkValue();

dodajSzklanke.addEventListener("click", () => {
  let pobranieSzklanki = parseInt(localStorage.getItem(key));
  pobranieSzklanki = pobranieSzklanki + 1;
  localStorage.setItem(key, pobranieSzklanki);
  checkValue();
});

usunSzklanke.addEventListener("click", () => {
  let pobranieSzklanki = parseInt(localStorage.getItem(key));
  if (pobranieSzklanki > 0) {
    pobranieSzklanki = pobranieSzklanki - 1;
  }
  localStorage.setItem(key, pobranieSzklanki);
  checkValue();
});
