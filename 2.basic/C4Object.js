/*---------OBJECT Literals OR Singleeton */

//const tinderUser = new Object() // singleton object
const tinderUser ={} // literal object 

//Note => literal object is become singleton 
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false


// console.log(tinderUser);

const regualarUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname: {
            firstname:"Monu",
            lastname:"Kumar"
        }
    }
}

//console.log(regualarUser.fullname.userfullname.firstname);

const obj1={1: "a", 2: "b"}
const obj2={3: "a", 4: "b"}
const obj4={5: "a", 6: "b"}


//const obj3 ={obj1, obj2}

//const obj3=Object.assign({},obj1,obj2,obj4)

const obj3 ={...obj1,...obj2,...obj4}
console.log(obj3);

const users =[
    {
        id:1,
        email: "h@hmail.com"
    },
    {
        id:2,
        email: "m@hmail.com"   
    },
    {
        id:3,
        email: "n@hmail.com"   
    }
]

users[1].email
 console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));



//tommrow  start from L18


const course ={
    coursename :"js in hindi",
    price: "9999",
    courseInstructor:"Hitesh"
}
 
// course.courseInstructor

const {courseInstructor : Instructor} = course
console.log(Instructor);

// {
//     "name" : "hitesh",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }