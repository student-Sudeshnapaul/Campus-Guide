// Dark / Light Mode
const toggleBtn = document.getElementById("modeToggle");

toggleBtn.onclick = () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
};
