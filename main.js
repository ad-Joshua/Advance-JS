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
//     console.log(`my name is a ${this.name}`)
//   },
//   }

//   function sayMyName(){
//     console.log(`My name is ${this.name}`)
//   }

//   sayMyName.call(person)

//-----------------------------
//new binding

// function person(name){
//  //this={}                                                  //this is a constructor function
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

// class Person{
//   constrctor(fName, LName){
//     this.fName= fName
//     this.LName=LName
//   }
//   sayMyName(){
//     return this.fName +' '+ this.LName
//   }
// }

// const classP1 = new Person('Bruce', 'Wayne')
// console.log(classP1.sayMyName())

// class SuperHero extends Person{
//   constructor(fName, LName){
//     super(fName, LName)
//     this.isSuperHero = true
//   }
//   fightCrime(){
//     console.log('Fighting Crime')
//   }
// }

// const batman = new SuperHero('Bruce', 'Wayne')
// console.log(batman.sayMyName()

//-----------------------------------------------------
//call back

// const posts = [{title:'first post', content: 'this is my first post'},
//               {title:'second post', content: 'this is my second post'}]

// function getPost(){

//   setTimeout(()=>{
//     let output = '';
//     posts.forEach((post, index)=>{
//       output += `<li>${post.title}</li>`
//     })
//     document.body.innerHTML = output
//   }, 1000);
// }

//---error code----------------------

// function createPost(post){

//   setTimeout(()=>{
//     posts.push(post)
//   }, 2000)              js will comple the code from the 1st line and now it displays 1st 2 post on page
// }                       because getPost() is called earlier
//here we r also calling the createPost() but not displaying the 3rd post
//this is beacuse the page is already being printed in line 236

//getPost();
// createPost({title: 'third post', content: 'this is my third post'});

//---error code-----------------------

//function createPost(post, callback){

//   setTimeout(()=>{
//     posts.push(post)
//     callback();
//   }, 2000)
// }

// createPost({title: 'third post', content: 'this is my third post'}, getPost)

//----------------------------------------------------------------
//promises

// const posts = [{title:'first post', content: 'this is my first post'},
//               {title:'second post', content: 'this is my second post'}]

// function getPost(){

//   setTimeout(()=>{
//     let output = '';
//     posts.forEach((post, index)=>{
//       output += `<li>${post.title}</li>`
//     })
//     document.body.innerHTML = output
//   }, 1000);
// }

// function createPost(post){

//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       posts.push(post)
//       let error= false;

//       if(!error){
//         resolve()
//       }else{
//         reject('there is an error')
//       }
//       }, 2000)

//   })
// }

// createPost({title: 'third post', content: 'this is third post'})
// .then(getPost)
// .catch(err => console.log(err))

//--promise all-----

// const promise1 = Promise.resolve("Hello world");
// const promise2 = 10
// const promise3 = new Promise((resolve, reject)=>{
//  setTimeout(resolve, 2000, 'Good bye')
// })
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then((res)=>
// res.json())

// Promise.all([promise1,promise2,promise3, promise4]).then((value)=>console.log(value))

//-----------------------------------------------------------------------
//Async/ Await

// const posts = [
//   { title: "first post", content: "this is my first post" },
//   { title: "second post", content: "this is my second post" },
// ];

// function getPost() {
//   // setTimeout(() => {
//   //   let output = "";
//   //   posts.forEach((post, index) => {
//   //     output += `<li>${post.title}</li>`;
//   //   });
//   //   document.body.innerHTML = output;
//   // }, 1000);
//   let output = "";
//   posts.forEach((post, index) => {
//     output += `<li>${post.title}</li>`;
//   });
//   document.body.innerHTML = output;
// }

// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);
//       let error = false;

//       if (!error) {
//         resolve();
//       } else {
//         reject("there is an error");
//       }
//     }, 5000);
//   });
// }

// async function init() {
//   await createPost({ title: "third Post", content: "this is the third post" });

//   getPost();
// }

// init();

//async/ await with fetch

// async function fetchUsers(){

//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//  const data = await res.json();
//  console.log(data);
// }

// fetchUsers();

//====================
// A function that simulates an asynchronous operation
// function asyncOperation() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('Async operation completed');
//     }, 2000);
//   });
// }

// // An async function using async/await
// async function performAsyncTask() {
//   console.log('Task started');

//   try {
//     // Using await to wait for the asynchronous operation to complete
//     const result = await asyncOperation();
//     console.log(result);
//   } catch (error) {
//     console.error('Error:', error);
//   }

//   console.log('Task completed');
// }

// // Calling the async function
// performAsyncTask();

//===================================
async function parallelAsyncTasks() {
  try {
    const [result1, result2] = await Promise.all([
      asyncOperation1(),
      asyncOperation2(),
    ]);
    console.log("Result 1:", result1);
    console.log("Result 2:", result2);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function asyncOperation1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Async operation 1 completed"), 1500);
  });
}

async function asyncOperation2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Async operation 2 completed"), 1000);
  });
}

parallelAsyncTasks();
