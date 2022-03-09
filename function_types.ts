function stringFunction(): string {
    return 'Hello, I am a script';
}

function cal(val1: number, val2: number): number {
    let total: number = val1 + val2;
    return total
}


cal(3, 2);

let universal: () => string;
universal = stringFunction
console.log(universal());

let sum: (value1: number, value2: number) => number;
))
