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