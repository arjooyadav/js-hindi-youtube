let myDate = new Date()
// console.log(myDate)

// console.log(myDate.toString())
// console.log(myDate.toLocaleString()) // with date and time
// console.log(myDate.toDateString()) // only date
// console.log(typeof myDate) //Object

let myCreatedDate=new Date(2026 , 0, 30) // in this syntax month starts form 0
// console.log(myCreatedDate)
// console.log(myCreatedDate.toDateString())

let newCreatedDate = new Date("2026-01-30") // in format of yyyy-mm-dd and month starts from 1
// console.log(newCreatedDate.toDateString())

//+++++++++++++++++++++++++++

let timeStamp = Date.now()
// console.log(timeStamp) //in millisec

// console.log(myCreatedDate.getTime()) //in millisecond (to compare with value of timestamp)
// console.log(Math.floor(Date.now()/1000))

let myDates= new Date()
console.log(myDates)
console.log(myDates.getDay())
console.log(myDates.getMonth())

myDates.toLocaleString('default',{
    weekday:'long' 
})
