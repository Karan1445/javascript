   // const is hoisted and we can not change value of const but inside array we can change it

const arr=[1,2,3,4] 

console.log(arr)

arr.push(1)

console.log(arr)

const x=10;

// now the x vlaue is 10 fixed we cannot do x=11 after its declartion

// x=12; typeerror addigment to constat variable
//its hoisted but return the refrance error

// also a block scope or function scope
