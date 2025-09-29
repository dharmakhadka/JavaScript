let email = document.querySelector("#email");
let pass = document.querySelector("#password"); 
let form = document.querySelector("form");


form.addEventListener("submit",function(dets){
    dets.preventDefault();
    
    const email_regx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/i
    const pass_regx = /^.{8,}$/;

    let email_c = email_regx.test(email.value);
    let pass_c = pass_regx.test(pass.value);

    if(!email_c){
        document.querySelector("#error_email").style.display = "initial";
        document.querySelector("#error_email").textContent = "Error Email";
    }
    if(!pass_c){
        document.querySelector("#error_password").style.display = "initial";
        document.querySelector("#error_password").textContent = "Error Password";
    }

})