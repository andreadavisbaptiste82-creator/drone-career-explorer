document.addEventListener("DOMContentLoaded", () => {
  // Keep Contact available in real desktop navigation on supporting pages.
  document.querySelectorAll(".nav-links").forEach(nav => {
    if (!nav.querySelector('a[href="contact.html"]')) {
      const link = document.createElement("a");
      link.href = "contact.html";
      link.textContent = "Contact";
      link.className = "dce-auto-contact-link";
      nav.appendChild(link);
    }
  });
});
