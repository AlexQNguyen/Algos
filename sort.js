function bubbleSort(arr){
  for(var i= arr.length-1; i > 0; i--){
    for(var k= 0; k < i; k++){
      if(arr[k]>arr[k+1]){
        var temp = arr[k];
        arr[k] = arr[k+1];
        arr[k + 1] = temp;
      }
    }
  }
  return arr;
}

function selectionSort(array){
  for (var i = 0; i < array.length; i++) {
    var min = i;
    for (var k = i+1; k < array.length; k++) {
      if(array[k] < array[min]){
        min = k;
      }
    }
    var temp = array[min];
    array[min] = array[i];
    array[i] = temp;
  }
  return array;
}


//////testing Zone ////////

var random =

function random(){
  var array= [];
  for(var i=0; i<50000; i++){
      array[i] = Math.floor(Math.random()*5000);
      array.push(array[i]);
  }
  return (array);
}

 var arr1 = random();

bubbleSort(arr1);
