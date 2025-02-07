let arr=[1,2,3,4,5]

let newArr=[]

for(let index=0; index < arr.length; index ++){

    const element= arr[index];
        newArr.push(element**2);
}

console.log(newArr);

let arr1=[4,5,6,7,8,10,11,12,14];

let newArr1= arr1.map((e,index1,array1)=>{
return e;
})

// console.log(newArr1);

const greaterThanSeven=(e)=>{
    
    if(e>7){
        return true;
    }

    else 
    return false;

}

// console.log(newArr1.filter(greaterThanSeven))



let arr2=[1,2,3,4,5,6]

const red=(a,b)=>{
    return a*b;

}
console.log(arr2.reduce(red))
