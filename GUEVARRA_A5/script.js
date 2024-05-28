document.addEventListener("DOMContentLoaded", () => {
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  document.body.appendChild(tooltip);

  document.querySelectorAll(".editable").forEach((element) => {
    const id = element.id;
    element.contentEditable = "true";
    element.classList.add("editable");
    element.addEventListener("focus", () => {
      tooltip.innerText = "Click to edit";
      const rect = element.getBoundingClientRect();
      tooltip.style.top = `${rect.top - 30}px`;
      tooltip.style.left = `${rect.left}px`;
      tooltip.style.display = "block";
    });
    element.addEventListener("blur", () => {
      tooltip.style.display = "none";
      localStorage.setItem(id, element.innerText);
    });
    const savedContent = localStorage.getItem(id);
    if (savedContent) {
      element.innerText = savedContent;
    }
  });

  document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });

  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your message!");
    contactForm.reset();
  });
});
