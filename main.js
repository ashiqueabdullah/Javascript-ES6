//simple function
function simple(){
  var x=10;
  var y=20;
  console.log(x+y)
}
simple();

//parameterized function
function para(a,b){
  console.log(a+b);
}
para(10,20);

//rest parameter function 
function par(...x){
  console.log(x);
}
par(1,2,3,4)

// return function
function retn(){
  return "Ashique Abdullah"
}

function retn2(){
  return "Name= "
}
console.log(retn2()+retn())

//Anonymous function
var name=function(nam){
  console.log("My name is "+nam);
}
name("Ashique Abdullah")

//Arrow function
var testfucn=(value)=>{
  console.log("Hello Hello "+value+" Hello")
}
testfucn("Arrow function testing");