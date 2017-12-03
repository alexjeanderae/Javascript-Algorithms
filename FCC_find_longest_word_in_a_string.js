
function findLongestWord(str) {
  
 var storedList = str.split(' ');
  var longestCurrent = 0;
  
 for (i =0; i < storedList.length; i++) {
   
   if (storedList[i].length > longestCurrent) {
     
    longestCurrent = storedList[i].length;
   }
 }

  return longestCurrent;
}

findLongestWord("The quick brown fox jumped over the lazy dog");