class Tree {
    constructor(public leaf: string) {
        this.leaf = leaf
    }

    public moveLeaf() {
        console.log(`Leaf is moving ${this.leaf}`)
    }

}

let tree1 = new Tree('leaf')
tree1.moveLeaf();