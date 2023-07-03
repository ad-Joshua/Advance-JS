//nested function scope
// let a = 10
// function outer() {
//   let b = 20
//   function inner() {
//     let c = 30
//     console.log(a, b, c)
//   }
//   inner()
// }
// outer()
// console.log(c)// cant access variable b, c outside thier function

//////--------


// function outer() {
//   let b = 0
//   function inner() {
//     b++
//     console.log(b)
//   }
//   inner()
// }
// outer()
//outer()
///----------

// function outer() {
//     let b = 0
//     function inner() {
//       b++
//       console.log(b)                
//     }
//     return inner                     // in js we can return a function(method) from another function
//   }
//   const fn = outer()                   //fn is also a function
//   fn()
//   fn()
//------------------------------------------

// function sum(a,b,c){
//   return a+b+c
// }

// console.log(sum(1,2,3))
// const sum1 =sum(1,2,3)
// console.log(sum1)

//--------------------------------

// function sum(a,b,c){
//      return a+b+c
//    }

//            //console.log(sum(1,2,3))

// function curry(fn){
//   return function (a) {
//     return function (b) {
//       return function (c) { 
//         return fn(a, b, c)
//       }
//     }
//   }
// }


// const curriedSum = curry(sum)
// console.log(curriedSum(2)(3)(4))

//-------------------------------------
//this keyword

// function sayMyName(name){
//   console.log(`My name is ${name}`)
// }

// sayMyName('Joshua')
// sayMyName('Swaroop')

//-----------------
//implicit binding

// const person = {                            //person is an object which has keys and value pair in it.
//   name : 'Joshua',                          //when u invoke a function sayMyName using dot notation
//   sayMyName : function(){                  //the object to the left of dot is what this keyword is refering
//     console.log(`my name is ${this.name}`) //this.name is person.name
//   },
  
// }
//person.sayMyName()                            //a1.test

//---------------------------
//explicit binding

// const person = {                            //person is an object which has keys and value pair in it.
//   name : 'Joshua',
//   sayMyName : function(){
//     console.log(`my name is ${this.name}`)
//   },
//   }

//   function sayMyName(){
//     console.log(`My name is ${this.name}`)
//   }

//   sayMyName.call(person)

//-----------------------------
//new binding

// function person(name){ 
 //this={}                                                  //this is a constructor function
//   this.name=name
// }

// const p1= new person('Joshua')              //when we try to invoke a function using new keyword
// const p2 = new person('Swaroop')            //this keyword autoatically acts as a reference to new object

// console.log(p1.name,p2.name)

// //-----------------------
// //default binding

// globalThis.name='Joshua'
// function sayMyName(){
//   console.log(`My name is ${this.name}`)
// }

// sayMyName()

//-------------------------------------
//prototype

// function person(fName, LName){
//   this.fName=fName
//   this.LName=LName
// }

// const p1 = new person('Joshua', 'Swaroop')
// const p2 = new person('john', 'john')

// p1.getFullName = function(){
//   return this.fName + ' ' + this.LName
// }

// console.log(p1.getFullName())

// console.log(p2.getFullName())
//----------------------------

// function person(fName, LName){
//   this.fName=fName
//   this.LName=LName
// }

// const p1 = new person('Joshua', 'Swaroop')  // function which is used with the new keyword is call as constructor function
// const p2 = new person('john', 'john')

// person.prototype.getFullName = function(){   // define the getfullname function once and its available to every instance of person function
//   return this.fName + ' ' + this.LName
// }

// console.log(p1.getFullName())

// console.log(p2.getFullName())

//------------------------------
// function person(fName, LName){
//   this.fName=fName
//   this.LName=LName
// }
// person.prototype.getFullName = function(){  
//   return this.fName + ' ' + this.LName
// }

// function SuperHero(fName, LName){
//   //this{}
//   person.call(this, fName, LName)
//   this.isSuperHero = true
// }

// SuperHero.prototype.fightCrime = function(){
//   console.log('fighting crime')
// }

// SuperHero.prototype = Object.create(person.prototype)

// const batman = new SuperHero('Joshua', 'Swaroop')
// SuperHero.prototype.constructor=SuperHero
// console.log(batman.getFullName())

//------------------------------------
//class

class Person{
  constrctor(fName, LName){
    this.fName= fName
    this.LName=LName
  }
  sayMyName(){
    return this.fName +' '+ this.LName
  }
}

const classP1 = new Person('Bruce', 'Wayne')
console.log(classP1.sayMyName())

class SuperHero extends Person{
  constructor(fName, LName){
    super(fName, LName)
    this.isSuperHero = true
  }
  fightCrime(){
    console.log('Fighting Crime')
  }
}

const batman = new SuperHero('Bruce', 'Wayne')
console.log(batman.sayMyName())
