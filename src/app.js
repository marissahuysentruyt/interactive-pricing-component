// import './scss/global.scss';

const pageviewCount = document.querySelector(".js-pageviews");
const pagesPerDollar = 6250;
const calculatePageviews = (dollars) => {
  return dollars * pagesPerDollar;
};

// 16 / 100K = price per page view (.00016)
// 8 / 50000 === .00016
// 100000 / 16 = 6250
// .00016 * 6250 = 1
// 6250 = 1
// (6250 * dollars)

const inputSlider = document.querySelector("input[type='range']");
let price = inputSlider.value;
pageviewCount.innerHTML = calculatePageviews(price);
const spanPriceDisplay = document.querySelector(".js-input-value");
spanPriceDisplay.innerHTML = price;

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
