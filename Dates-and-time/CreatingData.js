const d=new Date();
console.log(d)
// Output is 2026-03-09T16:04:42.418Z

const example1=new Date("Augest 18,2025")
console.log(example1)

const example2=new Date("2004-08-18")
console.log(example2)

const example3=new Date(2004,7,18);
console.log(example3)

//  year, month, day, hour, minute, second
const example4=new Date(2004,7,18,12,12,12)
console.log(example4)

const example5=new Date(2004,8)
console.log(example5)

const example6=new Date(2004)
console.log(example6)//it will treated as MiliSecound

const example7 = new Date(9,11,2)
console.log(example7)

// 01- January 1970 plus 8000 milliseconds
const example8=new Date(8000)
console.log(example8)

// 02- January 01 1970 minus 8000 milliseconds
const example9=new Date(-8000)
console.log(example9)

// January 01 1970 plus 24 hours
const example10=new Date(24*60*60*1000)
console.log(example10)

// plus 0ms
const example11=new Date(0)
console.log(example11)

// -----------------------------------Date Methods

const date1=new Date();
console.log(date1.toString())

const date2=new Date();
console.log(date2.toDateString())

const date3=new Date();
console.log(date3.toUTCString())

const date4=new Date();
console.log(date4.toISOString())

const date5=new Date();
// --outputs
// 2026-03-09T16:18:23.632Z
// 2025-08-17T18:30:00.000Z
// 2004-08-18T00:00:00.000Z
// 2004-08-17T18:30:00.000Z
// 2004-08-18T06:42:12.000Z
// 2004-08-31T18:30:00.000Z
// 1970-01-01T00:00:02.004Z
// 1909-12-01T18:30:00.000Z
// 1970-01-01T00:00:08.000Z
// 1969-12-31T23:59:52.000Z
// 1970-01-02T00:00:00.000Z
// 1970-01-01T00:00:00.000Z
// Mon Mar 09 2026 21:48:23 GMT+0530 (India Standard Time)
// Mon Mar 09 2026
// Mon, 09 Mar 2026 16:18:23 GMT
// 2026-03-09T16:18:23.661Z
