//map

var mp=new Map();


mp.set("one","Srilanka");
mp.set("two","USA");
mp.set("three","Bangladesh");

//mp.delete("one")
console.log(mp.get("one"))
for(let item of mp.keys()){
  console.log(item)
}

if(mp.has("one")){
  console.log("OK")
}else{
  console.log("NO")
}