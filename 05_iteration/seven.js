const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})


//chaining map ke baad map ,then map ke baad filter 
const newNums = myNumers
                .map((num) => num * 10 ) // result of this(arr) pass to the next chain
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);