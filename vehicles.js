class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        return "BEEP!"
    }

    toString(){
        return `The vehicle is a ${make} ${model} made in ${year}.`;
    }

}

class Car extends Vehicle{
    constructor(make, model, year){
        super(make,model,year)
        this.numTires = 4;
    }
}

class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make,model,year)
        this.numTires = 2;
    }
    revEngine(){
        return 'VROOMMM VROOM';
    }
}

class Garage{
    constructor(cap){
        this.spots = [];
        this.cap = cap;
    }

    add(vehicle){
        if(vehicle instanceof Vehicle) return 'Only Vehicles, fool!';
        if(this.spots.length >= this.cap) return 'Sorry we are at capacity.';
        this.spots.push(vehicle);
        return 'Vehicle accepted!';
    }
}
