import Donut from "./Donut";

// Variables
const donutFactory = new Donut();

// Buttons
const bakeButton = (document.querySelector(".bake-button"));
const autoButton = (document.querySelector(".auto-button"));
const boostButton = (document.querySelector(".boost-button"));
const resetButton = (document.querySelector(".reset-button"));

const navButton = (document.querySelectorAll(".nav-button"));

// Navigation


// Counts
const donutCount = (document.querySelector(".bake-count"));
const clickValue = (document.querySelector(".click-value"));
const autoCount = (document.querySelector(".auto-count"));
const boostCount = (document.querySelector(".boost-count"));

// Events
updateCounts();

// Methods ===========================================
bakeButton.addEventListener("click", () => {
  donutFactory.makeDonuts();
  updateCounts();

});

// Not sure how to get the timing intervals to not compound...but this is the best I could do
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
  clickValue.innerText = "click value: " + donutFactory.clickValue;
  autoCount.innerText = "total auto clickers: " + donutFactory.totalAutoClickers;
  boostCount.innerText = "total boost packs: " + donutFactory.totalBoostClicks;
  autoButton.innerText = "Buy Auto Clicker For: " + donutFactory.autoCost + " Donuts";
  boostButton.innerText = "Buy Boost Pack For: " + donutFactory.boostCost + " Donuts";
  changeAutoDisplay();
  changeBoostDisplay();
};

function autoMakeDonuts() {
  donutFactory.totalDonuts += (donutFactory.totalAutoClickers * donutFactory.clickValue);
  donutCount.innerText = "total donuts: " + donutFactory.totalDonuts;
};

// Nav Buttons =======================================
navButton.forEach(function (button, button_index) {
  button.addEventListener("click", () => {
    console.log(button);
    console.log(button_index);
  });
});

resetButton.addEventListener("click", () => {
  const gameReset = confirm("[WARNING] Are you sure you'd like to reset the game?");
  if (gameReset) {
    donutFactory.resetGame();
    updateCounts();
  } else {}
});

// Cosmetics =========================================
function showAbout() {
  aboutText.style.visibility = "visible";
  console.log("this is working");
};

function showCompany() {
  document.getElementById("inspo-text").classList.toggle("show");
};

function showContact() {
  document.getElementById("contact-text").classList.toggle("show");
};

function changeAutoDisplay() {
  if (donutFactory.totalDonuts >= donutFactory.autoCost) {
    document.getElementById("auto").style.backgroundColor = "#BDE0FE";
  } else {
    document.getElementById("auto").style.backgroundColor = "#999";
  }
};

function changeBoostDisplay() {
  if (donutFactory.totalDonuts >= donutFactory.boostCost) {
    document.getElementById("boost").style.backgroundColor = "#BDE0FE";
  } else {
    document.getElementById("boost").style.backgroundColor = "#999";
  }
};