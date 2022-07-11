import Donut from "./Donut";

// Variables
const donutFactory = new Donut();

// Buttons
const bakeButton = (document.querySelector(".bake-button"));
const autoButton = (document.querySelector(".auto-button"));
const boostButton = (document.querySelector(".boost-button"));
const resetButton = (document.querySelector(".reset-button"));

// Navigation
const navButton = (document.querySelectorAll(".nav-button"));
const homeButton = (document.querySelector(".home-button"));
const dropDown = (document.querySelector(".dropdown"));
const dropText = (document.querySelectorAll(".dd-text"));

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
  donutCount.innerText = "total donuts: " + (donutFactory.totalDonuts.toFixed(2));
  clickValue.innerText = "click value: " + (donutFactory.clickValue.toFixed(2));
  autoCount.innerText = "total auto clickers: " + donutFactory.totalAutoClickers;
  boostCount.innerText = "total boost packs: " + donutFactory.totalBoostClicks;
  autoButton.innerText = "Buy Auto Clicker For: " + donutFactory.autoCost + " Donuts";
  boostButton.innerText = "Buy Boost Pack For: " + donutFactory.boostCost + " Donuts";
  changeAutoDisplay();
  changeBoostDisplay();
};

function autoMakeDonuts() {
  donutFactory.totalDonuts += (donutFactory.totalAutoClickers * donutFactory.clickValue);
  updateCounts();
};

// Nav Buttons =======================================
homeButton.addEventListener("click", () => {
  dropDown.style.display = "none";
  dropText.style.display = "none";
});

navButton.forEach(function (button, button_index) {
  button.addEventListener("click", () => {
    dropText.forEach(function (content, content_index) {
      if (button_index == content_index) {
        dropDown.style.display = "block";
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    })
  })
});

resetButton.addEventListener("click", () => {
  const gameReset = confirm("[WARNING] Are you sure you'd like to reset the game?");
  if (gameReset) {
    donutFactory.resetGame();
    updateCounts();
  } else {}
});

// Cosmetics =========================================
// Haven't figured out how to set a 'non action' based event listerner for the auto tick
// Any advice would be greatly appreciated! Maybe by using a set interval??
function changeAutoDisplay() {
  if (donutFactory.totalDonuts >= donutFactory.autoCost) {
    document.getElementById("auto").style.backgroundColor = "#A2D2FF";
  } else {
    document.getElementById("auto").style.backgroundColor = "#BDE0FE";
    autoButton.innerText = "Earn More Donuts To Upgrade";
  }
};

function changeBoostDisplay() {
  if (donutFactory.totalDonuts >= donutFactory.boostCost) {
    document.getElementById("boost").style.backgroundColor = "#FFAFCC";
  } else {
    document.getElementById("boost").style.backgroundColor = "#FFC8DD";
    boostButton.innerText = "Earn More Donuts To Upgrade";
  }
};