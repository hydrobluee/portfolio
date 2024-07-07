const darkMode = document.getElementById("dark-mode");
const lightMode = document.getElementById("light-mode");

// Function to toggle theme
const setTheme = (theme) => {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
  darkMode.classList.toggle("hidden", theme === "dark");
  lightMode.classList.toggle("hidden", theme === "light");
};

// Initialize theme based on local storage or system preference
const currentTheme = localStorage.getItem("theme") || "dark"; // Always default to "dark"
setTheme(currentTheme);

darkMode.addEventListener("click", () => setTheme("dark"));
lightMode.addEventListener("click", () => setTheme("light"));

// Contact Me
const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const serviceID = "service_kvffjn9";
  const templateID = "template_vp6q7ps";

  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs.send(serviceID, templateID, params).then(
    () => {
      document.getElementById("submit").style.display = "none";
      document.getElementById("response-message").classList.remove("hidden");
    },
    (err) => {
      alert(JSON.stringify(err));
    }
  );
});
