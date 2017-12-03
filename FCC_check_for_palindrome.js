
function palindrome(str) {
 var strManip = str.replace(/[\W_]/g,"").toLowerCase();
  
 if(strManip === strManip.split("").reverse().join("")) { return true;
}
else {return false;}}


palindrome("eye");