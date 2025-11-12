const checkbox = document.getElementById("theme-toggle")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-theme")
})