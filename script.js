// -------------------------------
// Scroll Animation on Section
// -------------------------------
window.addEventListener("scroll", revealSections);

function revealSections() {
  const sections = document.querySelectorAll("section");
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach((sec) => {
    const secTop = sec.getBoundingClientRect().top;
    if (secTop < triggerBottom) {
      sec.classList.add("show");
    } else {
      sec.classList.remove("show");
    }
  });
}

// -------------------------------
// Smooth Scroll for Navigation
// -------------------------------
const links = document.querySelectorAll("nav a");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// -------------------------------
// Alert for Contact Links
// -------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const contactLinks = document.querySelectorAll(".contact-info a");
  contactLinks.forEach((link) => {
    link.addEventListener("click", () => {
      console.log(`Membuka tautan: ${link.href}`);
    });
  });
});

// -------------------------------
// Animation Class for Fade In
// -------------------------------
const style = document.createElement("style");
style.innerHTML = `
section {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}
section.show {
  opacity: 1;
  transform: translateY(0);
}
`;
document.head.appendChild(style);
