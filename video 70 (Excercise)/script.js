console.log("Subramanian");

// document.getElementById("box1").style.backgroundColor="pink";

let colors=["red","green","blue","violet","yellow","pink","orange"];
let box = document.querySelectorAll(".box");
let size= colors.length;

box.forEach(element =>{
    let random=Math.floor(Math.random()*size);
    element.style.backgroundColor=colors[random];
})