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

