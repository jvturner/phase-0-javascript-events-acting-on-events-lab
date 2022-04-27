// const dodger = document.getElementById("dodger");
// dodger.style.backgroundColor = "#FF6984";
// dodger.style.bottom = "0px";
// dodger.style.left = "0px";

// document.addEventListener("keydown", function (event) {
//     console.log(event);
// })

// document.addEventListener("keydown", function (event) {
    // if (event.key === "ArrowLeft") {
        // const leftNumbers = dodger.style.left.replace("px", "");
        // const left = parseInt(leftNumbers, 10);

        // dodger.style.left = `${left - 1}px`;
    // }
// });

// const dodger = document.getElementById("dodger");


const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF6984";
// dodger.style.bottom = "0px";
// dodger.style.left = "0px";

document.addEventListener("keydown", function (event) {
        console.log(event);
})

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

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 10) {
      dodger.style.left = `${left + 1}px`;
    }
  }

  document.addEventListener("keydown",function(e){
      if (e.key === "ArrowRight") {
          moveDodgerRight();
      }
  })

