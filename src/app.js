import "./scss/global.scss";

const pageviewCount = document.querySelector(".js-pageviews");
const pagesPerDollar = 6250;

const calculatePageviews = (dollars) => {
  return dollars * pagesPerDollar;
};

const inputSlider = document.querySelector("input[type='range']");
let price = inputSlider.value;
pageviewCount.innerHTML = calculatePageviews(price);
const spanPriceDisplay = document.querySelector(".js-input-value");
spanPriceDisplay.innerHTML = price;
const discountedPriceDisplay = document.querySelector(".js-discount-value");
const discountToggle = document.querySelector("input[type='checkbox'");
const discount = 0.25;
discountToggle.checked = false;

const applyDiscount = (price) => {
  return (price * (1 - discount));
};

const createNewPrice = (price) => {
  discountedPriceDisplay.innerText = applyDiscount(price).toFixed(2);
};

const insertNewPrice = (price) => {
  spanPriceDisplay.style.textDecoration = "line-through";
  spanPriceDisplay.style.textDecorationThickness = "0.125rem";
  createNewPrice(price);
};

discountToggle.addEventListener("input", function() {
  if(discountToggle.checked) {
    insertNewPrice(inputSlider.value);
    inputSlider.addEventListener("input", function(e) {
      return (
        createNewPrice(e.target.value)
      );
    });
  }
  if(!discountToggle.checked) {
    spanPriceDisplay.style.textDecoration = "none";
    discountedPriceDisplay.innerText = "";
    inputSlider.addEventListener("input", function() {
      return (
        discountedPriceDisplay.innerText = ""
      );
    });
  }
});

const getInputValue = (inputValue) => {
  return inputValue;
};

inputSlider.addEventListener("input", function(e) {
  return (
    spanPriceDisplay.innerHTML = getInputValue(e.target.value)
  );
});

inputSlider.addEventListener("change", function(e) {
  return (
    pageviewCount.innerHTML = calculatePageviews(e.target.value)
  );
});
