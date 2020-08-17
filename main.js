
//rest parameter 
test(1,2,3,4,5);
function test(...recive){
  let sum=0;
  for(let i of recive){
    sum=sum+i;
  }
  console.log(sum);
}

