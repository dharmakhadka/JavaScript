let form = document.querySelector("form");
let nm = document.querySelector("#name");
let valid = document.querySelector("#valid_name");

form.addEventListener("submit",function(detail){
    detail.preventDefault();

    if(nm.value.length <= 3){
        valid.style.display = "initial";
    }else{
        valid.style.display = "none";
    }
});