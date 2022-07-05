import Donut from "./Donut";

// Variables
const donutFactory = new Donut();

// Buttons
const bakeButton = (document.querySelector(".bake-button"));
const autoButton = (document.querySelector(".auto-button"));
const boostButton = (document.querySelector(".boost-button"));

// Counts
const donutCount = (document.querySelector(".bake-count"));
const clickValue = (document.querySelector(".click-value"));
const autoCount = (document.querySelector(".auto-count"));
const boostCount = (document.querySelector(".boost-count"));

updateCounts();

// Methods
bakeButton.addEventListener("click", () => {
  donutFactory.makeDonuts();
  updateCounts();
});

// Not sure how to get the timing intervals to not compound...but this is the best I could do.
autoButton.addEventListener("click", () => {
  donutFactory.addAutoClicker();
  setInterval(autoMakeDonuts, 1000);
  updateCounts();
});

boostButton.addEventListener("click", () => {
  donutFactory.addBoostPack();
  updateCounts();
});

function updateCounts() {
  donutCount.innerText = "total donuts: " + donutFactory.totalDonuts;
  clickValue.innerText = "click boost value: " + donutFactory.clickValue;
  autoCount.innerText = "total auto clickers: " + donutFactory.totalAutoClickers;
  boostCount.innerText = "total boost packs: " + donutFactory.totalBoostClicks;
  autoButton.innerText = "Buy Auto Clicker For: " + donutFactory.autoCost + " Donuts";
  boostButton.innerText = "Buy Boost Pack For: " + donutFactory.boostCost + " Donuts";
};

function autoMakeDonuts() {
  donutFactory.totalDonuts += (donutFactory.totalAutoClickers * donutFactory.clickValue);
  donutCount.innerText = "total donuts: " + donutFactory.totalDonuts;
}