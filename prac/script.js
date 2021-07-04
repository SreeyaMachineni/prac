const userA ={
    name:'sreeya',
    age:50,
    getDetails: ()=>{
        console.log('im '+this.name+' im '+this.age+' years old')
    }
}



const hobby = function(hobby){
    console.log(this.getDetails()+' and i do'+hobby)
}

// console.log(hobby())
// hobby.call(user,'surfing')
// console.log(user.getDetails().bind(this))
// console.log(getDetails.call(user))
// console.log(user.getDetails(),'arrow func')
// hobby.call(user,'surfing')


const user1={
    name:'sai',
    logNameAF:()=>{
        console.log(this.name,'af')
    },
    logNameNF(){
        console.log(this.name,'nf')
    }
}
// user1.logNameAF.bind(user1)
// user1.logNameNF()


// ARROW FUNCTIONS VS NORMAL FUNCTIONS
// 1.in case of arrow functions, we cannot create object using new
// 2.implicit return for arrow functions
// 3.af dont have their own this
//4.args are not directly available in af except with spread op

// -> function expressions are not hoisted

//js vs nodejs


//closures
var counter = function(){
    var count = 0;
    function changeByVal(val){
        count += val
    }
    return {
        increment:function(){
            changeByVal(1)
        },
        decrement:function(){
            changeByVal(-1)
        },
        value:function(){
            return count
        }
    }
}

// var counter1 = counter()
// var counter2 = counter()
// counter1.increment()
// counter1.increment()
// console.log(counter1.value())

// function varlet(){
//     var a = 10;
//     if(a == 10){
//         let b = 5;
//         var c = 15
//     }
//     console.log(c,'b,c')
// }  
// varlet() 



// var obj = {
//     message: 'Hello',
//     innerMessage: function () {
//          var self = this;
//       function a() {
//         console.log(self.message);
//       };
      
//     }
//   };
//   console.log(obj.innerMessage());


  //cloning object
//   has its own merits and demerits

  //shallow
//   Shallow cloning copies the top level properties of an Object,keeping the reference to the original/source
//   object intact. It doesnt clone the nested properties of an object
//   Ways to shallow clone an object
//   1.Spread operator -- deep copy
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
// user.prototype.canSing = function(){return false}

let userB = {...user}
userB.name = 'lilla'
console.log(userB,'------spread')
// console.log(user.name,userB.name)
// userB.printName()


function Employee() {
    this.name = "Mayank";
    this.age =  20;
}

Employee.prototype.showData = function() {
    console.log("User Name: " + this.name)
}
var userDetails = new Employee();
const destUser = {...userDetails}
console.log(destUser,'----------ddfdf-----------------')

//spread operator skips enum false props
//doesnt copy prototype functions
const object1 = {};
Object.defineProperty(object1, 'property1', {
  value: 42,
  enumerable: false
});
let object2 = {...object1}



//it doesnt copy the parent class information to the destination object.
class Parent{
    foo(){
        return 'foo'
    }
}
class Child extends Parent{
    bar(){
        return 'bar'
    }
}
const source = new Child()
source.xyx = function(){
    return 'xyz'
}
const destination = {...source}
console.log(destination,'------destination-----')

// overrides the existing properties that are defined prior to the object.
const car = {name:'default name',model:'default model',hasBreaks:true}
const unknownCar = {name:null,model:null,...car}

console.log(unknownCar,'benz')






// ->copies all the properties including nested ones from source to destination object2.However, 
//   the properties that are not enumerable are skipped.
// ->
// console.log(user.printName())
// console.log(userB.printName())

// ***********************************************************************************
//object.assign()
let userOA = {
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

let newUOA = Object.assign(userOA)
// console.log(newUOA,'-------------------')



const objectO = {};
Object.defineProperty(objectO, 'property1', {
  value: 42,
  enumerable: false
});
let object2O = Object.assign({},objectO)
// it's quite analogous to spread operator
//however, it copies the parent class information to the destination object

class Parent1{
    foo(){
        return 'foo'
    }
}
class Child1 extends Parent{
    bar(){
        return 'bar'
    }
}
const source1 = new Child1()
source1.xyx = function(){
    return 'xyz'
}
const destination1 = Object.assign(source1)
console.log(destination1,'------destination-----')
const destUser2 = Object.assign(userDetails)
console.log(destUser2,'-----assuser')
// shows the prototype methods
// ****************************************************************************************

//for-in loop--------shallow copy
var s1 = {
    name:'lilly',
    role:'SE',
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
    getEmpData:function(){
        return 'name : '+this.name+' role :'+this.role
    }
}
let dest = {}
for(i in s1){
    dest[i] = s1[i]
}

dest.name = 'changed'
console.log(dest,'--nested')

const o1 = {};
Object.defineProperty(o1, 'property1', {
  value: 42,
  enumerable: false
});
let o2 = {}
for(i in o1){
    o2[i] = o1[i]
}
console.log(o2,'enum false')
//copies all nested properties including nested function
//doesnt copy non-enum propes

// 


  
				



