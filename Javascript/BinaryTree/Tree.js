function Tree() {
    this.root = null;
}

Tree.prototype.add = function(value){
    const node = new Node(value)
    if(this.root === null) {
        this.root = node;
    } else {
        this.root.add(node);
    }
}

Tree.prototype.traverse = function() {
    this.root.visit();

}

Tree.prototype.search = function(value){
    return this.root.search(value);
}