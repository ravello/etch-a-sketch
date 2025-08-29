const container = document.querySelector(".container");
const btn = document.querySelector("#newGridButton");

function createGrid (x){
    // clear the container
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // create new grid
    for (let i = 0; i < x; i++) {
        // create parent div element
        const parent = document.createElement("div");
        
        // edit the element
        parent.setAttribute("class", "parent");

        for (let j = 0; j < x; j++) {
            // create div element
            const div = document.createElement("div");

            // edit
            div.setAttribute("style", "opacity: 0.1;");
            div.setAttribute("class", "child");

            // appendChild to parent div
            parent.appendChild(div);
        }

        // append parent div to the container
        container.appendChild(parent);
    }
}

createGrid(16);

function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

container.addEventListener("mouseover", function(e) {
    if (e.target.className === "child") {

        // increase opacity by 0.1
        let opacity = e.target.style.opacity;
        opacity *= 10;
        opacity += 1;
        opacity /= 10;
        e.target.style.opacity = opacity;

        // change color to random RGB
        e.target.style.backgroundColor = randomColor();
    }
});

btn.addEventListener("click", function() {
    const userInput = parseInt(prompt('Enter number for grid size (0-100):'));

    if (userInput == NaN || userInput > 100 || userInput < 0) {
        alert("Please enter a valid number")
    } else {
        createGrid(userInput);
    }
});