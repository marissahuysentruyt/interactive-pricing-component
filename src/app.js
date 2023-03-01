import "./scss/global.scss";

const pagesAndPrices = {
  views: ["10K", "50K", "100K", "500K", "1M"],
  prices: [8, 12, 16, 24, 36]
};

const inputSlider = document.querySelector("input[type='range']");
// line 10 will set the max attr for the range input, that way if the pagesAndPrices object gets updated, the max gets updated automatically
inputSlider.setAttribute("max", ((pagesAndPrices).views).length - 1);
const pageviewCount = document.querySelector(".js-pageviews");
let price = pagesAndPrices.prices[inputSlider.value];
pageviewCount.innerHTML = pagesAndPrices.views[inputSlider.value];
const spanPriceDisplay = document.querySelector(".js-input-value");
spanPriceDisplay.innerHTML = price;

const discountedPriceDisplay = document.querySelector(".js-discount-value");
const discountToggle = document.querySelector("input[type='checkbox'");
const discount = 0.25;
discountToggle.checked = false;

const applyDiscount = (price) => {
  const convertedPrice = pagesAndPrices.prices[price];
  return (convertedPrice * (1 - discount));
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

inputSlider.addEventListener("input", function(e) {
  return (
    spanPriceDisplay.innerHTML = pagesAndPrices.prices[e.target.value],
    pageviewCount.innerHTML = pagesAndPrices.views[e.target.value]
  );
});
