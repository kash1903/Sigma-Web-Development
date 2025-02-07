
// What will this console.log statement print ?
console.log("har\"".length);
// ans 4

// Explore the include ,startsWith, endsWith function of String ?

let a="Kash";

console.log(a.endsWith("sh"))
console.log(a.startsWith("ka"))

console.log(a.includes("hello"))

// Question 3 convert the string to lower case ? 
let b="Mohan"

console.log(b.toLowerCase())

// Question 4 extract the amount from the string 
// "please give rs 1000 "

let c="please give rs 1000";

console.log(c.slice(15,19))

// Question 5 try to replace the 4 th character of the given string were you able to do it ? 

// you cannot change the String value as strings are immutable 
let d="karen"
console.log(d)

console.log(d.replace("e","a"))

console.log(d)

d[3]=a;
console.log(d)
