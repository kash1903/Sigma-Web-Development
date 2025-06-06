console.log("Apple")
console.log("Ball")

setTimeout(() =>{

    console.log("Car")
    
},4000);

console.log("Execute first before car Due to Asychronous Nature of JavaScript")




const callback = (arg)=>{
    console.log(arg)
}

const loadScript = (src,callback)=>{
    
    let sc = document.createElement("index");
    sc.src=src;
    sc.onload  = callback("subramanian");
    document.head.append(sc)

}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)