
function reverseString(str) {
var firstArray = str.split("");
secondArray = firstArray.reverse();
  
  str=secondArray.join('');
  return str;
}

reverseString("hello");
