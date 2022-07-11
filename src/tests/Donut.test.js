import {
    TestWatcher
} from "jest";

import Donut from "../main/Donut";

describe("Donut", () => {


    test("Will add 1 donut and return total donuts", () => {
        const donutTest = new Donut();
        donutTest.makeDonuts();
        expect(donutTest.totalDonuts).toEqual(1);
    });

    test("Will add 2 donuts and return total donuts", () => {
        const donutTest = new Donut();
        donutTest.makeDonuts();
        donutTest.makeDonuts();
        expect(donutTest.totalDonuts).toEqual(2);
    });

    test("Will add 3 donuts and return total donuts", () => {
        const donutTest = new Donut();
        donutTest.makeDonuts();
        donutTest.makeDonuts();
        donutTest.makeDonuts();
        expect(donutTest.totalDonuts).toEqual(3);
    });

    test("Will NOT take away 99 from total donuts", () => {
        const donutTest = new Donut();
        donutTest.totalDonuts = 99;
        donutTest.addAutoClicker();
        expect(donutTest.totalDonuts).toEqual(99);
    });

    test("Will take away 100 from total donuts", () => {
        const donutTest = new Donut();
        donutTest.totalDonuts = 101;
        donutTest.addAutoClicker();
        expect(donutTest.totalDonuts).toEqual(1);
    });

    test("Will increase total auto clicker by 1", () => {
        const donutTest = new Donut();
        donutTest.totalDonuts = 101;
        donutTest.addAutoClicker();
        expect(donutTest.totalDonuts).toEqual(1);
        expect(donutTest.totalAutoClickers).toEqual(1);
    });

    test("Will increase auto cost by 10%", () => {
        const donutTest = new Donut();
        donutTest.totalDonuts = 101;
        donutTest.addAutoClicker();
        expect(donutTest.autoCost).toEqual(110);
        expect(donutTest.totalAutoClickers).toEqual(1);
    });

    test("Will increase subsequent 2nd auto cost by 10%", () => {
        const donutTest = new Donut();
        donutTest.totalDonuts = 500;
        donutTest.addAutoClicker();
        expect(donutTest.autoCost).toEqual(110);
        donutTest.addAutoClicker();
        expect(donutTest.totalAutoClickers).toEqual(2);
        expect(donutTest.autoCost).toEqual(121);
        expect(donutTest.totalDonuts).toEqual(290);
    });

    test("Will increase subsequent 3rd auto cost by 10%", () => {
        const donutTest = new Donut();
        donutTest.totalDonuts = 500;
        donutTest.addAutoClicker();
        expect(donutTest.autoCost).toEqual(110);
        donutTest.addAutoClicker();
        expect(donutTest.autoCost).toEqual(121);
        donutTest.addAutoClicker();
        expect(donutTest.totalAutoClickers).toEqual(3);
        expect(donutTest.autoCost).toEqual(133);
        expect(donutTest.totalDonuts).toEqual(169);
    });

    test("Will NOT take away 10 from total donuts", () => {
        const donutTest = new Donut();
        donutTest.totalDonuts = 9;
        donutTest.addBoostPack();
        expect(donutTest.totalDonuts).toEqual(9);
    });

    test("Will take away 10 from total donuts", () => {
        const donutTest = new Donut();
        donutTest.totalDonuts = 11;
        donutTest.addBoostPack();
        expect(donutTest.totalDonuts).toEqual(1);
    });

    test("Will increase total boost clicks by 1", () => {
        const donutTest = new Donut();
        donutTest.totalDonuts = 100;
        donutTest.addBoostPack();
        expect(donutTest.totalDonuts).toEqual(90);
        expect(donutTest.totalBoostClicks).toEqual(1);
    });

    test("Will increase total boost clicks by 2", () => {
        const donutTest = new Donut();
        donutTest.totalDonuts = 100;
        donutTest.addBoostPack();
        expect(donutTest.totalDonuts).toEqual(90);
        expect(donutTest.totalBoostClicks).toEqual(1);
        donutTest.addBoostPack();
        expect(donutTest.totalDonuts).toEqual(79);
        expect(donutTest.totalBoostClicks).toEqual(2);
    });

    test("Will increase boost cost by 10%", () => {
        const donutTest = new Donut();
        donutTest.totalDonuts = 11;
        donutTest.addBoostPack();
        expect(donutTest.boostCost).toEqual(11);
        expect(donutTest.totalBoostClicks).toEqual(1);
    });

    test("Will increase subsequent 2nd boost cost by 10%", () => {
        const donutTest = new Donut();
        donutTest.totalDonuts = 50;
        donutTest.addBoostPack();
        expect(donutTest.boostCost).toEqual(11);
        expect(donutTest.totalBoostClicks).toEqual(1);
        donutTest.addBoostPack();
        expect(donutTest.boostCost).toEqual(12);
        expect(donutTest.totalBoostClicks).toEqual(2);
    });

    test("Will increase subsequent 3rd boost cost by 10%", () => {
        const donutTest = new Donut();
        donutTest.totalDonuts = 50;
        donutTest.addBoostPack();
        expect(donutTest.boostCost).toEqual(11);
        expect(donutTest.totalBoostClicks).toEqual(1);
        donutTest.addBoostPack();
        expect(donutTest.boostCost).toEqual(12);
        expect(donutTest.totalBoostClicks).toEqual(2);
        donutTest.addBoostPack();
        expect(donutTest.boostCost).toEqual(13);
        expect(donutTest.totalBoostClicks).toEqual(3);
    });

    test("Will increase total donuts by 1.2", () => {
        const donutTest = new Donut();
        donutTest.totalDonuts = 10;
        donutTest.totalBoostClicks = 0;
        expect(donutTest.totalBoostClicks).toEqual(0);
        donutTest.addBoostPack();
        donutTest.makeDonuts();
        expect(donutTest.totalBoostClicks).toEqual(1);
        expect(donutTest.totalDonuts).toEqual(2.2);
        donutTest.makeDonuts();
        expect(donutTest.totalDonuts).toEqual(4.4);
    });

    test("Will increase total donuts by 1.4", () => {
        const donutTest = new Donut();
        donutTest.totalDonuts = 21;
        donutTest.addBoostPack();
        donutTest.addBoostPack();
        donutTest.makeDonuts();
        expect(donutTest.totalBoostClicks).toEqual(2);
        expect(donutTest.totalDonuts).toEqual(2.4);
        donutTest.makeDonuts();
        expect(donutTest.totalDonuts).toEqual(4.8);
    });

    test("Will return click value as 1", () => {
        const donutTest = new Donut();
        expect(donutTest.clickValue).toEqual(1);
    });

    test("Will return click value as 1.2", () => {
        const donutTest = new Donut();
        donutTest.totalDonuts = 50;
        expect(donutTest.clickValue).toEqual(1);
        donutTest.addBoostPack();
        expect(donutTest.clickValue).toEqual(1.2);
    });

    test("Will return click value as 1.4", () => {
        const donutTest = new Donut();
        donutTest.totalDonuts = 50;
        expect(donutTest.clickValue).toEqual(1);
        donutTest.addBoostPack();
        expect(donutTest.clickValue).toEqual(1.2);
        donutTest.addBoostPack();
        expect(donutTest.clickValue).toEqual(1.4);
    });
});