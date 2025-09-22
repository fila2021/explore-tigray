# Explore Tigray – Interactive Front-End Project

## **Project Overview**

**Explore Tigray** is an interactive front-end website that allows users to explore the historic, cultural, and natural destinations of the Tigray region in Ethiopia.
The site provides **search, filtering, dynamic map updates, and chatbot support** to enhance user interaction.

The project demonstrates **dynamic front-end development** using **HTML, CSS, JavaScript, Bootstrap, and Google Maps API**, creating a fully interactive and responsive user experience.

---

## **User Goals & Value**

### External User Goals

- **Discover Tigray**: Learn about historic, cultural, and natural destinations such as Axum, Gera’alta, Yeha, Adigrat, and Mekelle.
- **Personalized Interaction**: Find destinations that match personal preferences using filters, search, and chatbot queries.
- **Explore visually**: Interact with a dynamic Google Map and clickable suggestions in the chatbot.

### Site Owner Goals

- Showcase Tigray’s cultural and historical richness.
- Promote engagement with regional tourism.
- Provide an accessible, user-friendly platform that demonstrates modern interactive front-end development.

---

## **Features**

1. **Search Bar** – Dynamically filters destinations by name.
2. **Type Filter Dropdown** – Narrow results by type: historical, cultural, nature, or urban.
3. **Destination Cards** – Display images, names, and descriptions in a responsive grid.
4. **Map Integration (Google Maps API)** – Markers update dynamically based on current filter or chatbot query.
5. **Smart Chatbot** – Responds to keywords, suggests destinations, and provides clickable links to filter results.
6. **Accessibility Enhancements** – Alt text for images, hero overlay for text contrast, chatbot `aria-live` region, keyboard support (chat can be sent by pressing Enter).
7. **Responsive Design** – Optimized for both desktop and mobile devices.
8. **404 Redirect** – Users landing on invalid URLs are redirected to `index.html`.

---

## **Technologies Used**

- **HTML5** – Page structure and semantic layout.
- **CSS3 & Bootstrap 5** – Styling, grid layout, and responsive design.
- **JavaScript (ES6)** – Dynamic DOM manipulation, event handling, filtering, chatbot logic.
- **Google Maps API** – Map display, markers, and interactive info windows.

---

## **How to Use**

1. **Search & Filter**

   - Use the search bar or dropdown filter to find destinations.
   - Cards and map markers update instantly.

2. **Chatbot Interaction**

   - Type queries such as _“Show me historical sites”_ or _“Tell me about Axum”_.
   - Chatbot responses may include clickable destination names. Clicking them filters the results and highlights them on the map.

3. **Map Interaction**

   - Click a marker to view destination info.

---

## **Folder Structure**

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
└─ README.md
```

---

## **Deployment**

1. Push the project folder to a GitHub repository.
2. Enable **GitHub Pages** in repository settings.
3. Ensure `index.html` is in the repo root (or `/docs`).
4. Replace the placeholder Google Maps API key with your own valid key.
5. Visit the GitHub Pages URL to view the live project.

---

## **Testing**

### Manual Testing

| Feature           | Test                                 | Result                                |
| ----------------- | ------------------------------------ | ------------------------------------- |
| Navbar            | Click all nav links                  | Scrolls to correct section            |
| Search bar        | Type "Axum"                          | Shows only Axum card + marker         |
| Dropdown filter   | Select "Historical"                  | Shows Yeha & Axum                     |
| Combined filter   | Search "Adigrat" + filter "Cultural" | Works correctly                       |
| Chatbot           | Type "Tell me about Axum"            | Returns Axum description              |
| Chatbot fallback  | Type "Banana"                        | Returns fallback message              |
| Chatbot Enter key | Press Enter after typing             | Sends message                         |
| Map markers       | Click on marker                      | Info window appears                   |
| No results        | Search nonsense like "XYZ"           | Shows "No destinations found" message |
| 404 redirect      | Navigate to `site.com/xyz`           | Redirects to `index.html`             |

### Validation

- **HTML** – Passed W3C validation.
- **CSS** – Passed Jigsaw validation.
- **JavaScript** – Passed ESLint with no errors.

---

## **Accessibility Notes**

- All images include **alt text**.
- Hero text overlay improves **color contrast**.
- Chatbox uses **`aria-live`** so screen readers announce updates.
- Keyboard accessibility: **Enter key** sends chatbot messages.

---

## **Code Attribution**

- Bootstrap 5: [https://getbootstrap.com](https://getbootstrap.com)
- Google Maps API: [https://developers.google.com/maps/documentation](https://developers.google.com/maps/documentation)
- Project images: sourced for educational use (author/local repository).
- All JavaScript, CSS, and integration logic written by the project author.

---

## **Future Enhancements**

- Add user authentication to save favorite destinations.
- Expand chatbot to use an external API or AI model for smarter responses.
- Add more destinations with categories such as food, hotels, and trekking trails.

---
