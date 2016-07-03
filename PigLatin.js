/*
Pig Latin 
Pig Latin takes the first consonant (or consonant cluster) of an English word, 
moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

eg:
translatePigLatin("california") 
should return "aliforniacay".

Author :Jason
Date 2016/07/02
**/

//a e i o u!
/*
constant 
vowel 
*/
function translatePigLatin(str) {
  var arr=str.split("");
  var firstConstant=str.match(/[aeiou]/i);
  var index=arr.indexOf(firstConstant[0]);
  var result;
  //console.log(index);
  var b_str=str.substr(0,index);
  var x_str=str.substr(index);
  console.log(b_str);
  if(index!==0)
  {result=x_str.concat(b_str,"ay");}
  else{
    result=x_str.concat(b_str,"way");
  }
    
  //console.log(result);
  return result;
}

translatePigLatin("consonant");
translatePigLatin("algorithm");