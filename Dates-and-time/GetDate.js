// The new Date() Constructor

const date = new Date();
console.log(date)

console.log(date.getDate())
console.log(date.getDay())
console.log(date.getTimezoneOffset())//-330

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months[date.getMonth()])

console.log(Date.now()) 
