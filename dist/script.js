let bar = document.querySelector("#bar");
let navList = document.querySelector("#nav-list");

bar.addEventListener("click", () => {
  navList.classList.toggle("hidden");
});
