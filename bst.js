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
 var x = new BST(50);
 x.insert(50)
 console.log(x)
