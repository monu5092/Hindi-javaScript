   //this is global scope
  let a =300

   if(true){
      // this is block  scope
      let a = 10
      const b = 20
      var c = 30
     //   console.log(a);

   }


   //console.log(a);
   //console.log(b);
   //console.log(c);

   function one(){
    const username = "Monu"
    function two(){
         const website ="youtube"
         console.log(username);
    }
   // console.log(website);
      two()
 }

 //one()

//  if(true){
//     const username ="Monu"
//     if(username === "hitesh"){
//         const website ="youtube"
//         //console.log(username+website);
//     }
//    // console.log(website);  // its give error due to block scope
//  }
 //console.log(username);   // ites give error due to block scope



 //++++++++++++++++++++++++++ Interesting +++++++++++++


 console.log(addone(5))
 function addone(num){
    return num+1;
 }
 
// its give error
 addTwo(5)
 const addTwo = function(num){
    return num+2
 }
 