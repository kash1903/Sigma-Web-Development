// Business name generator

// Adjective 

// Crazy 
// amazing
// fire

// Shop name
// Engine 
// foods 
// garment

// Another word
// Bros limited hub 

let a= Math.random();
console.log(a)

let a1="Crazy"
let a2="Amazing"
let a3="Fire"

let part1;

if(a<=0.33  ){
    part1=a1;
}

else if(a>0.33 && a<0.66){
    part1=a2;
}

else if(a>=0.66 && a<1){
     part1=a3;
}

let b= Math.random();
console.log(b)

let sn1="Engine"
let sn2="Foods"
let sn3="Garments"

let part2;
if(b<=0.33  ){
    part2=sn1;
    }
    else if(b>0.33 && b<0.66){
        part2=sn2;
    }
    else if(b>=0.66 && b<1){
        part2=sn3;
    }
    let c= Math.random();
    console.log(c)
    
    let aw1="Bros"
    let aw2="Limited"
    let aw3="Hub"

    let part3;
   if(c<=0.33  ){
    part3=aw1;
    }
    
    else if(c>0.33 && c<0.66){
        part3=aw2;
    }
    
    else if(c>=0.66 && c<1){
        part3=aw3;
    }

      console.log("Your Business name is: " + part1 + " " + part2 + " " + part3 )
    // console.log("Your Business name is: " + part1 + " " + part2 + " " + part3);








