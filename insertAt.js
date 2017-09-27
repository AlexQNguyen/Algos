function insertAt(arr,index,num){
  for (var i =arr.length; i>index; i--){
    arr[i]=arr[i-1];
  }
  arr[index]=num;
  console.log(arr);
}
