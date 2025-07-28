let typed = new Typed("#typing-text", {
  strings: ["a Frontend Developer", "a Problem Solver", "a Database Handler", "a Tech Enthsiast"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
});
function loadParticles(theme) {
  const jsonFile = theme === "light-theme" ? "particles-light.json" : "particles-dark.json";
  particlesJS.load('particles-js', jsonFile, function () {
    console.log(`Particles loaded: ${jsonFile}`);
  });
}

// Initial load
const currentTheme = document.body.classList.contains("light-theme") ? "light-theme" : "dark-theme";
loadParticles(currentTheme);

// Switch theme and reload particles
document.getElementById("themeSwitch").addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  document.body.classList.toggle("dark-theme");

  const newTheme = document.body.classList.contains("light-theme") ? "light-theme" : "dark-theme";
  loadParticles(newTheme);
});
