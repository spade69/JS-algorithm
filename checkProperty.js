
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  var re=myObj.hasOwnProperty(checkProp);
  console.log(re);
  if(re)
  {
  	console.log(checkProp);
  	return myObj[checkProp];
  }
  else
    {
  return "Not Found";}
}

// Test your code by modifying these values
var result=checkObj("gift");
console.log(result);