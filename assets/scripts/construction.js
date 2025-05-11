document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");
  const sidebar = document.getElementById("sidebar");
  const homeLink = document.getElementById("homeLink");

  menuBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
  });

  window.addEventListener("scroll", () => {
    if (sidebar.classList.contains("open")) {
      sidebar.classList.remove("open");
    }
  });

  // 💥 If user clicks Home while already on homepage, just close sidebar
  if (homeLink) {
    homeLink.addEventListener("click", (e) => {
      const path = window.location.pathname;
      if (path === "/" || path.endsWith("/main.html")) {
        e.preventDefault();
        sidebar.classList.remove("open");
      }
    });
  }
});

// Auto-close sidebar when any nav link is clicked (except Home logic handled separately)
const navLinks = document.querySelectorAll("#menuLinks a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("open");
  });
});

