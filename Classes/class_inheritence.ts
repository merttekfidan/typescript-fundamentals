class Building {
    window: string = 'Window 1'

    escalators() {
        console.log('Escalators are moving')
    }
}

class Building2 extends Building {
    escalators() {
        console.log(this.window)
    }
}

const building1 = new Building2
building1.escalators()