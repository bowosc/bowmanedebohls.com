var form = document.querySelector("form")!; // "!" says ignore the potential null value :)
const goButton = document.querySelector("#go")!;
const stopButton = document.querySelector("#stop")!;

form.addEventListener("click", function(event) {
  event.preventDefault();
  if (event.target == goButton) {
    goButton.classList.add("go");
    stopButton.classList.remove("stop");
  } else if (event.target == stopButton) {
    stopButton.classList.add("stop");
    goButton.classList.remove("go");
  }
});