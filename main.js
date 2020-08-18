//set
var st= new Set()


st.add("Names: ")
st.add("Ashique Abdullah")

//st.clear()
//st.delete("Names: ")
console.log(st)

var st2=new Set([1,2,3,4])
console.log(st2)
console.log(st2.size)
if(st2.has(1)){
  console.log("yes")
}else{
  console.log("No")
}