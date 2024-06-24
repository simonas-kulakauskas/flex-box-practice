const container = document.querySelector("#container");
const squaresPerSide = 25;


for (let i = 0; i < squaresPerSide; i++) {
    const div = document.createElement("div");
    div.className = "row";
    for (let j = 0; j < squaresPerSide; j++) {
        const div2 = document.createElement("div");
        div2.className = "col";
        div.appendChild(div2);
    }
    container.appendChild(div);
}
