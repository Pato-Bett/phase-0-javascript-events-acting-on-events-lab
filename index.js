// Your code here
const dodger = document.getElementById("dodger")
dodger.style.background = "#FF69B4"
dodger.style.bottom = "100px"

// document.addEventListener("keydown", function (event) {
//     // console.log(event);
//     if (event.key === "ArrowLeft"){
//         const leftNumbers = dodger.style.left.replace("px", "")
//         const left = parseInt(leftNumbers, 10)
//         dodger.style.left = left-1 + "px"
//     }
//   });

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  
// function to move dodger right
function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10)
    if (left<360) {
        dodger.style.left = left+1 + "px"
    }
}

document.addEventListener("keydown", (e) => {
    if (key = "ArrowRight") {
        moveDodgerRight()
    }
})