
//Hash Table Constructor
function hashTable(size){
  this.buckets =  Array(size);
  this.numBuckets = this.buckets.length;
}
//Hash Node Constructor
function hashNode(key, val, next){
  this.key = key;
  this.val = val;
  this.next = next || null;
}

//Hashing a key to see what bucket the node will go in
hashTable.prototype.hash = function (key) {
  var total = 0;
  for(var i = 0; i < key.length; i++){
    total += key.charCodeAt(i);
  }
  var bucket  = total % this.numBuckets;
  return bucket;
};

// insert a node
hashTable.prototype.insert = function(key, val) {
  var index = this.hash(key);
  if(!this.buckets[index]){ //if the bucket is empty
    this.buckets[index] = new hashNode(key, val);
  }
  else if(this.buckets[index].key === key){ //updating values for index[0]
    this.buckets[index].val = val;
  }
  else{
    var currentNode = this.buckets[index];
    while(currentNode.next){
      if(currentNode.next.key == key){ //updating values
        currentNode.next.val = val;
        return;
      }
      currentNode = currentNode.next;
    }
    currentNode.next = new hashNode(key, val);
  }
};

hashTable.prototype.get = function (key) {
  var index = this.hash(key)
  if(!this.buckets[index]){
    return null;
  }
  else{
    var currentNode = this.buckets[index];
    while(currentNode){
      if(currentNode.key === key){
        return currentNode.val;
      }
      currentNode = currentNode.next;
    }
  }
  return null;
};


hashTable.prototype.getAll = function () {
  var newArr = [];
  if(!this){
    return null;
  }
  for(var i = 0; i < this.numBuckets; i++){
    if(this.buckets[i]){
      var currentNode = this.buckets[i];
      while(currentNode){
        newArr.push(this.buckets[i]);
        currentNode = currentNode.next;
      }
    }
  }
  return newArr;
};
 var myHT = new hashTable(30);


  myHT.insert('Sarrah', 'Sarrah@gmail.com')
  myHT.insert('Jon', 'jon@gmail.com')
  myHT.insert('Alex', 'Alexander@gmail.com')

 console.log(myHT.getAll())
