/**
Check if a string (first argument, str) 
ends with the given target string (second argument, target).

eg:
1.confirmEnding("Bastian", "n") should return true.
2.confirmEnding("He has to give me a new name", "name") should return true.
Author:Jason
Date:2016/06/27
***/

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var len=str.length;
  var arr=str.split(" ");
  if(arr.length>1){
      var lenx=arr[arr.length-1].length;
      for(var i=0;i<lenx;i++){
        if(arr[arr.length-1].substr(i)===target)
          return true;
      }
       return false;
    //console.log(arr[len-1]);
  }
  else{
    if(target===str[len-1]){
      return true;
    }
    else
      return false;
  }
  return str;
}

confirmEnding("Bastian", "n");
