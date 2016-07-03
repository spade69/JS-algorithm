/*
Make a function that looks through an array of objects (first argument)
 and returns an array of all objects that have matching property and 
 value pairs (second argument). Each property and value pair of 
 the source object has to be present in the object from the collection 
 if it is to be included in the returned array.


*/
//using every and filter version
function whatIsInAName(collection,source){
	var keys=Object.keys(source);
	return collection.filter(function(obj){
		return keys.every(function(key){
			return obj.hasOwnProperty(key)&&obj[key]===source[key];
		});
	});
}


//easy understood version  but inefficient
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  var prop=[];
  // Only change code below this line
  var num=Object.keys(collection);
  var s_num=Object.keys(source);

  for(var props in source){
    prop.push(props);
  }
    
  var len=prop.length;

  //console.log(prop);//0 1 2
  //O(n2) solution...
  for(var i=0;i<num.length;i++){
    var tmp=collection[num[i]];
    var j=0;
    var flag=0;
    while(j<len){
      if(tmp.hasOwnProperty(prop[j])){
        if(tmp[prop[j]]===source[prop[j]])
         flag++;
      }
      j++;
    }
    if(prop.length==flag)
    arr.push(tmp);
  }
  console.log(collection[num[0]]);
  //console.log(arr);
  // Only change code above this line
  return arr;
}

//testing 
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });