// so basically map => make change to all elements and return new array original is unchanged , 
// filter => selectively return some from main array , reduce => make a single value from whole array 
// , reducing into something ! is this the overall usecase ?

const arr = [1,2,3,4,5,6];

console.log(arr.reduce( (acc, val)=> acc + val , 10))

console.log(arr.map((num) => num * 2).map((num) => num / 2).filter((num) => num > 4))


// DOM
