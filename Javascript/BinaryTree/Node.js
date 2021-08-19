function Node(number){
    this.left = null;
    this.right = null;
    this.value = number;
}
Node.prototype.add = function(node) {
    if(node.value < this.value) {
        if(this.left == null) {
            this.left = node;
        }
        else{
            this.left.add(node);
        }
    }
    else if(node.value > this.value) {
        if(this.right == null) {
            this.right = node;
        }
        else{
            this.right.add(node);
        }
    }
}
Node.prototype.visit = function() {
    if(this.left !== null) {
        this.left.visit();
    }
    if(this.right !== null) {
        this.right.visit();
    }
}

Node.prototype.search = function(value) {
    if(this.value == value) {
        return this;
    }
    if(value < this.value && this.left!==null) {
        return this.left.search(value);
    }
    if(value > this.value && this.right!==null){
        return this.right.search(value);
    }


}