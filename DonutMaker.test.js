import {
    TestWatcher
} from "jest";

import DonutMaker from "./DonutMaker.js";

describe("DonutMaker", () => {

    test("Will add one donut and return total donuts", () => {
        const bakeryTest = new DonutMaker(0, 0, 0);
        bakeryTest.donutClick();
        expect(bakeryTest.totalDonuts).toEqual(1);
    });

    test("Will add two donuts and return total donuts", () => {
        const bakeryTest = new DonutMaker(0, 0, 0);
        bakeryTest.donutClick();
        bakeryTest.donutClick();
        expect(bakeryTest.totalDonuts).toEqual(2);
    });

    test("Will NOT take away from total donuts", () => {
        const bakeryTest = new DonutMaker(99, 0, 0);
        bakeryTest.addAutoClicker();
        expect(bakeryTest.totalDonuts).toEqual(99);
    });

    test("Will take away 100 from total donuts for auto clicker", () => {
        const bakeryTest = new DonutMaker(101, 0, 0);
        bakeryTest.addAutoClicker();
        expect(bakeryTest.totalDonuts).toEqual(1);
    });

    test("Will increase total auto clickers to 1", () => {
        const bakeryTest = new DonutMaker(101, 0, 0);
        bakeryTest.addAutoClicker();
        expect(bakeryTest.totalAutoClickers).toEqual(1);
    });

    test("Will increase auto clicker cost by 10%", () => {
        const bakeryTest = new DonutMaker(101, 0, 0);
        bakeryTest.addAutoClicker();
        expect(bakeryTest.clickerCost).toEqual(110);
    });

    test("Will take away 10 from total donuts for click pack", () => {
        const bakeryTest = new DonutMaker(100, 0, 0);
        bakeryTest.addClickPack();
        expect(bakeryTest.totalDonuts).toEqual(90);
    });

    test("Will increase total click packs to 1", () => {
        const bakeryTest = new DonutMaker(100, 0, 0);
        bakeryTest.addClickPack();
        expect(bakeryTest.totalClickPacks).toEqual(1);
    });

    test("Will increase click pack cost by 10%", () => {
        const bakeryTest = new DonutMaker(100, 0, 0);
        bakeryTest.addClickPack();
        expect(bakeryTest.clickPackCost).toEqual(11);
    });

    test("Will take away 20 from total donuts for click pack", () => {
        const bakeryTest = new DonutMaker(100, 0, 0);
        bakeryTest.addClickPack();
        expect(bakeryTest.totalDonuts).toEqual(90);
        bakeryTest.addClickPack();
        expect(bakeryTest.totalDonuts).toEqual(80);
    });

    test("Will increase total click packs to 2", () => {
        const bakeryTest = new DonutMaker(100, 0, 0);
        bakeryTest.addClickPack();
        bakeryTest.addClickPack();
        expect(bakeryTest.totalClickPacks).toEqual(2);
    });

    test("Will increase total donuts by click pack 1", () => {
        const bakeryTest = new DonutMaker(0, 0, 1);
        bakeryTest.donutClick();
        expect(bakeryTest.totalDonuts).toEqual(2.2);
    });

    test("Will increase total donuts by click pack 2", () => {
        const bakeryTest = new DonutMaker(0, 0, 2);
        bakeryTest.donutClick();
        expect(bakeryTest.totalDonuts).toEqual(2.4);
    });

    test("Will increase total donuts by click pack 3", () => {
        const bakeryTest = new DonutMaker(0, 0, 3);
        bakeryTest.donutClick();
        expect(bakeryTest.totalDonuts).toEqual(2.7);
    });
});