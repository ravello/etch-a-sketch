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
            div.setAttribute("class", "child");

            // appendChild to parent div
            parent.appendChild(div);
        }

        // append parent div to the container
        container.appendChild(parent);
    }
}

createGrid(16);

container.addEventListener("mouseover", function(e) {
    if (e.target.className === "child") {
        e.target.classList.add("hovered");
    }
});

btn.addEventListener("click", function() {
    const userInput = parseInt(prompt('Enter number for grid size:'));

    if (userInput == NaN || userInput > 100 || userInput < 0) {
        alert("Please enter a valid number")
    } else {
        createGrid(userInput);
    }
});