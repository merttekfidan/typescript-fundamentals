namespace myNameSpace {
    export const name = 'Maria'
    export function displayData() {
        return (`Welcome ${name}`)
    }
}

console.log(myNameSpace.displayData())