// function addTwoNumbers(num1,num2){
//     console.log(num1+num2) // this is printing not storing anything or returning 
// }

function addTwoNumbers(num1,num2){
    // let result=num1+num2
    // return result
    return num1+num2
}
const result =addTwoNumbers(3,5)
// console.log("Result: ",result)
 
function loginUserMessage(username){
    if(username === undefined){ // or !username
        // console.log("Enter the username");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());

function calculatePrice(...num1){ // by spreading or resting we will get a array of all numbers
    return num1
}
console.log(calculatePrice(200,400,500));

const user={
    username: 'Arjoo',
    price: 20000
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user) 
handleObject({
    username:'Umesh',
    price:30000
})

const arrValue=[100,200,300,400]
function secondValue(getArray){
    return getArray[1]
}
console.log(secondValue(arrValue));
console.log(secondValue([10,20,40,50]))

