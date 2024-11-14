const myObject ={
    js: 'javaScript',
    cpp: 'C++',
    rb: "ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
  //  console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","rb","py","java","cpp"]

for(const key in programming){
   //  console.log(programming[key]);
}

// const map = new Map()  // maps are not itrible so its not can be used in loop
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('UK',"United KingDom")

// for (const key in map) {
//     console.log(key);
// }
