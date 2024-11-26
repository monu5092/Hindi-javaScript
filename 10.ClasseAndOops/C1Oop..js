 const user = {
    username:"Monu",
    loginCount: 8,
    signedIn: true,
     
    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`Username: ${this.username}`);
        //console.log(this); // this return current contesxt
    }

 }
 //console.log(user.username);
 //console.log(user.getUserDetails());
 //console.log(this);// here this return empty

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn
    return this
}

const userOne = new User("Monu",12,true);
const userTwo = new User("ChaiAurCodde",11,false); 
console.log(userOne);
console.log(userTwo);
