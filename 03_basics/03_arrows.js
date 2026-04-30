const user={
    username:'Arjoo',
    price:2000,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`) //this gives current context
        //in this scope we can acccess variables by using this
       // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username='Umesh'
// user.welcomeMessage()

console.log(this) // give empty object because all variables are out of scope
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }


//arrow function
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()



// const addTwo = (num1, num2) => { //if we use curly braces then return is used
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2  //implicit return 

// const addTwo = (num1, num2) => ( num1 + num2 ) //if parenthesies is ussed then not need of return 

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()