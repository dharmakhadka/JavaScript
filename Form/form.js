let main = document.querySelector("#main");
let form = document.querySelector("form");
let input = document.querySelectorAll("input");

form.addEventListener("submit",function(click){
    click.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let h2 = document.createElement("h2");
    h2.textContent = input[0].value ;

    let h3 = document.createElement("h3");
    h3.textContent = input[1].value ;

    let p = document.createElement("h3");
    p.textContent = input[2].value ;

    card.appendChild(profile);

    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(p);

    main.appendChild(card);

    input.forEach(function(Each){
        if(Each.type !== "submit"){
            Each.value = "";
        }
    })
})