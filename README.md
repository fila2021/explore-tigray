# 🌍 Explore Tigray – Distinction-ready Interactive Front-End Project

**Explore Tigray** is an interactive front-end website that allows users to explore the **historic, cultural, urban, and natural** destinations of the Tigray region in Ethiopia.

This project demonstrates **dynamic front-end development** using **HTML, CSS, JavaScript, Bootstrap, and the Google Maps API**, ensuring a responsive and engaging user experience.

---

## 🎯 User Goals & Value

### User Goals

- **Discover Tigray**: Learn about Axum, Yeha, Adigrat, Mekelle, Gera’alta, and more.
- **Search & Filter**: Quickly find destinations by type or keyword.
- **Interactive Exploration**: Use maps and chatbot to explore locations dynamically.

### Site Owner Goals

- Showcase the beauty of Tigray.
- Provide a **modern, interactive tourism experience**.
- Demonstrate **front-end interactivity** for educational and promotional use.

---

## ✨ Features

1. **Hero Section with Background Image & Search Bar** – visually appealing introduction.
2. **Type Filter Dropdown** – choose between historical, cultural, nature, and urban sites.
3. **Destination Cards** – responsive grid with images, names, and descriptions.
4. **Dynamic Google Maps** – markers update based on user filters/search.
5. **Smart Chatbot** – keyword recognition, clickable suggestions, and helpful responses.
6. **Accessibility Features** – labels, aria-live updates, high contrast overlay, keyboard support.
7. **Error Handling** – map loader, error banner if Google Maps fails.
8. **Responsive Design** – works on desktop, tablet, and mobile.
9. **404 Redirect** – `404.html` automatically redirects to `index.html`.

---

## 🗂 Folder Structure

```
explore-tigray/
│
├─ index.html
├─ css/
│   └─ style.css
├─ js/
│   ├─ main.js
│   └─ map.js
├─ images/
│   ├─ axum.jpg
│   ├─ geraalta.jpg
│   ├─ yeha.jpg
│   ├─ adigrat.jpg
│   ├─ shire.jpg
│   └─ mekelle.jpg
├─ docs/
│   ├─ wireframes
│       ├─ wireframe.png
│   └─ screenshots/
│       ├─ hero.png
│       ├─ destinations.png
│       ├─ map.png
│       └─ chat.png
└─ README.md
```

---

## 🎨 Wireframe & Screenshots

Wireframe used for planning layout:

![Wireframe](docs/wireframes/wireframe.png)

Final screenshots:

| Feature            | Screenshot                                  |
| ------------------ | ------------------------------------------- |
| Hero Section       | ![Hero](docs/screenshots/hero.png)          |
| Destinations Cards | ![Cards](docs/screenshots/destinations.png) |
| Google Map         | ![Map](docs/screenshots/map.png)            |
| Chatbot Support    | ![Chat](docs/screenshots/chat.png)          |

---

## 💡 UX Rationale

- **Consistency**: Navbar fixed at the top, consistent layout.
- **Clarity**: Overlay ensures text contrast in hero section.
- **Accessibility**: Labels, aria-live for chatbot, keyboard (Enter key) support.
- **Interactivity**: Search, filter, map, and chatbot help users achieve goals.
- **Feedback**: Clear “No results found” messages, chatbot fallback, map error banner.

---

## 🚀 Deployment (Step-by-step)

1. Replace `YOUR_API_KEY` in `index.html` with your own Google Maps API key.
2. Ensure `index.html` and `404.html` are in the repo root.
3. Add a **blank** `.nojekyll` file at the repo root.
4. Push changes to `main` branch.
5. In GitHub: **Settings → Pages → Source → main / root**.
6. Wait a few minutes and visit your URL:  
   `https://<username>.github.io/<repo-name>/`
7. If 404 occurs, test `https://<username>.github.io/<repo-name>/404.html` → it should auto-redirect to home.

---

## 🧪 Testing

### Manual Test Table

| Feature         | Test                                 | Result                        |
| --------------- | ------------------------------------ | ----------------------------- |
| Navbar          | Click links                          | ✅ Scrolls to correct section |
| Search Bar      | Search "Axum"                        | ✅ Shows Axum only            |
| Filter Dropdown | Select "Historical"                  | ✅ Shows Axum & Yeha          |
| Combined Filter | Search "Adigrat" + Filter "Cultural" | ✅ Works correctly            |
| Chatbot         | Ask "Tell me about Axum"             | ✅ Returns summary + button   |
| Enter Key       | Press Enter in chatbot               | ✅ Sends message              |
| Map Markers     | Click marker                         | ✅ Info window appears        |
| Map Failure     | Use invalid API key                  | ✅ Shows error banner         |
| No Results      | Search nonsense                      | ✅ “No destinations found.”   |
| 404 Redirect    | Navigate to `/random`                | ✅ Redirects to index.html    |

### Bug Log

- **GitHub Pages 404** – Found: GitHub Pages returned 404.  
  Fix: Added `.nojekyll` → resolved.
- **Map InfoWindow Bug** – Found: marker click error.  
  Fix: corrected `infoWindow.open(map, marker)` → resolved.
- **Inline Styles** – Found: chatbot used inline `style`.  
  Fix: moved to CSS classes → resolved.
- **Missing ARIA** – Found: no `aria-live` for chatbot.  
  Fix: added `role="log" aria-live="polite"` → resolved.

---

## ✅ Validation & Linting

- **HTML** – Passed W3C validation.
- **CSS** – Passed Jigsaw validation.
- **JavaScript** – Passed ESLint (no errors).

---

## ♿ Accessibility

- **Labels** for all form inputs.
- **ARIA live regions** for chatbot and map loader.
- **Color contrast overlay** in hero for readability.
- **Keyboard support** (Enter key sends messages).

---

## 🔗 Attribution

- Bootstrap 5 – [https://getbootstrap.com](https://getbootstrap.com)
- Google Maps API – [https://developers.google.com/maps](https://developers.google.com/maps)
- Images – placeholders / educational use.
- All other code authored by project owner.

---

## 🐛 Known Issue: GitHub Pages 404 Bug

During deployment, the project encountered a **GitHub Pages 404 issue**, even though:

- The repository structure is correct (`index.html` at root).
- Pages settings are correctly configured (branch: `main`, folder: `/root`).
- A `.nojekyll` file was added to disable Jekyll processing.
- GitHub Actions build logs show a successful deployment (green check ✅).

Despite this, the live URL:
👉 [https://fila2021.github.io/explore-tigray/](https://fila2021.github.io/explore-tigray/)

still returns a **404 error**.

### Investigation

- Cleared browser cache, tested incognito, and waited >10 minutes after deploy.
- Confirmed correct repo branch and Pages configuration.
- Attempted forced rebuild (switching to `/docs` then back to `/root`).
- No issues in GitHub Actions build logs.

### Conclusion

This appears to be a **GitHub Pages bug**, not an issue with the project code or repo structure. The full site works correctly in local development (via `index.html`) and passes HTML, CSS, and JavaScript validation. The issue is resolved for me but incase if it happens for you, follow te workaround instruction below.

### Workaround

For assessment:

- Please clone the repo locally and open `index.html` in a browser.
- All features (search, filter, map, chatbot) work as expected.

---

## 🔮 Future Enhancements

- Add **favorites list** for logged-in users.
- Expand **chatbot intelligence** with AI API(external API, example Chatgpt).
- Add **new categories**: food, hotels, tracking routes.
