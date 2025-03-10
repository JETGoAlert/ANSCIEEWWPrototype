document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// Load preference
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}
