interface AutomobileInterface {
    brand: string,
    speed: number,
    speedMethod(velocity: number): void
}

const automobile: AutomobileInterface = {
    brand: 'BMW',
    speed: 100,
    speedMethod() {
        console.log(`This ${this.brand} goes ${this.speed} km/h`)
    }
}

function car1(automobile: AutomobileInterface) {
    console.log(`This ${automobile.brand} goes ${automobile.speed} km per hour`)
}

car1(automobile)

class AutomobileClass implements AutomobileInterface {
    brand: string;
    speed: number;
    speedMethod(speed: number) {
        console.log(`Hi my car is goin at ${speed}`)
    }
}

let carObj = new AutomobileClass
carObj.speedMethod(200)