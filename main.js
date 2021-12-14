const dropdown = document.getElementById("myDropdown");
const hamburgerMenu = document.getElementById("hamburgerIcon");

hamburgerMenu.addEventListener("click", () => {
  dropdown.classList.toggle("show");
});

const x = window.matchMedia("(min-width: 861px)");

function removeDropdown (x) {
  if (x.matches) {
    dropdown.classList.remove("show");
  }
}

removeDropdown(x);
x.addListener(removeDropdown);