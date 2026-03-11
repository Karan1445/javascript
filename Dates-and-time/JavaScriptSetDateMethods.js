// JavaScript Set Date Methods
const date=new Date(2004,7,18);
console.log(date.getMonth())
const e1=date.setFullYear(2005)
console.log(e1)
const e2=date.setFullYear(2005,3,14)
const datee2=new Date(e2)
console.log(datee2)
const e3=date.setMonth(3)
console.log(e3)
const e4=date.setDate(14)
const e5=date.setHours(11)
const e6=date.setMinutes(5)
// date comparision

const c=new Date()
const c1=new Date()

if(c>c1){
    console.log("yes")
}else{
    console.log("no")
}

c1.setFullYear(2021)


if(c>c1){
    console.log("yes")
}else{
    console.log("no")
} 
