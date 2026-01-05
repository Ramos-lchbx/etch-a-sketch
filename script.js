let container = document.querySelector(".container");

for (let i = 0 ; i < 256 ; i++){
    const div = document.createElement("div");
    container.appendChild(div);
    div.style.backgroundColor = "red";
    div.style.width = "48px";
    div.style.height = "48px";
    div.style.margin = "1px"
}