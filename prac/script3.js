var userInfo = {
    name: "Mayank",
    age: 31,
    designation: "Developer",
    address: {
      streetNumber: 10,
      city: "Delhi",
      country: "India"
    },
    getQuote:function(){
        return 'whatever'
    }
  }
var newObject = Object.create(userInfo);
console.log(newObject)

  
//   var stringifiedObject = JSON.stringify(userInfo);
  
//   var newDeepCopy = JSON.parse(stringifiedObject);
  
//   console.dir(newDeepCopy)

// const objectOx = {};
// Object.defineProperty(objectOx, 'property1', {
//   value: 42,
//   enumerable: false
// });
// // let des1 = {}
// var newObject = Object.create(objectOx);

// console.log(newObject)


class Parent1{
    foo(){
        return 'foo'
    }
}
class Child1 extends Parent1{
    bar(){
        return 'bar'
    }
}
const source1 = new Child1()
source1.xyx = function(){
    return 'xyz'
}
let unknownCar1 = Object.create(source1);
console.log(unknownCar1)





// var strgnObj = JSON.stringify(source1)
// var newDeepCopy = JSON.parse(strgnObj)
// console.log(newDeepCopy)

// function Employee() {
//     this.name = "Mayank";
//     this.age =  20;
// }

// Employee.prototype.showData = function() {
//     console.log("User Name: " + this.name)
// }
// let car = {name:'default name',model:'default model',milege:29}
// let unknownCar1 = {name:'unknown',model:'unknown'}

// unknownCar1 = Object.create(car);
// console.log(unknownCar1)