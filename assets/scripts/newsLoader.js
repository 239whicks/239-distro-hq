document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("newsContainer");
  const params = new URLSearchParams(window.location.search);
  const postSlug = params.get("post");

  if (!postSlug) {
    container.innerHTML = "<p class='text-center text-gray-600'>No article selected.</p>";
    return;
  }

  try {
    const response = await fetch(`/posts/${postSlug}.md`);
    if (!response.ok) throw new Error("File not found");

    const markdown = await response.text();
    const html = marked.parse(markdown);
    container.innerHTML = html;
  } catch (err) {
    container.innerHTML = `<p class='text-center text-red-500'>Could not load article. Make sure the file exists in /posts/.</p>`;
  }
});
