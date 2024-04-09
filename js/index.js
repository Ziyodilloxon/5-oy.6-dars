const darkMode = document.querySelector("#button");
document.body.appendChild(darkMode);

function DarkMode() {
  document.body.classList.toggle("dark-mode");
}

darkMode.addEventListener("click", DarkMode);

if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
}

darkMode.addEventListener("click", () => {
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});
