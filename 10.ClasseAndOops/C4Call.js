function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username,emails,password){
    SetUsername.call(this,username)

    this.email = this
    this.password = password
}

const chai = new createUser("chai","chai@fb","123")
console.log(chai)
