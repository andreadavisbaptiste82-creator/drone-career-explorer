// Shared external and internal destinations for Drone Career Explorer.
// Update these values in one place before launch if a destination changes.
window.DCE_SITE_LINKS = {
  futureReadyAI: "https://andreadavisbaptiste82-creator.github.io/future-ready-ai/",
  maisonSite: "https://maisonglamouretgrace.com/",
  maisonContact: "https://maisonglamouretgrace.com/contact.html",
  linkedinCompany: "https://www.linkedin.com/company/143038482/",
  contactEmail: "mailto:andrea@maisonglamouretgrace.com",
  contactPhone: "tel:+17086898869"
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-link-key]").forEach(el => {
    const key = el.dataset.linkKey;
    if (window.DCE_SITE_LINKS[key]) el.setAttribute("href", window.DCE_SITE_LINKS[key]);
  });
});
