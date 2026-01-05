let container = document.querySelector(".container");

for (let i = 0 ; i < 256 ; i++){
    const div = document.createElement("div");
    container.appendChild(div);

    const rgbValue = getRandomRgb();

    div.style.backgroundColor = "rgb(100, 165, 221)";
    div.style.width = "50px";
    div.style.height = "50px";
    div.addEventListener("mouseenter", () => {
    div.style.backgroundColor = `${rgbValue}`; 
});


function getRandomRgb(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`
}

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
        const rgbValue = getRandomRgb();
        div.style.backgroundColor = "rgb(100, 165, 221)";
        div.style.width = `${800/userSize}px`;
        div.style.height = `${800/userSize}px`;
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = `${rgbValue}`; 
            });
        }
    }
    else alert("TOO BIG, DUMMY");

    

    
}

for (let i= 0 ; i < newSize ** 2 ; i++){

}

