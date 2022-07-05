// import {
//     TestWatcher
// } from "jest";

// import DonutMaker from "./DonutMaker.js";

// describe("DonutMaker", () => {

//     test("Will add one donut and return total donuts", () => {
//         const bakeryTest = new DonutMaker(0);
//         bakeryTest.addOneDonut();
//         expect(bakeryTest.totalDonuts).toEqual(1);
//     });

//     test("Will take away 100 from total donuts and add one auto clicker", () => {
//         const bakeryTest = new DonutMaker(101, 0);
//         expect(bakeryTest.totalDonuts).toEqual(101);
//         expect(bakeryTest.totalAutoClicker).toEqual(0);
//     });

//     test("Will take away 100 from total donuts and add one auto clicker", () => {
//         const bakeryTest = new DonutMaker(101, 0);
//         bakeryTest.addOneAutoClicker();
//         expect(bakeryTest.totalDonuts).toEqual(1);
//         expect(bakeryTest.totalAutoClicker).toEqual(1);
//     });

//     test("Will not allow to purchase one auto clicker", () => {
//         const bakeryTest = new DonutMaker(99, 0);
//         bakeryTest.addOneAutoClicker();
//         expect(bakeryTest.totalDonuts).toEqual(99);
//         expect(bakeryTest.totalAutoClicker).toEqual(0);
//     });

//     test("Will increase auto clicker count to 1 and cost by 10%", () => {
//         const bakeryTest = new DonutMaker(400, 0);
//         bakeryTest.addOneAutoClicker();
//         expect(bakeryTest.totalDonuts).toEqual(300);
//         expect(bakeryTest.totalAutoClicker).toEqual(1);
//         expect(bakeryTest.clickerCost).toEqual(110);
//     });

//     // test("Will increase auto clicker count to 2 and cost by 10%", () => {
//     //     const bakeryTest = new DonutMaker(600, 0);
//     //     bakeryTest.addOneAutoClicker();
//     //     expect(bakeryTest.totalDonuts).toEqual(500);
//     //     expect(bakeryTest.totalAutoClicker).toEqual(1);
//     //     expect(bakeryTest.clickerCost).toEqual(110);
//     //     bakeryTest.addOneAutoClicker();
//     //     expect(bakeryTest.totalDonuts).toEqual(390);
//     //     expect(bakeryTest.totalAutoClicker).toEqual(2);
//     //     expect(bakeryTest.clickerCost).toEqual(121);
//     // });

//     test("Will increase click pack count to 1 and cost by 10%", () => {
//         const bakeryTest = new DonutMaker(400, 0, 0);
//         bakeryTest.addOneClickPack();
//         expect(bakeryTest.totalDonuts).toEqual(390);
//         expect(bakeryTest.totalClickPack).toEqual(1);
//         expect(bakeryTest.clickPackCost).toEqual(11);
//     });

//     test("Will increase click pack count to 1", () => {
//         const bakeryTest = new DonutMaker(400, 0, 0);
//         bakeryTest.addOneClickPack();
//         expect(bakeryTest.totalClickPack).toEqual(1);
//     });

//     test("Will return new tick as 2", () => {
//         const bakeryTest = new DonutMaker(400, 0, 0);
//         bakeryTest.addOneClickPack();
//         expect(bakeryTest.totalClickPack).toEqual(1);
//         expect(bakeryTest.newTick).toEqual(2);
//     });

//     // test("Will increase click pack count to 2 and subsequient cost by 10%", () => {
//     //     const bakeryTest = new DonutMaker(400, 0, 0);
//     //     bakeryTest.addOneClickPack();
//     //     expect(bakeryTest.totalDonuts).toEqual(390);
//     //     expect(bakeryTest.totalClickPack).toEqual(1);
//     //     expect(bakeryTest.clickPackCost).toEqual(11);
//     //     bakeryTest.addOneClickPack();
//     //     expect(bakeryTest.totalClickPack).toEqual(2);
//     // });

//     // test("Will increase click pack count to 1 and cost by 10%", () => {
//     //     const bakeryTest = new DonutMaker(20, 0, 0);
//     //     bakeryTest.addOneClickPack();
//     //     expect(bakeryTest.totalDonuts).toEqual(13);
//     // });

//     // test("Will increase click xpack count to 1 and cost by 10%", () => {
//     //     const bakeryTest = new DonutMaker(100, 0, 0);
//     //     bakeryTest.addOneClickPack();
//     //     expect(bakeryTest.totalDonuts).toEqual(90);
//     //     expect(bakeryTest.newTick).toEqual(2);
//     // });
// });