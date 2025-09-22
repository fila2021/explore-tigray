# 🌍 Explore Tigray – Interactive Front-End Project

## 📖 Project Overview

**Explore Tigray** is an interactive tourism website showcasing the **historic, cultural, urban, and natural** destinations of the Tigray region in Ethiopia.  
It allows users to **search, filter, save favorites, and explore destinations on a dynamic Google Map**, while also offering links to trusted tour companies.

This project was built as part of the **Interactive Front-End Development Milestone Project**.

---

## 🎯 User Stories

### External User Goals

- As a user, I want to **search destinations quickly** so I can find specific places.
- As a user, I want to **filter destinations by category** (historical, cultural, food, hotels, trekking).
- As a user, I want to **view destinations on a map** so I can understand their location.
- As a user, I want to **save favorites** so I can keep track of places I want to visit.
- As a user, I want to **get in touch via a feedback form** to ask questions or request information.

### Site Owner Goals

- Promote the **beauty of Tigray** and encourage tourism.
- Provide a **modern, interactive user experience**.
- Offer **useful resources** like tour company links to support planning trips.
- Showcase **front-end development skills** for assessment and portfolio.

---

## ✨ Features

### 1. Hero Section

- Background image of Tigray.
- Title, descriptive text, and search bar.

### 2. Destinations Section

- Search box + category dropdown.
- Responsive destination cards with images, descriptions, and "Add to Favorites".

### 3. Tour Companies Section

- Cards linking to **trusted Ethiopian tour operators**.

### 4. Map of Tigray

- Dynamic **Google Maps integration**.
- Markers update with search/filter selections.

### 5. Favorites Section

- Users can add/remove favorites.
- Stored in **localStorage** for persistence.

### 6. Feedback Form

- Contact form for questions/feedback.
- Submits to **Code Institute Formdump** for testing.
- Validation for required fields.

### 7. Responsive Design

- Layout adapts seamlessly to **desktop, tablet, and mobile**.

---

## 🗂 Folder Structure

explore-tigray/
│
├─ index.html
├─ 404.html
├─ .nojekyll
├─ README.md
│
├─ assets/
│ ├─ css/
│ │ └─ style.css
│ │
│ ├─ js/
│ │ ├─ main.js
│ │ └─ map.js
│ │
│ └─ images/
│ ├─ axum.jpg
│ ├─ axum-hotel.jpg
│ ├─ axum-restaurant.jpg
│ ├─ shire.jpg
│ ├─ shire-hotel.jpg
│ ├─ shire-restaurant.jpg
│ ├─ mekelle.jpg
│ ├─ mekelle-hotel.jpg
│ ├─ mekelle-restaurant.jpg
│ ├─ geraalta.jpg
│ ├─ geraalta-hotel.avif
│ ├─ yeha.jpg
│ ├─ yeha-hotel.jpg
│ ├─ yeha-restaurant.jpg
│ ├─ adigrat.jpg
│ ├─ adigrat-hotel.jpg
│ ├─ adigrat-restaurant.jpg
│ └─ trek.jpg
│
└─ docs/
├─ wireframes/
│ ├─ wireframe_desktop.png
│ └─ wireframe_mobile.png
│
└─ screenshots/
├─ hero.png
├─ destinations.png
├─ guides.png
├─ map.png
├─ favorites.png
└─ feedback.png

---

## 🎨 Wireframes

The following wireframes were created during the planning stage:

---

| Navbar: Explore Tigray | Destinations | Guides | Map |
| | Favorites | Feedback |

---

---

| HERO: Background Image of Tigray               |
| ---------------------------------------------- |
| Discover the Wonders of Tigray                 |
| Lead paragraph about rock churches, landscapes |
| [ Search Box ]                                 |

---

---

| SECTION: Top Destinations                      |
| ---------------------------------------------- |
| [Filter Dropdown: All, Historical, Food, etc.] |
|                                                |
| [Card] [Card] [Card]                           |
| [Card] [Card] [Card]                           |

---

---

| SECTION: Trusted Tour Companies                             |
| ----------------------------------------------------------- |
| [Card - Brilliant Ethiopia] [Card - ETT] [Card - Inside ET] |

---

---

