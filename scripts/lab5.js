console.clear()
var ran_nums = [];
for(i=0; i <1111; i++){
  ran_nums.push(Math.random());
}

console.log(ran_nums[75]);

function min(arr){
  var minI = 0;
  for(i=1; i <arr.length; i++ ){
    if(arr[i] < arr[minI]){
      minI=i
    }
  }
  return arr[minI];
}

function max(arr){
  var maxI = 0;
  for(i=1; i <arr.length; i++ ){
    if(arr[i] > arr[maxI]){
      maxI=i
    }
  }
  return arr[maxI];
}

function median(arr){
  arr.sort();
  return arr[arr.length / 2];
}

console.log("min", min(ran_nums));
console.log("max", max(ran_nums));
console.log("median", median(ran_nums));

function qsort(arr){
  if(arr.length == 1){
   return arr 
  }
  if(arr.length == 2){
    if(arr[1] > arr[0]){
      return arr;
    }
    else{
      return arr.reverse(); 
    }
  }
  return qsort(arr.slice(0, arr.length / 2)).concat(qsort(arr.slice(arr.length / 2)));
}

var i = 0;
var my_sorted = qsort(ran_nums);
var sorted = ran_nums.sort();
while(my_sorted[i] == sorted[i] & i < ran_nums.length){
  i++;
}
console.log("arrays are the same", i == ran_nums.length);


var tags = document.querySelectorAll("*");
for(i = 0; i < tags.length; i++){
  console.log(tags[i].tagName, document.getElementsByTagName(tags[i].tagName).length);
}