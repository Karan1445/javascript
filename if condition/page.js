const name = null//set it to your name for diffrent result

if (name == "Karan") {
    console.log("Hello Karan")
} else {
    console.log("Hello Stranger")
}

const number = 25;

if (20 >= number) {
    console.log("Number is less than or equal to 20")
} else {
    console.log("Number is greater than 20")
}

console.log(20 > 100 ? "Number is greater than 100" : "Number is not greater than 100")

if (name == "Karan" && number == 25) {
    console.log("Name is Karan and number is 25")
} else if (name == "Karan" || number == 25) {
    console.log("Name is Karan or number is 25")
} else {
    console.log("Neither name is Karan nor number is 25")
}

switch (name) {
    case "Karan":
        console.log("Hello Karan") 
        break;
    default:
        console.log("Hello Stranger")
}

// && AND || or !not

console.log(name ?? "Hello Stranger")
// == or ===

console.log(0==="0")//false
console.log(0=="0")//true   

console.log(0===0)
