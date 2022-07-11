    // // Variables
    // var oneTick = 1;

    // // Donuts
    // var totalDonuts = 0;
    // var donutMultiplier = 1;

    // // Auto Clickers
    // var totalAutoClicker = 0;
    // var clickerCost = 100;
    // var clickerCostMultiplier = 1.1;

    // // Click Multiplier Packs
    // var newTick = 0;
    // var totalClickPack = 0;
    // var clickPackCost = 10;
    // var clickPackCostMult = 1.1;
    // var clickPackMultiplier = 2;

    // class DonutMaker {
    //     // Constructor
    //     constructor(totalDonuts, totalAutoClicker, totalClickPack) {
    //         this.totalDonuts = totalDonuts;
    //         this.totalAutoClicker = totalAutoClicker;
    //         this.totalClickPack = totalClickPack;
    //     }

    //     // Methods
    //     addOneDonut() {
    //         this.totalDonuts += oneTick;
    //     }

    //     addDonutMultiplier() {
    //         this.totalDonuts += (oneTick + newTick);
    //     }

    //     updateTotals() {
    //         this.totalDonuts = totalDonuts;
    //         this.totalAutoClicker = totalAutoClicker;
    //         this.totalClickPack = totalClickPack;
    //     }

    //     // 1. Buy auto clicker
    //     // 2. Add one clicker
    //     // 3. Increase clicker cost
    //     // 4. Automatically click
    //     addOneAutoClicker() {
    //         if (this.totalDonuts >= clickerCost) {
    //             this.totalDonuts -= clickerCost;
    //             this.totalAutoClicker++;
    //             this.clickerCost = Math.round(clickerCost * clickerCostMultiplier);
    //         }
    //     }

    //     // 1. Buy click pack
    //     // 2. Add one pack
    //     // 3. Increase pack cost
    //     // 4. Increase clicks
    //     addOneClickPack() {
    //         if (this.totalDonuts >= clickPackCost) {
    //             this.totalDonuts -= clickPackCost;
    //             this.totalClickPack++;
    //             this.clickPackCost = Math.round(clickPackCost * clickPackCostMult);
    //             this.newTick == Math.pow(clickPackMultiplier, totalClickPack);
    //         }
    //     }
    // }

    // export default DonutMaker;