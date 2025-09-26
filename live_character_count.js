let input = document.querySelector("input");
let span = document.querySelector("span");

input.addEventListener("input",function(){
    let words_left = 10-input.value.length;
    // adding the words left to type in the words_left
    span.textContent = words_left;
    if(words_left<0){
        span.style.color = "red";
    }else{
        span.style.color = "black";
    }


})