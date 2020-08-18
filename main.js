//inheritance

class test{

  prr(){
    console.log("Hello testing")
  }

}

class test2 extends test{
  em(){
    super.prr()
  }
}


var obj=new test2();

obj.em()