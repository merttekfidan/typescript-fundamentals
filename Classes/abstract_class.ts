abstract class People {
    displayDate() {
        console.log('Some data')
    }
}

class Kids extends People { }

const person = new Kids
person.displayDate()