/*
Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Correct usage of String.fromCharCode()
and  String.prototype.charCodeAt()!!

eg:
fearNotLetter("abce") should return "d".

Author :Jason
Date 2016/07/02
**/

/*[65,91)*
A-Z
[97,123)
a-z
************/
function fearNotLetter(str) {
  var arr=str.split("");
  var result=[];
  var initial=str.charCodeAt(0);
  var end=str.charCodeAt(arr.length-1);
  var point;
  
  //fromCharCode can only transfer a char every time, not a string,not a array!
  for(var index=initial;index<=end;index++){
    result.push(String.fromCharCode(index));//result is string
  }  
  //console.log(result);
 
  for(var i=0;i<result.length;i++){
    if(result[i]!==arr[i]){
      point=i;
      break;
    }
  }
  
  
   console.log(result[point]);
  
 // var x_str=result.join("");
  return result[point];
}

fearNotLetter("abce");
