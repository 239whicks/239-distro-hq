import { marked } from "https://cdn.jsdelivr.net/npm/marked/marked.esm.js";

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("articleContent");
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  if (!slug) {
    container.innerHTML = `<p class='text-center text-gray-500'>No article selected.</p>`;
    return;
  }

  try {
    const response = await fetch(`/content/news/${slug}.md`);
    if (!response.ok) throw new Error("File not found");

    const markdown = await response.text();
    const html = marked.parse(markdown);

    container.innerHTML = html;
  } catch (err) {
    container.innerHTML = `<p class='text-center text-red-500'>Could not load article. Make sure the file exists in /content/news/.</p>`;
  }
});
