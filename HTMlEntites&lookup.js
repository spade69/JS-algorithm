/*
Convert HTML Entities 

Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities.


eg:
convertHTML("Dolce & Gabbana") 
should return Dolce &​amp; Gabbana.

Author :Jason
Date 2016/07/02
**/

//reference:https://dev.w3.org/html5/html-author/charref
//&amp  & 
//&lt  <   &gt >  
//&quot " &apos '
function convertHTML(str) {
  // &colon;&rpar;
  var reg=/[&<>"']/g;
  var m_str;
  var x_str;
  var lookup={
    "&":'&amp;',
    "<":'&lt;',
    ">":'&gt;',
    '"':'&quot;',
    "'":"&apos;"
  };
  m_str=str.match(reg);//如果没有match到就return null
  if(m_str===null){
    return str;
  }
  console.log(m_str);
  //替换法,每次更新循环replace  it's < < --> it's &lt; < --> it's &lt;&gt;
  x_str=str;
  for(var i=0;i<m_str.length;i++){
    var new_str=x_str;
    x_str=new_str.replace(m_str[i],lookup[m_str[i]]);//只替换了第一个
    
  }
  
  //console.log(x_str);
  return x_str;
}

convertHTML("Dolce & Gabbana");
convertHTML("abc");

