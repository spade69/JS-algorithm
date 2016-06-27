/**
Return the provided string with the first letter of each word capitalized.
 Make sure the rest of the word is in lower case.
I'm a little tea pot
-->
I'm A Little Tea Pot

Author:Jason
Date:2016/06/27
***/

function titleCase(str) {
  var s_str=str.toLowerCase();
  var arr=s_str.split(" ");
  var r_str=[];
  
  for(var i=0;i<arr.length;i++){
    var tmp=arr[i][0];//charAt(i)
    var x=tmp.toString().toUpperCase();
    //console.log(x);
    var tmp_x=arr[i].replace(/[a-z]/,x);//加g和不加g的区别，加g就匹配到arr[i]的全部字符串
    //console.log(tmp_x);
    r_str.push(tmp_x);
  }
  
  //console.log(arr[0][0]);
  var x_str=r_str.join(" ").toString();
  console.log(x_str);
  return x_str;
}

titleCase("I'm a little tea pot");