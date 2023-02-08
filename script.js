const gridSpace = document.querySelector(".gridspace");

function createGrid(number) {

    let child = gridSpace.firstElementChild;

    while (child) {
        gridSpace.removeChild(child);
        child = gridSpace.firstElementChild; 
    }

    let gridSize = 600/number;

    for (i=0; i<number**2; i++) {
        let grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.width = gridSize + "px"
        grid.style.height = gridSize + "px"
        gridSpace.appendChild(grid);
    }

   // const grids = document.getElementsByClassName("grid")
    //grids.style.width = gridSize + "px"
    //grids.style.height = gridSize + "px"
}