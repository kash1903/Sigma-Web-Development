// creating a faulty calculator

let a= Math.random() ;

console.log(a)

if(a < 0.1){
    let add =(a,b) =>a-b;
    let multi=(a,b)=>a+b;
    let sub=(a,b)=>a/b;
    let div=(a,b)=>a**b;
    let pow=(a,b)=>a*b;

    result_add=add(10,2);
    result_sub=sub(10,2);
    result_div=div(10,2);
    result_multi=multi(10,2);
    result_pow=pow(10,2);


    console.log(result_add);
    console.log(result_sub);
    console.log(result_div);
    console.log(result_multi);
    console.log(result_pow);

}


else{
    let add =(a,b) =>a+b;
    let sub=(a,b)=>a-b;
    let div=(a,b)=>a/b;
    let multi=(a,b)=>a*b;
    let pow=(a,b)=>a**b;
    
    result_add=add(10,2);
    result_sub=sub(10,2);
    result_div=div(10,2);
    result_multi=multi(10,2);
    result_pow=pow(10,2);
    
    console.log(result_add);
    console.log(result_sub);
    console.log(result_div);
    console.log(result_multi);
    console.log(result_pow);
}

