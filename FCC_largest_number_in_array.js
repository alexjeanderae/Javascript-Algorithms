
function largestOfFour(arr) {
 
var  biggestSub = [0 , 0 , 0 , 0];
  
  for ( var j = 0; j < 4; j++) {
  for ( var i = 0 ; i < 4 ; i++) {
    if (arr[j][i] > biggestSub[j]) 
    { 
      biggestSub[j] = arr[j][i];   
   }
  }
  }
  arr = [biggestSub[0] , biggestSub[1] , biggestSub[2] , biggestSub[3] ];
  return arr;

}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);