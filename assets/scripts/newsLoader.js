document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("newsContainer");
  const params = new URLSearchParams(window.location.search);
  const postSlug = params.get("post");

  if (!postSlug) {
    container.innerHTML = "<p class='text-center text-gray-600'>No article selected.</p>";
    return;
  }

  try {
    const response = await fetch('/news/step-brothers-4.md');
    if (!response.ok) throw new Error("File not found");

    const markdown = await response.text();
    const html = marked.parse(markdown);
    container.innerHTML = html;
  } catch (err) {
    container.innerHTML = `<p class='text-center text-red-500'>Could not load article. Make sure the file exists in /posts/.</p>`;
  }
});

// newsLoader.js

import { marked } from "https://cdn.jsdelivr.net/npm/marked/marked.esm.js";

async function loadArticle() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  const container = document.getElementById("articleContent");

  if (!slug) {
    container.innerHTML = "<p class='text-center text-gray-500'>No article selected.</p>";
    return;
  }

  try {
    const res = await fetch(`/content/news/${slug}.md`);
    if (!res.ok) throw new Error("Markdown not found");
    const md = await res.text();
    const html = marked.parse(md);
    container.innerHTML = html;
  } catch (err) {
    container.innerHTML = "<p class='text-center text-red-500'>Failed to load article.</p>";
    console.error(err);
  }
}

loadArticle();

