let container = document.querySelector(".container");

for (let i = 0 ; i < 256 ; i++){
    const div = document.createElement("div");
    container.appendChild(div);
    div.style.backgroundColor = "red";
    div.style.width = "50px";
    div.style.height = "50px";
    div.addEventListener("mouseenter", () => {
    div.style.backgroundColor = "blue"; 
});
}

function colorChange(div){
    div.style.backgroundColor = "blue"
}

let sizePrompt = document.querySelector("button")
sizePrompt.addEventListener("click", () => newSize())

function newSize(){
    let userSize = prompt("Enter a number of pixels per side, smaller than 100", "");

    if (userSize <= 100){

        container.innerHTML = "";

        for (let i= 0 ; i < userSize ** 2 ; i++){
        const div = document.createElement("div");
        container.appendChild(div);
        div.style.backgroundColor = "red";
        div.style.width = `${800/userSize}px`;
        div.style.height = `${800/userSize}px`;
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "blue"; 
            });
        }
    }
    else alert("TOO BIG, DUMMY");

    

    
}

for (let i= 0 ; i < newSize ** 2 ; i++){

}

