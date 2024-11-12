//   Array
const myArr=[0,1,2,3,4,5]  // array is resizeable in java but not be associative array

// its make shallow copy means share the same referennce

const myHerors=["Shaktimaan","nagraj"]

const myArr2 =new Array(1,2,3,4)
//console.log(myArr[0])

  // Array Method

//   myArr.push(6)
//   myArr.push(7)  //its add in last index

//   myArr.pop()  // No value need to give its remove last value

//  myArr.unshift(9) // its add in first index so we need to move all but its not optimize
//  myArr.shift()   // its remove first element 


// console.log(myArr.includes(9)); // its boolean type value
// console.log(myArr.indexOf(3));  

//const newArr = myArr.join();  // join change the datatype in string

//    console.log(myArr);
//    console.log(newArr);

  // slice , splice
  console.log("A ",myArr);

  const myn1 = myArr.slice(1,3);  // its create shallow copy not modified original array

  console.log(myn1);
  console.log("B ",myArr);


  const myn2 = myArr.splice(1,3)  //  its change the original array
  console.log("C ",myArr);
  console.log(myn2);