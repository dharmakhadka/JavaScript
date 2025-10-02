let button = document.querySelector("button");
let alert = document.querySelector(".alert");

button.addEventListener("click",function(){
    alert.style.display = "initial";
    setTimeout(()=>{
        alert.style.display = "none";
    },3000);
})
