//inheritance

class test{

  prr(){
    console.log("Hello testing")
  }

}

class test2 extends test{
  prr(){
    console.log("Hoise")
  }
}


var obj=new test2();

obj.prr()