| SECTION: Map of Tigray             |
| ---------------------------------- |
| [Google Map Embedded with Markers] |

---

---

| SECTION: My Favorites                           |
| ----------------------------------------------- |
| [Favorite Card] [Favorite Card] [Favorite Card] |

---

---

| SECTION: Feedback Form                 |
| -------------------------------------- |
| Name: [________] Email: [________]     |
| Message: [___________________________] |
| [Send Feedback Button]                 |

---

---

## | FOOTER: © 2025 Explore Tigray |

![Wireframe](assets/docs/wireframes/wireframe.png)
![Wireframe](assets/docs/wireframes/wireframe_updated.png)

---

## 🖼️ Screenshots (Final Design)

| Feature        | Screenshot                                                           |
| -------------- | -------------------------------------------------------------------- |
| Hero Section   | ![Hero Screenshot](assets/docs/screenshots/hero.png)                 |
| Destinations   | ![Destinations Screenshot](assets/docs/screenshots/destinations.png) |
| Tour Companies | ![Guides Screenshot](assets/docs/screenshots/guides.png)             |
| Map of Tigray  | ![Map Screenshot](assets/docs/screenshots/map.png)                   |
| Favorites      | ![Favorites Screenshot](assets/docs/screenshots/favorites.png)       |
| Feedback Form  | ![Feedback Screenshot](assets/docs/screenshots/feedback.png)         |

---

## 🛠️ Technologies Used

- **HTML5** – semantic structure
- **CSS3** – custom styles
- **Bootstrap 5** – responsive grid and layout
- **JavaScript (ES6)** – interactivity (search, filters, favorites, map)
- **Google Maps API** – dynamic mapping and markers
- **GitHub Pages** – project deployment

---

## ✅ Testing

### HTML Validation

- Checked with **W3C Validator** – no major errors.

### CSS Validation

- Passed **W3C Jigsaw Validator**.

### JavaScript

- Checked with **ESLint** – no major issues.

### Responsiveness

- Tested using Chrome DevTools on **mobile, tablet, and desktop breakpoints**.
- Works well across devices.

### Performance

- Tested with **Lighthouse**:
  - Performance: 95+
  - Accessibility: 100
  - Best Practices: 100
  - SEO: 100

### Manual Testing

| Feature         | Test                            | Result                        |
| --------------- | ------------------------------- | ----------------------------- |
| Navbar          | Click links                     | ✅ Scrolls to correct section |
| Search Bar      | Search "Axum"                   | ✅ Shows Axum only            |
| Filter Dropdown | Select "Historical"             | ✅ Shows Axum & Yeha          |
| Filter Dropdown | Select “Food”                   | ✅ Shows restaurants          |
| Favorites       | Add/Remove destination          | ✅ Stored in localStorage     |
| No Results      | Search nonsense                 | ✅ “No destinations found.”   |
| Map             | Updates markers after filtering | ✅ Works                      |
| Feedback Form   | Empty fields validation         | ✅ Error shown                |
| Feedback Form   | Valid submission →confirmation  | ✅ Works                      |

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

## ♿ Accessibility

- All images include **alt text**.
- Sufficient **color contrast**.
- Keyboard accessible navigation.
- Form elements have **labels**.

---

### Bug Log

- **GitHub Pages 404** – Found: GitHub Pages returned 404.
  Fix: Added `.nojekyll` → resolved.
- **Map InfoWindow Bug** – Found: marker click error.
  Fix: corrected `infoWindow.open(map, marker)` → resolved.
- **Inline Styles** – Found: chatbot used inline `style`.
  Fix: moved to CSS classes → resolved.

---

## 🔗 Attribution

- **Bootstrap 5**: [https://getbootstrap.com](https://getbootstrap.com)
- **Google Maps API**: [https://developers.google.com/maps](https://developers.google.com/maps)
- **Images**: Educational placeholders (replace with licensed if published).
- **Form Handling**: [Code Institute Formdump](https://formdump.codeinstitute.net/)
- All other code written by the developer.

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

- User **authentication** for personalized favorites.
- Expand with **AI-powered chatbot** for travel guidance.
- Add more **categories** (e.g., trekking routes, events).
- Integration with a **real backend** for saving feedback.

---

```

```
