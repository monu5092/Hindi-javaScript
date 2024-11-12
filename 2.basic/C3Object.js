  /* OBJECT*/ 
// there are 3 waye to generate object literals  1->literals,2->constructor,3->singleton
   // singleton
   //Object.create

/*  ---------OBJECT-LITERALS---------*/
  
   // In literals to declare object need key value pair 

const mySym = Symbol("Key1")// t

const JsUser  ={
    name: "Monu",
    "fullname":"Monu Kumar", // we can't access full using dot
   [mySym]: "myKey1",
    age: 18,
    location: "jaipur",
    email: "mun2022@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","saturday"]
}
 // console.log(JsUser.email)
//  console.log(JsUser["email"])//key is treates as String

//  console.log(JsUser["fullname"]);
//  console.log(JsUser[mySym])
 
JsUser.email ="mon2023@hmail.com" // this way we can change the Object elements value
//Object.freeze(JsUser) // Its stop to change the object

//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingtwo = function(){
    console.log(`Hello Js user, ${this.name}`); // converting string in backticks is called Striing interpolation
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());
