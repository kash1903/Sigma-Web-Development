let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");

button1.addEventListener("click",()=>{
    // alert("I was clicked");

    document.querySelector(".box").innerHTML= "<b>Ye i was clicked ! ";
})





button2.addEventListener("mouseenter",()=>{
    // alert("I was clicked");

    document.querySelector(".box").innerHTML= "<b>Ye i was clicked !</b> Nice to meet you ";
})

document.addEventListener("keydown",(e)=>{
    console.log(e);
})