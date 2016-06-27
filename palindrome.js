
/**
Return true if the given string is a palindrome. 
Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way
 both forward and backward, ignoring punctuation, case, and spacing.

such as "racecar", "RaceCar", and "race CAR" 

Author:Jason
Date:2016/06/27
***/
function palindrome(str) {
  // Good luck!
  var reg=/[^0-9a-zA-Z]/ig;
  var strx=str.replace(reg,"").toLowerCase();
  //console.log(strx);
  var arr=strx.split("");
  var t_str=arr.join("").toString();
  var arrx=arr.reverse();
  var p_str=arrx.join("").toString();
  if(t_str===p_str)
  return true;
  
  return false;
}



palindrome("eye");