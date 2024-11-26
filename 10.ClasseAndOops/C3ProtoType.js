// let myName="Monu   "
// let myChannel = "chai    "

// console.log(myName.trueLength);


let myHero=["thor","spiderman"]


let heroPower={
       thor:"hammer",
       spiderman: "sling",

       getSpiderPower: function(){
        console.log(`Spidey power is ${this.spiderman}`);
       }
}

Object.prototype.monu= function(){
    console.log('monu is present in all objects');
}

//heroPower.monu()
//myHero.monu()
//myHeros.heymonu()
//heroPower.monu()


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"monu".trueLength()
"monu".trueLength()