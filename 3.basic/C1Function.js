/*function can not be read be alone its read with memory management*/

function sayMyName(){
    console.log("M");
    console.log("O");
    console.log("N");
    console.log("U");
}
// sayMyName()

                    // parameters
//  function addTwoNumber(number1,number2){
//     console.log(number1+number2);
//  }
 //addTwoNumber(3,4)// arguments


 function addTwoNumber(number1,number2){
        // let result=number1+number2
        // return result;

        return number1+number2
  }

  const result=addTwoNumber(3,5)
  //console.log("Result: ",result);


  function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in` 
  }

//   console.log(loginUserMessage("Hitesh"))
//console.log(loginUserMessage()) // its return undefined


function calculateCartPrice(...num1){ // when we use rest operator its return array
   return num1
}

//console.log(calculateCartPrice(200, 400, 500))

const user ={
    username:"hitesh",
    price:199
}

function  handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleObject(user)

handleObject({
    username : "sam",
    price: 399
})

const myNewArray =[200, 400, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([200, 400, 500, 1000]));

// now I need to start global and local variable scope