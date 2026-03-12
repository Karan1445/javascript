// The new Date() Constructor

const date = new Date();
console.log(date)

console.log(date.getDate())//today date
console.log(date.getDay())//today day
console.log(date.getTimezoneOffset())//-330

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months[date.getMonth()])

console.log(Date.now())//the output
