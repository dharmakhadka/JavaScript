let ul = document.querySelector("ul");

ul.addEventListener("click", function(line){
    line.target.classList.toggle("line_through");
});

