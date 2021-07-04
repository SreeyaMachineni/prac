let user = {
    name:'lilly',
    mobile:'#123',
    email: 'sendlilly@gmail.com',
    address:{
        current:{
            state:'S1',
            city:'C1'
        },
        permanent:{
            state:'S2',
            city: 'C2'
        }
    },
    printName: function(){
        console.log('Im '+this.name)
    }
}

var destinationObject = {}
for(key in user) {
    destinationObject[key] = user[key]
}
destinationObject.name = 'new name'
console.log(destinationObject)




const objectO = {};
Object.defineProperty(objectO, 'property1', {
  value: 42,
  enumerable: false
});
let des = {}
for(key in objectO) {
    des[key] = objectO[key]
}
console.log(des,'sssssssssssss')


// const car = {name:'default name',model:'default model',milege:29}
// // const unknownCar = {name:'unknown',model:'unknown'}
// const c1 = {...car}
// car.name='dfgjkfg'
// console.log(car,'******************')

// const unknownCar = Object.assign({name:'unknown',model:'unknown'},car)
// unknownCar.name='identified'
// console.log(unknownCar,car)

// function Employee() {
//     this.name = "Mayank";
//     this.age =  20;
//     this.someFn = function(){
//         return 'abc'
//     }
// }

// Employee.prototype.showData = function() {
//     console.log("User Name: " + this.name)
// }

// var userDetails = new Employee();

// var destinationObject = {}
// for(key in userDetails) {
//     destinationObject[key] = userDetails[key]
// }
// console.log(destinationObject)

// const destUser = Object.assign({},userDetails)
// console.log(destUser,'------------------')
// var destinationObject = {}
// for(key in userDetails) {
//     destinationObject[key] = userDetails[key]
// }

// console.dir(destinationObject)

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
var destinationObject = {}
for(key in source1) {
    destinationObject[key] = source1[key]
}
// console.log(destinationObject)