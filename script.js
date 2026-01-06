let container = document.querySelector(".container");

let counter = 0;

for (let i = 0 ; i < 256 ; i++){
    const div = document.createElement("div");
    container.appendChild(div);
    const rgbValue = getRandomRgb();

    div.style.backgroundColor = "rgb(100, 165, 221)";
    div.style.width = "50px";
    div.style.height = "50px";
    div.addEventListener("mouseenter", () => makeTrail(div, rgbValue) );
    
}

function makeTrail(div, rgbValue){
    div.style.backgroundColor = `${rgbValue}`;
    div.style.opacity = `${counter*10}%`;
    if (counter <= 10) {
        counter++;
    }
    console.log(counter);
}

function getRandomRgb(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`
}

let sizePrompt = document.querySelector("button")
sizePrompt.addEventListener("click", () => newSize())

function newSize(){
    let userSize = prompt("Enter a number of pixels per side, smaller than 100", "");

    if (userSize <= 100){

        container.innerHTML = "";

        counter = 0;

        for (let i= 0 ; i < userSize ** 2 ; i++){
        const div = document.createElement("div");
        container.appendChild(div);
        const rgbValue = getRandomRgb();
        div.style.backgroundColor = "rgb(100, 165, 221)";
        div.style.width = `${800/userSize}px`;
        div.style.height = `${800/userSize}px`;
        div.addEventListener("mouseenter", () => makeTrail(div, rgbValue));
        }
    }
    else alert("TOO BIG, DUMMY");

    

    
}



