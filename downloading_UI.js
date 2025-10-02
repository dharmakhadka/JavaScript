let count = 0;
let progress = document.querySelector(".bar");
let progressText = document.querySelector("#percentText");

setInterval(function(){
    if(count <= 99){
        count++;
        progress.style.width = `${count}%`;
        progressText.textContent = `${count}%`;
        
    }
}, 50);