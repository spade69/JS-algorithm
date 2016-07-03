/*
Search and Replace
Perform a search and replace on the sentence using 
the arguments provided and return the new sentence.

Meanwhile, you shoule keep the parttern
eg:myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
"He is Sitting on the couch"

Author :Jason
Date 2016/07/02
**/


function myReplace(str, before, after) {
  var arr=str.split(" "); 

  var before_x=before.split("");
  var index=arr.indexOf(before);
  var newaf;
  //var newstr=str.replace(before,after);
  //if(arr[index].toString().charAt(0).toUpperCase()===before_x[0])
  if(arr[index][0].toString().toUpperCase()===before_x[0]){
    console.log(before_x[0]);
    newaf=after.replace(/[a-zA-Z]/,after[0].toUpperCase());
    console.log(newaf);
  }
  else{
    newaf=after;
  }
  var newstr=str.replace(before,newaf);
  return newstr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");