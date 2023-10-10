let modal = document.querySelector(".modal");
let container = document.querySelector(".container");
let burger = document.querySelector(".burger");
const showModal = (e) => {
  e.stopPropagation();

  modal.style.display = "block";
  container.style.opacity = "0.5";

  modal.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  document.querySelector(".cross").addEventListener("click", () => {
    modal.style.display = "none";
    container.style.opacity = "1";
  });
  container.addEventListener("click", (e) => {
    if (e.target !== modal || e.target !== button) {
      modal.style.display = "none";
      container.style.opacity = "1";
    }
  });
};

let button = document
  .querySelector("button")
  .addEventListener("click", showModal);
