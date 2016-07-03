/*
Sorted Union
Write a function that takes two or more arrays and returns a new array 
of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included
 in their original order, but with no duplicates in the final array.


eg:
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) 
should return [1, 3, 2, 5, 4].

Author :Jason
Date 2016/07/02
**/


function uniteUnique(arr) {
    var x_arr=[];
    for(var j=0;j<arguments.length;j++){
        x_arr.push(arguments[j]);  
    }
  
    var result=x_arr.reduce(function(a,b){
      b=b.filter(function(val){
           if(a.indexOf(val)===-1)
             return val;
      });
      console.log(b);
      return a.concat(b);
    });
  
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);