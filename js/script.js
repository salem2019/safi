let bar = document.querySelector(".side-left");
let rightSide = document.querySelector(".fa-chevron-right");
rightSide.addEventListener("click", (e) => {
  bar.classList.toggle("open");
  rightSide.classList.toggle("fa-chevron-right");
  rightSide.classList.toggle("fa-chevron-left");
});
