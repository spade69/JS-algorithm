
/**
Remove all elements from the initial array that 
are of the same value as these arguments.
such as "racecar", "RaceCar", and "race CAR" 

eg:
destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].

Author:Jason
Date:2016/06/30
***/

function destroyer(arr) {
  // Remove all the values
  var y_arr=[];
  var flag=true;//Boolean(1);
  for(var j=1;j<arguments.length;j++){
    y_arr.push(arguments[j]);  
  }
  
  function judge(val){
    //this judge function will be execute many times. Becasue filter will process every element
    flag=true;//important, filter will be called n times. n equals to the length of the arguments[0]
    
    for(var i=0;i<y_arr.length;i++){
      //y_arr.push(arguments[i]);
      if(y_arr[i]===val){
        console.log(y_arr);
         flag=false;
      }       
    }
    if(flag)
    return val;
  }
  
  //console.log(arguments.caller);// caller 已经不建议使用了
  
  var x_arr=arguments[0].filter(judge);
  console.log(x_arr);
  return x_arr;
}