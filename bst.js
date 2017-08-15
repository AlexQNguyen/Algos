//example of recurison for factorial
// !4 = 4*3*2*1 = 24
function fact(num){
  //break case
  if(num === 1){
    return num;
  }
  else{
    return num * fact(num - 1);
  }
};


//constructor for BST
function BST(val){
  this.val = val;
  this.left = null;
  this. right = null;
};

//Insert  new node
 BST.prototype.insert = function (val) {
   if(this.val == null){
     return new BST(val);
   }
   if(val <= this.val){
     if(!this.left){
       this.left = new BST(val);
     }
     else{
       this.left.insert(val);
     }
   }
   else if(val > this.val) {
     if(!this.right){
       this.right = new BST(val);
     }
     else{
       this.right.insert(val);
     }
   }
 };

//contains
BST.prototype.contains = function (val) {
  if(val === this.val){
    console.log("true")
    return true;
  }
  else if(val < this.val ){
    if(!this.left){
      return false;
    }
    else{
      this.left.contains(val);
    }
  }
  else if(val > this.val){
    if(!this.right){
      return false;
    }
    else{
      this.right.contains(val);
    }
  }
};

//depth first-traversel
//in-order, least to greatest
//pre-order the order in which the nodes are touched
//post-order does all the left children and its sub tree to the right
BST.prototype.depthFirstTraversel = function (iteratorFunc, order) {
  if(order === 'pre-order'){iteratorFunc(this.val)};
    if(this.left) {
      this.left.depthFirstTraversel(iteratorFunc, order)
    };
  if(order === 'in-order'){iteratorFunc(this.val)};
    if(this.right){
      this.right.depthFirstTraversel(iteratorFunc, order)
    };
  if(order === 'post-order'){iteratorFunc(this.val)}
};

//breath first-traversel
BST.prototype.breathFirstTraversel = function (iteratorFunc) {
  var queue = [this];
  while(queue.length){
    var treeNode =  queue.shift();
    iteratorFunc(treeNode);
    if(treeNode.left){
      queue.push(treeNode.left);
    }
    if(treeNode.right){
      queue.push(treeNode.right);
    }
  }
};

BST.prototype.minVal = function (node) {
  if(this.left){
    return this.left.minVal();
  }
  else{
    return this.val;
  }
};

BST.prototype.maxVal = function (node) {
  if(this.right){
    return this.right.maxVal();
  }
  else{
    return this.val;
  }
};

function log(node){
  console.log(node.val);
}

 var x = new BST(50);
x.insert(50)
x.insert(40)
x.insert(670)
x.insert(1)
x.insert(3)
x.insert(99)
x.insert(144)

console.log(x.maxVal())
