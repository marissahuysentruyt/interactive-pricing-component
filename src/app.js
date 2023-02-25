// import './scss/global.scss';

const pageviewCount = document.querySelector(".js-pageviews");
pageviewCount.innerText = "100K ";

const inputSlider = document.querySelector("input[type='range']");
let price = inputSlider.value;
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
