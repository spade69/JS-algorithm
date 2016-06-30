/*
Author :Jason
Date 2016/6/30
**/
function rot13(str) { // LBH QVQ VG!
  //想对字符串每一个元素操作，还是转换成数组操作好，用str[i]有问题
  var arr=str.split("");
  var newStr=[];
  arr.forEach(function(letter,index){
    var letterCode=str.charCodeAt(index);
    if(letterCode<78&&letterCode>=65&&letterCode<91){
      letterCode=letterCode+26-13;
      
    }else if(letterCode>=65&&letterCode<91){
      letterCode=letterCode-13;
    }
    newStr.push(String.fromCharCode(letterCode));
  });
  
  str=newStr.join("");
  
  return str;
}