console.log("I am a tutorial on loops");

// Basic for loop  

let a=1;

for(let i=0;i<10;i++){
    // console.log(a+i);
}

let obj={

    name:"Kash",
    role:"software Developer",
    company:"Google"
}

// forin loop 

// Basically used for showing a single key value in object 
for(const key in obj){
    
    console.log(key)
}


// for-of loop 
// Basically used for array as it is an iterator 

for (const c of "K A SUBRAMANIAN"){
    console.log(c)
}


// while loop 

let k=1;

while (k<6) {
    console.log(k)
    k++;
}

let l=10;
do{
    console.log(l)

}while(l<2);