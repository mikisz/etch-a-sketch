const gridContainer = document.querySelector("#gridContainer");
const gridItem = document.querySelector(".gridItem");

function drawGrid(number) {

    for (let i = 0; i < number * number; i++) {

        let gridSize = 768 / number;
        const newDiv = document.createElement("div");
        newDiv.className = "gridItem";
        newDiv.style.width = `${gridSize}px`;
        newDiv.style.height = `${gridSize}px`;

        gridContainer.appendChild(newDiv);
        console.log("Div created");

    };

};

gridContainer.addEventListener('mouseover', (event) => {

    let target = event.target;
    let opacity;

    if (target !== gridContainer) {
        let randomHex = () => {
        
            return Math.floor(Math.random() * 255);
    
        };

        target.style.backgroundColor = `rgb(${randomHex()}, ${randomHex()}, ${randomHex()}`;
        target.style.opacity -= "-0.1";
        
    };

});

drawGrid(16);

function newGrid(number) {

    while (gridContainer.hasChildNodes()) {
        gridContainer.firstChild.remove()
    }

    drawGrid(number);

}

const userInput = document.querySelector("#gridSize");
const setButton = document.querySelector("#setGrid");

setButton.addEventListener("click", () => {
    if (userInput.value > 0) {
        return newGrid(userInput.value);
    } else {
        alert("You need to set value higher than 0!");
    }
}
)