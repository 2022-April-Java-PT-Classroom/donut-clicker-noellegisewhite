let clickerCost = 100;
let clickPackCost = 10;
let multiplier = 1.1;
let exponent = 1.2;

class DonutMaker {

    constructor(totalDonuts, totalAutoClickers, totalClickPacks) {
        this.totalDonuts = totalDonuts;
        this.totalAutoClickers = totalAutoClickers;
        this.totalClickPacks = totalClickPacks;
        this.clickPackValue = parseFloat(Math.pow(exponent, this.totalClickPacks).toFixed(1));
    }

    donutClick() {
        if (this.totalClickPacks < 1) {
            this.totalDonuts++;
        } else {
            this.totalDonuts = 1 + this.clickPackValue;
        }
    }

    autoDonutClick() {
        this.totalDonuts = (this.totalAutoClickers * this.clickPackValue);
    }

    // 1. Purchase Auto Clicker
    // 2. Add One Auto Clicker
    // 3. Increase Auto Clicker Cost
    // 4. Auto Click
    addAutoClicker() {
        if (this.totalDonuts >= clickerCost) {
            this.totalDonuts -= clickerCost;
            this.totalAutoClickers++;
            this.clickerCost = Math.round(clickerCost * multiplier);
            setInterval(this.autoDonutClick, 1000);
        }
    }

    // 1. Buy click pack
    // 2. Add one pack
    // 3. Increase pack cost
    // 4. Increase clicks
    addClickPack() {
        if (this.totalDonuts >= clickPackCost) {
            this.totalDonuts -= clickPackCost;
            this.totalClickPacks++;
            this.clickPackCost = (clickPackCost * multiplier);
        }
    }
}

export default DonutMaker;