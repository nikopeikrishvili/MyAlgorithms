let tree = new Tree();
for(let i = 0; i < 100; i++){
    tree.add(Math.floor(Math.random()*1000-1))
}
tree.traverse();