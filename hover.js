let hover = document.querySelector("#hover");

window.addEventListener("mousemove",function(mover){
    hover.style.left = mover.clientX + "px";
    hover.style.top = mover.clientY + "px";
});