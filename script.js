const gridSpace = document.querySelector(".gridspace");


// Function for creating a grid of (n x n) --> n is number assigned by user
function createGrid(number) {

    let child = gridSpace.firstElementChild;

    while (child) {
        gridSpace.removeChild(child);
        child = gridSpace.firstElementChild; 
    }

    let gridSize = 500/number;

    for (i=0; i<number**2; i++) {
        let grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.width = gridSize + "px";
        grid.style.height = gridSize + "px";
        gridSpace.appendChild(grid);
    }

}

// Initial grid is 16x16
createGrid(16);

let setColor = "black"

// ------------------------------
// Event listeners to paint each element of the grid when clicked, or moved over while clicked

let clicked = false;

window.addEventListener("mousedown", e => {
    clicked = true;
})

window.addEventListener("mouseup", e => {
    clicked = false;
})

// Event listener for mousemove - only works when isClicked == true
gridSpace.addEventListener("mousemove", function(e) {
    const target = e.target;

    if (clicked == true) {
        if (target.matches(".grid")) {
            target.style.backgroundColor = setColor;
        }
    }

});

// Listener for click event
gridSpace.addEventListener("click", function(e) {
    const target = e.target;

    if (target.matches(".grid")) {
        target.style.backgroundColor = setColor;
    }
});

// -------------------------------


// Eraser button defines setColor as white 
const eraser = document.querySelector(".eraser");
eraser.addEventListener("click", () => setColor = "white");


// slider for selecting grid size
const slideValue = document.querySelector("span");
const inputSlider = document.querySelector(".slider-input");
inputSlider.oninput = (()=>{
  let value = inputSlider.value;
  slideValue.textContent = `Grid Size: ${value}x${value}`;
  createGrid(value);
  grid = document.querySelectorAll(".grid");
});


// Button for setting grid visibility on/off
let grid = document.querySelectorAll(".grid") 
let gridVisible = true;
const gridButton = document.querySelector(".grid-button");
gridButton.addEventListener("click", function() {
    if (gridVisible == true) {
        for (let i = 0; i < grid.length; i++){
            let currentGrid = grid[i];
            currentGrid.style.borderColor = "white"; 
        }
        gridVisible = false;
    } else if (gridVisible == false) {
        for (let i = 0; i < grid.length; i++){
            let currentGrid = grid[i];
            currentGrid.style.borderColor = "#b8b9ba"; 
        }
        gridVisible = true;
    }
})

Coloris({
    theme: "polaroid",
    swatches: [
        '#264653',
        '#2a9d8f',
        '#e9c46a',
        'rgb(244,162,97)',
        '#e76f51',
        '#d62828',
        'navy',
        '#07b',
        '#0096c7',
        '#00b4d880',
        'rgba(0,119,182,0.8)'
      ]
});