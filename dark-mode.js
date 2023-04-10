const root = document.querySelector("html");
const swithBtn = document.querySelector(".switch-btn");
const content = document.querySelector(".content");

swithBtn.addEventListener("click", () => {
  root.classList.toggle("dark");
  if (root.classList.contains("dark")) {
    content.innerText = "This is DarkMODE"
  } else {
    content.innerText = "This is LightMODE"
  }
})

