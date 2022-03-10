var Tree = /** @class */ (function () {
    function Tree(leaf) {
        this.leaf = leaf;
        this.leaf = leaf;
    }
    Tree.prototype.moveLeaf = function () {
        console.log("Leaf is moving " + this.leaf);
    };
    return Tree;
}());
var tree1 = new Tree('leaf');
tree1.moveLeaf();
