/*
Spinal Tap Case

Convert a string to spinal case. 
Spinal case is all-lowercase-words-joined-by-dashes.


eg:
spinalCase("This Is Spinal Tap") 
should return "this-is-spinal-tap".

Author :Jason
Date 2016/07/03
**/


function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  //convert the first letter to lower!No matter what
  
  var regx=/[A-Z]/g;
  var reg=/\s|_|-/g;// \s
  var regex=/-{2}/g;
  
  var jude=str.match(reg);
  var m_str;
  var result;
  
  
  //convert!! Important!
  var x=str.charAt(0).toLowerCase();
  str=str.replace(/[A-Za-z]/,x);
  
  
  //match A-Z and replace it with -
  function upperToHyLower(match){
    return '-'+match.toLowerCase();
  }
  
 
  var x_str=str;//=str.toLowerCase();
  x_str=x_str.replace(regx,upperToHyLower);
  //result=x_str;
  result=x_str.replace(reg,'-');
  result=result.replace(regex,'-');
  result=result.toLowerCase();
  console.log(result);
  return result;
}

spinalCase('This Is Spinal Tap');
