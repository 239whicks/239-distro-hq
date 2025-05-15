# 📓 239 Distro HQ — Patch Notes

A public changelog documenting major updates, fixes, and feature rollouts to the 239 Distro HQ platform.

---

## 🚀 v0.1 — Foundation Launch (May 8, 2025)

**Initial Framework & Frontend Setup:**
- ✅ Full homepage layout: responsive hero, genre ticker, and stat cards
- ✅ Sidebar menu created with animated open/close behavior
- ✅ Scroll-close logic added to sidebar for mobile UX
- ✅ HTML file structure organized (pages, assets, main)
- ✅ First draft of `README.md` created to document project goals
- ✅ Custom font styling + header sizing added for future use

---

## 🛠️ v0.1.1 — Functional Recovery & Expansion (May 9, 2025)

**Bug Fixes & Structural Recovery:**
- ✅ Fixed Tailwind CDN placement to restore visual layout
- ✅ Cleaned up malformed `<head>` tag in `main.html`
- ✅ Restructured sidebar CSS for full fade + transform sync
- ✅ Repaired JavaScript on `index.html` for password unlock + Enter key support
- ✅ Replaced broken unlock logic with clean `checkPassword()` flow
- ✅ Synced GitHub Desktop with local repo after full Git installation
- ✅ Pushed clean deployment to Vercel with working routes + layout

**📰 Explore Trends Update:**
- 🆕 Added **News tab** under Explore Trends section
- ✅ News tab will focus on **underground reports**: RIAA certifications, record sales, niche projects, and underreported drops (e.g. Step Brothers 4 by Starlito & Don Trip)
- 🚫 Deliberate exclusion of mainstream entertainment headlines (ShadeRoom, PFW, etc.)

**🌐 Domain Activation:**
- ✅ Purchased and configured official domain: [`239distro.com`](https://239distro.com)
- 🔒 SSL Certificate issued via Vercel (HTTPS active)
- 🌐 Redirects for both `239distro.com` and `www.239distro.com` now live
- 🧭 Domain now publicly hosts the main build via Vercel Production environment

**Toolchain Finalized:**
- Git + GitHub Desktop configured
- VS Code + file editing optimized
- Vercel auto-deployment synced with main branch

---

## 🧱 v0.1.2

### ✅ Core Website Updates
- **Global Menu Bar**:  
  Menu is now implemented across all pages, including correct alignment, consistent placement, and working sidebar functionality.

- **Navigation Fixes**:  
  - Menu "Home" link now closes sidebar if already on the homepage.  
  - Verified `vercel.json` rewrites work for clean URLs (e.g., `/news`, `/contact`, etc.).

- **Search Bar Added**:  
  Homepage now features a styled, functional (visual only for now) search input in top-left corner.  
  - Appears as just a magnifying glass on subpages.

- **Page Clean-Up**:  
  - Each HTML page reviewed, marquee removed from subpages.  
  - Menu button no longer breaks layout.  
  - Proper spacing restored between search and menu button.  
  - All `.html` files removed from URLs.

---

### 📬 Email Setup + Branding
- **Custom Email Configured**:  
  Created and verified `contact@239distro.com` through Zoho Mail using Vercel domain DNS records (MX, SPF, DKIM, etc.).

- **Zoho Email Signature**:  
  Clean signature finalized for all emails:

---

🛠️ 239 Distro HQ — Patch Notes (May 14, 2025)
✅ Structural & Routing Enhancements
✅ Fully migrated to local/Vercel-only file paths for production stability
✅ Cleaned and reorganized repo into:

/assets → images, scripts, styles

/pages → all routed HTML views

/content/posts/ → news/article data (posts.json, future .md/.txt support)

✅ vercel.json updated with proper rewrites for:

/ → /main.html

/news, /releases, /contact, etc. → routed cleanly to /pages/*.html

🧠 Dynamic News Routing (Slug-Based)
✅ “Read More” button now dynamically routes using ?slug= pattern:

<a href="/news?slug=step-brothers-4">Read More →</a>

✅ newsLoader.js added to read URL slug and attempt to fetch corresponding .md article
✅ Markdown parser (Marked.js) installed via CDN and integrated with dynamic rendering

## ⚠️ Known Issue – Markdown Article Load
❌ Markdown files in /public/posts/ are not loading on Vercel despite correct slug routing

Vercel currently does not serve .md as plain text without MIME override

✅ Confirmed dynamic slug routing is functional — now properly directs to the News page

🧪 Fixes attempted:

.md → .txt (fallback)

newsLoader.js fetch correction

MIME header config in vercel.json

🧩 Final blocker appears to be Vercel’s handling of static files while the construction page is still active

🧼 Housekeeping & Devops
✅ git add . / git commit -m "Clean structure, proper routing, rewrites locked in" pushed successfully

✅ GitHub repo now reflects the exact working state of the project

✅ No more dependency on MacBook — all development is now done locally and Vercel-native

🧭 Next Steps (Planned)
🎯 Resolve .md render issue post-construction page

🎨 Begin full theming of the site (colors, seasonal palettes, header/footer polish)

📰 Begin using posts.json for simplified dynamic news listing, fallback if .md fails

💾 Add GitHub README update for new structure + Patch Notes archive

