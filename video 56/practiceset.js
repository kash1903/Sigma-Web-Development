
// Question 1 Wheather the age of the person lies between 10 & 20 

let age=21;

if(age>=10 && age <=20){

    console.log("you are sharp")
}

else{
    console.log("you are not sharp")
    
}

// Question 2 Demonstrate switch case

let day=1;
let dayname;

switch(day){

    case 1:console.log("Go to office");
    break;

    case 2:console.log("Enjoy")
    break;

    case 3:console.log("Work")
    break;

    default : console.log("Nothing")



}
console.log(1)

// Question 3
// wheather a number is divisible by 2 and 3

let a=5;

if(a%2==0 && a%3==0){
    console.log(a + " is divisible by both 2 & 3")
}

else{
    console.log("not divisible")
}

// Question 4

// wheather a number is divisible by either 2 and 3

let b=8

if(b%2==0){
    console.log("b is divisble by 2 hence")
}

if(b%3==0){
    console.log("b is divisble by 3 hence")
}
if(b%2==0 || b%3==0){
    console.log(b + " is divisible by either 2 & 3")
}
else{
    console.log("not divisible")
}

// Quesiton 5
// use terenary operator

let age1=18;

age1>=18 ? console.log("Eligible for voting") : console.log("not eligible");\



