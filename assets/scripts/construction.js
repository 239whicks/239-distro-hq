document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");
  const sidebar = document.getElementById("sidebar");
  const homeLink = document.getElementById("homeLink");
  const navLinks = document.querySelectorAll("#menuLinks a");

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

  // ✅ Auto-close on all other nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("open");
    });
  });
});

document.addEventListener("DOMContentLoaded", async () => {
  const featuredContainer = document.getElementById("featuredNews");

  try {
    const response = await fetch("/content/posts.json");
    const data = await response.json();
    const featuredPost = data.posts.find(post => post.featured);

    if (featuredPost && featuredContainer) {
featuredContainer.innerHTML = `
  <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row gap-6 items-center">
    <img src="${featuredPost.image}" alt="${featuredPost.title}" class="w-full sm:w-1/3 rounded-lg object-cover" />
    <div class="flex flex-col justify-between sm:w-2/3">
      <h3 class="text-2xl font-bold mb-2">${featuredPost.title}</h3>
      <p class="text-sm text-gray-500 mb-1">By ${featuredPost.author} • ${featuredPost.date}</p>
      <p class="text-gray-700 text-sm mb-3 line-clamp-3">${featuredPost.summary}</p>
      <a href="/news/${featuredPost.slug}" class="text-sm text-black font-semibold hover:underline">Read More →</a>
    </div>
  </div>
`;

    }
  } catch (err) {
    console.error("Error loading featured post:", err);
  }
});
