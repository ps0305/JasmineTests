'use strict';
import FluxCapacitor from '../../services/FluxCapacitor'
export default function () {
    describe("FluxCapacitor", function () {
        it("should default to current year", function () {
            var capacitor = new FluxCapacitor()
            expect(capacitor.destination_year).toEqual(new Date().getFullYear());
            expect(capacitor.current_year).toEqual(new Date().getFullYear());
        });
        it("should keep track of the speed", function () {
            var capacitor = new FluxCapacitor()
            expect(capacitor.speed_mph).toEqual(0);
            capacitor.increaseSpeedBy(5);
            expect(capacitor.speed_mph).toEqual(5);
            capacitor.increaseSpeedBy(10);
            expect(capacitor.speed_mph).toEqual(15);
        });
        it("should travel through time at 88 mph", function () {
            var capacitor = new FluxCapacitor()
            capacitor.destination_year = 1999;
            capacitor.increaseSpeedBy(88);
            expect(capacitor.current_year).toEqual(1999);
        });
        it("oops no expects", function () {
        });
        it("a fail for style demo", function () {
            fail("Ouch!");
        });
    });
}