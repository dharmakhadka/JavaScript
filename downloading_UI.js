let progress = document.querySelector(".bar");
let percent = document.querySelector("#percentText");
let count = 0;

let intv = setInterval(function(){
    if(count<=99){
        count++;
        progress.style.width = `${count}%`;
        percent.textContent = `${count}%`;
    }
    else{
        document.querySelector("h2").textContent = "Downloaded";
        clearInterval(intv);
    }
},50)