//linked list
function linkedlist(){
this.head = null;
this.tail = null;
};

function Node(val, next, prev){
  this.val = val;
  this.next = next;
  this.prev = prev;
};

// add node to head
linkedlist.prototype.addToHead = function(val){
  var newNode = new Node(val, this.head, null);
  if(this.head){this.head.prev =  newNode;}
  else{this.tail = newNode;}
  this.head = newNode;
};

//add node to tail
linkedlist.prototype.addToTail = function (val) {
  var newNode = new Node(val, null, this.tail);
  if(this.tail){this.tail.next = newNode;}
  else{this.head = newNode;}
  this.tail = newNode;
};

//remove head
linkedlist.prototype.removeHead = function () {
  if(!this.head){return null};
  var val = this.head.val;
  this.head = this.head.next;
  if(this.head){this.head.prev = null;}
  else{this.tail = null};
  return val;
};

//remove tail node
linkedlist.prototype.removeTail = function () {
  if(!this.tail){return null};
  var val = this.tail.val;
  this.tail = this.tail.prev;
  if(this.tail){this.tail.next = null}
  else{this.head = null}
  return val;
};

//search
linkedlist.prototype.search = function (findVal) {
  if(!this.head){return null;}
  var runner = this.head;
  while(runner){
    if (runner.val == findVal){
      return runner.val;
    }
      runner = runner.next;
  }
  return null;
};

//array of indexes of certain value
linkedlist.prototype.IndexOf = function (value) {
  if(!this.head){return null;}
  var runner = this.head;
  var index = 0;
  var arrIndex = [];
  while(runner){
    if(runner.val === value){
      arrIndex.push(index);
    }
    runner = runner.next;
    index++;
  }
  return arrIndex;
};

var ll = new linkedlist();
ll.addToHead(300);
ll.addToHead("hello");
ll.addToTail(500);
ll.addToTail('world');
console.log(ll.IndexOf('world'))
