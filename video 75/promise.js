console.log("This is a promise")  // synchronous operation executes immediatly 


let prom1 = new Promise ((resolve,reject) => {  // create promise object and assign it to prom 1 


    let a = Math.random();
    if(a<0.5){
        reject("Random number is rejecting you1");
    }
    else{
        setTimeout(()=>{
            
            console.log("yes i am done 1")
            
            resolve("Subu1");
            
        },3000);
    }
    })

prom1.then((a)=>{

    console.log(a)

}).catch((err)=>{
    console.log(err)
})


let prom2 = new Promise ((resolve,reject) => {  // create promise object and assign it to prom 1 


    let a = Math.random();
    if(a<0.5){
        reject("Random number is rejecting you2");
    }
    else{
        setTimeout(()=>{
            
            console.log("yes i am done2")
            
            resolve("Subu2");
            
        },1000);
    }
    })





    // let p3 = Promise.all([prom1,prom2])
        // let p3 = Promise.allSettled([prom1,prom2])
        // let p3 = Promise.race([prom1,prom2])
        let p3 = Promise.any([prom1,prom2])
    p3.then((a)=>{

    console.log(a)

}).catch((err)=>{
    console.log(err)
})
