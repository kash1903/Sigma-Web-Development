function color(colorname){
    console.log("car is " + colorname + " color" );
}

color("red");

function division(a,b){
    // console.log(a/b);
    return a/b;
}



result=division(10,2)

console.log(result)


// This is an arrow function 
// It allows you to write shorter function syntax 
let sum=(x,y)=>{
    let c=x-y;
    return c;
}

result= sum(10,2);
console.log(result)
