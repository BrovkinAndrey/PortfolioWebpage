const header = document.getElementById("header");

let startPosition = 0;

window.addEventListener("scroll", () => {
  const newPosition = window.pageYOffset;

  if (newPosition > startPosition) {
    header.classList.add("hide-menu");
  } else {
    header.classList.remove("hide-menu");
  }

  startPosition = newPosition;
});
