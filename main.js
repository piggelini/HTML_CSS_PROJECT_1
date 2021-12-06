const dropdown = document.getElementById("myDropdown");
const hamburgerMenu = document.getElementById("hamburgerIcon");

hamburgerMenu.addEventListener("click", () => {
  dropdown.classList.toggle("show");
});