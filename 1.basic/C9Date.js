let myDate = new Date()
console.log(myDate.toString()); // Its returns Present date in IST
console.log(myDate.toDateString());// Its simple REturn date
console.log(myDate.toLocaleString());// Its return date and Time


// decleration of the date

// let myCreateddate = new Date(2023,0,23)
// console.log(myCreateddate.toDateString())
// let myCreateddate = new Date("2023-01-12")

let myCreateDate=new Date("01-14-2023")
// console.log(myCreateddate.toLocaleDateString())

let myTimeStamp=Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

   let newDate = new Date()
   console.log(newDate);
   console.log(newDate.getMonth());
   console.log(newDate.getDay()); // return the day of the week

 //  `${newDate.getDay()} and the time`

   newDate.toLocaleString('default',{
      weekday:"long",
      timeZone:'IST'
   })