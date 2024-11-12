//  primitive data type  is call by value data type

// 7:type : String,Number,Boolean,Null,undefined,Symbol,BigInt

// Js is dynamically typed languguage because its not need to declare the dataTypes of the variable

const score =100
const scoreValue=100.3


const  isLoggedIn =  false;
const  outsideTemp=null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id===anotherId)  // false

const bigNumber = 456787665979978878887n

//Reference type(Non Primitive)

// Array, Objects, Functions

const heros =["shaktiman", "naagraj", "doga"];
let myObj={
      name:"hitesh",
      age: 22,
}

// function can also treat as a datatype and its can store in variable 
  const myFunction = function (){
   // console.log("Hello world");
  }

  console.log(typeof score);


                 /* +++++++++++++++++++++++ Memories ++++++++++++++++++++ */

// Two memeory stack(Primitive) and heap(Non Primitive)
 

let myName ="Monu"
let anothername= myName

anothername="Mritunjay"

// console.log(myname);
// console.log(anothernam);

let userOne ={
    email :"user@google.com",  // heap not return copy of data its return reference of the original data
    upi : "user@ybl"
}
 let useTwo = userOne

  userTwo.email ="Monu@google.com"

//  console.log(userOne.email);
//  console.log(userTwo.email);





