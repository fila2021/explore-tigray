# 🌍 Explore Tigray – Interactive Front-End Project

## 📖 Project Overview

**Explore Tigray** is an interactive front-end website that allows users to explore the **historic, cultural, urban, and natural** destinations of the Tigray region in Ethiopia.

The site provides:

- **Search and filter tools** to quickly find destinations.
- **Dynamic Google Maps integration** to visualize locations.
- **Interactive chatbot support** for suggestions and filtering.

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
6. **Accessibility Features** – alt text for images, high contrast overlay, aria-live chat updates, keyboard-friendly chat (Enter key support).
7. **Responsive Design** – works on desktop, tablet, and mobile.
8. **404 Redirect** – invalid URLs redirect back to `index.html`.

---

## 🛠 Technologies Used

- **HTML5** – page structure
- **CSS3 & Bootstrap 5** – responsive layout and styling
- **JavaScript (ES6)** – search, filter, chatbot, DOM updates
- **Google Maps API** – maps and destination markers

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

## 🎨 Wireframe (Planning Stage)

A wireframe was created during the planning stage to define layout and navigation:

![Wireframe](docs/wireframes/wireframe.png)

---

## 📸 Final Screenshots

| Feature            | Screenshot                                                    |
| ------------------ | ------------------------------------------------------------- |
| Hero Section       | ![Hero Screenshot](docs/screenshots/hero.png)                 |
| Destinations Cards | ![Destinations Screenshot](docs/screenshots/destinations.png) |
| Google Map         | ![Map Screenshot](docs/screenshots/map.png)                   |
| Chatbot Support    | ![Chat Screenshot](docs/screenshots/chat.png)                 |

---

## 💡 UX Rationale

- **Consistency**: Navbar fixed at the top, consistent layout.
- **Clarity**: Overlay ensures text contrast in hero section.
- **Accessibility**: Alt text, aria-live for chatbot, keyboard (Enter key) support.
- **Interactivity**: Search, filter, map, and chatbot help users achieve goals.
- **Feedback**: Clear “No results found” messages and chatbot fallback responses.

---

## 🚀 Deployment

1. Push project folder to GitHub.
2. Enable **GitHub Pages** in repository settings.
3. Ensure `index.html` is in the root directory.
4. Replace Google Maps API key with your own valid key.
5. Visit GitHub Pages URL to access the live site.

---

## 🧪 Testing

### Manual Testing

| Feature         | Test                                 | Result                                                                                                 |
| --------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| Navbar          | Click links                          | Scrolls to correct section                                                                             |
| Search Bar      | Search "Axum"                        | Shows Axum only                                                                                        |
| Filter Dropdown | Select "Historical"                  | Shows Axum & Yeha                                                                                      |
| Combined Filter | Search "Adigrat" + Filter "Cultural" | Works correctly                                                                                        |
| Chatbot         | Ask "Tell me about Axum"             | Returns Axum description                                                                               |
| Enter Key       | Press Enter in chatbot               | Sends message                                                                                          |
| Map Markers     | Click marker                         | Info window displays                                                                                   |
| No Results      | Search nonsense                      | Displays “Sorry, I don’t know that. Try asking about 'historical', 'cultural', or a destination name.” |
| Redirect        | Open `/404`                          | Redirects to index.html                                                                                |

### Validation

- **HTML** – Passed W3C validation.
- **CSS** – Passed Jigsaw validation.
- **JavaScript** – Passed ESLint (no errors).

---

## ♿ Accessibility

- **Alt text** for all images.
- **Color contrast overlay** in hero for readability.
- **ARIA live region** for chatbot updates.
- **Keyboard accessibility** (Enter key sends messages).

---

## 🙌 Code Attribution

- Bootstrap 5: [https://getbootstrap.com](https://getbootstrap.com)
- Google Maps API: [https://developers.google.com/maps/documentation](https://developers.google.com/maps/documentation)
- Images: placeholders / educational use (replace with licensed sources if publishing).
- All other code written by the author.

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

This appears to be a **GitHub Pages bug**, not an issue with the project code or repo structure. The full site works correctly in local development (via `index.html`) and passes HTML, CSS, and JavaScript validation.

### Workaround

For assessment:

- Please clone the repo locally and open `index.html` in a browser.
- All features (search, filter, map, chatbot) work as expected.

---

## 🔮 Future Enhancements

- Add **favorites list** for logged-in users.
- Expand **chatbot intelligence** with AI API(external API, example Chatgpt).
- Add **new categories**: food, hotels, trekking routes.
