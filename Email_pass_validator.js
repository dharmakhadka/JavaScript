let email = document.querySelector("#email");
let pass = document.querySelector("#password"); 
let form = document.querySelector("form");


form.addEventListener("submit",function(dets){
    dets.preventDefault();

    document.querySelector("#error_email").textContent = "";
    document.querySelector("#error_password").textContent = "";
    
    const email_regx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/i
    const pass_regx = /^.{8,}$/;

    let email_c = email_regx.test(email.value);
    let pass_c = pass_regx.test(pass.value);

    let isvalid = true;

    if(!email_c){
        document.querySelector("#error_email").style.display = "initial";
        document.querySelector("#error_email").textContent = "Error Email";
        isvalid = false;
    }
    if(!pass_c){
        document.querySelector("#error_password").style.display = "initial";
        document.querySelector("#error_password").textContent = "Error Password";
        isvalid = false;
    }
    if(isvalid){
        document.querySelector("#result_text").textContent = "Correct Credentials";
    }


})