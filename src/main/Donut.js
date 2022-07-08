class Donut {
    // Constructor
    constructor() {
        this.totalDonuts = 0;
        this.totalAutoClickers = 0;
        this.totalBoostClicks = 0;
        this.autoCost = 100;
        this.boostCost = 10;
        this.clickValue = 1;
        this.multiplier = 1.1;
        this.exponent = 1.2;
    }

    // Methods
    makeDonuts() {
        if (this.totalBoostClicks < 1) {
            this.totalDonuts += 50;
        } else {
            this.totalDonuts += (1 + this.clickValue);
        }
    }


    addAutoClicker() {
        if (this.totalDonuts >= this.autoCost) {
            this.totalDonuts -= this.autoCost;
            this.totalAutoClickers++;
            this.autoCost = Math.round(this.autoCost * this.multiplier);
        }
    }

    // Can't get this to work outside of this class...
    autoMakeDonuts() {
        this.totalDonuts += (this.totalAutoClickers * this.clickValue);
    }

    addBoostPack() {
        if (this.totalDonuts >= this.boostCost) {
            this.totalDonuts -= this.boostCost;
            this.totalBoostClicks++;
            this.boostCost = Math.round(this.boostCost * 1.1);
            this.clickValue = (Math.pow(this.exponent, this.totalBoostClicks));
        }
    }

    resetGame() {
        this.totalDonuts = 0;
        this.totalAutoClickers = 0;
        this.totalBoostClicks = 0;
        this.autoCost = 100;
        this.boostCost = 10;
        this.clickValue = 1;
    }
}

export default Donut;