'use strict';
export default class FluxCapacitor {
    constructor() {
        this.destination_year = new Date().getFullYear();
        this.current_year = new Date().getFullYear();
        this.speed_mph = 0;
    }
    
    increaseSpeedBy(by_mph) {
        this.speed_mph += by_mph;
        if(this.speed_mph >= 88) {
            // Once we hit 88mph, jump to destination year
            this.current_year = this.destination_year;
            this.speed_mph = 0;
        }
    }
}