let array1: number[] = [1, 242, 321]
let array2: Array<number> = [1, 242, 321]

class objectGenericClass<TYPE1, TYPE2>{
    constructor(public value1: TYPE1, public value2: TYPE2) {

    }
}

let object1 = new objectGenericClass<string, number>('Hello', 2)
let object2 = new objectGenericClass<number, string>(2, 'Hello')


// CLASS GENERIC CONSTRAINTS
class objectGenericClass2<TYPE1, TYPE2 extends string>{
    constructor(public value1: TYPE1, public value2: TYPE2) {

    }
}

let object3 = new objectGenericClass<string, number>('Hello', 2)
let object4 = new objectGenericClass<number, string>(2, 'Hello')