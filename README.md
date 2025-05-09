# 239 Distro HQ 🎧

Welcome to the frontend repository for **239 Distro HQ**, a regional music trends platform powered by live Spotify data, artist insights, and real-time visualizations.

> 🎤 "Built by artists. Powered by data. Designed for the culture."

---

## 🌐 Live Preview
[https://239-distro-hq.vercel.app](https://239-distro-hq.vercel.app) *(auto-updates on commit)*

---

## 🔥 Features

- 🎛️ **Homepage** with top artist, genre, and city stats
- 🧠 Scrolling "Trending Now" genre ticker
- 📊 Integration-ready with Tableau dashboards (in separate repo)
- 🎯 Responsive layout styled with Tailwind CSS
- 💻 Built to scale: artist profiles, genre discovery, city drilldowns

---

## 🛠️ Tech Stack

| Frontend | Deployment | Future Plans |
|----------|------------|---------------|
| HTML / Tailwind CSS | [Vercel](https://vercel.com) | React, Spotify API, Python automation |

---

## 📂 File Structure

```bash
239-distro-hq/
│
├── index.html         # Homepage layout
├── style.css          # (Optional, used if you're writing custom styles)
├── scripts.js         # (Optional, future JS functionality)
└── README.md          # You here right now :)

📦 Patch Notes / Updates
🛠 v1.1 – May 2025
🔐 Introduced a password-protected construction page to gate site preview

💡 Implemented Enter key support for the password input field

🔁 Refactored JavaScript logic into an external file: construction.js

🧱 Renamed index.html → main.html to separate homepage logic

🚪 Set construction.html → index.html as the new public entry point

🌐 Successfully deployed site through Vercel with live domain-ready setup

🧼 Restructured GitHub repo for modular expansion (assets/, scripts/)

🎯 Locked in smooth redirect flow from password screen to homepage on valid entry
