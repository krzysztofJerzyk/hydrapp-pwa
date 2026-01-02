const dodajSzklanke = document.querySelector(".addGlass");
const usunSzklanke = document.querySelector(".removeGlass");
const numberText = document.querySelector(".number-js");
const key = new Date().toISOString().slice(0, 10);

const checkValue = () => {
  if (localStorage.getItem(key) === null) {
    numberText.innerHTML = 0;
    localStorage.setItem(key, "0");
  } else {
    numberText.innerHTML = parseInt(localStorage.getItem(key));
  }
};

dodajSzklanke.addEventListener("click", () => {
  let pobranieSzklanki = parseInt(localStorage.getItem(key));
  pobranieSzklanki = pobranieSzklanki + 1;
  localStorage.setItem(key, JSON.stringify(pobranieSzklanki));
  checkValue();
});

usunSzklanke.addEventListener("click", () => {
  let pobranieSzklanki = parseInt(localStorage.getItem(key));
  if (pobranieSzklanki > 0) {
    pobranieSzklanki = pobranieSzklanki - 1;
  }
  localStorage.setItem(key, JSON.stringify(pobranieSzklanki));
  checkValue();
});

checkValue();
