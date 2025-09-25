let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");

let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let d = document.querySelector(".d");
let e = document.querySelector(".e");
let f = document.querySelector(".f");



button1.addEventListener("click", function(){
    console.log("Button Clicked")
})

button2.addEventListener("click", function(){
    console.log("Button2 Clicked")
})

a.addEventListener("click", function(){
    console.log("A Clicked")
})

b.addEventListener("click", function(){
    console.log("B Clicked")
})

c.addEventListener("click", function(){
    console.log("C Clicked")
})

d.addEventListener("click", function(){
    console.log("D Clicked")
},true)

e.addEventListener("click", function(){
    console.log("E Clicked")
},true)

f.addEventListener("click", function(){
    console.log("F Clicked")
} ,true)