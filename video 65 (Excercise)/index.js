factorial=5;

if(factorial>=1){

fact=1;

for ( i=factorial; i>0 ; i--){

fact=fact*i;

}
console.log("Factorial is: " + fact);
}

else{
    console.log("Factorial number cannot be 0 or less ");
}