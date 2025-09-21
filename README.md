# Explore Tigray – Interactive Front-End Project

## **Project Overview**

**Explore Tigray** is an interactive front-end website that allows users to explore the historic, cultural, and natural destinations of the Tigray region in Ethiopia. Users can search, filter, and view attractions dynamically while interacting with an integrated Google Map and a smart chatbot.

The project demonstrates **dynamic front-end development** using HTML, CSS, JavaScript, and external APIs, providing a fully interactive user experience.

---

## **User Goals & Value**

* **Discover Tigray**: Explore destinations such as Axum, Gera’alta, Yeha, Adigrat, and Mekelle.
* **Interactive Search & Filter**: Users can filter by type (historical, cultural, nature, urban) or search by name.
* **Dynamic Map**: Google Maps integration shows markers for destinations and updates based on filters.
* **Chatbot Support**: Ask questions or click on suggested destinations in the chat to automatically filter and highlight locations.

**Value Provided**:

1. Users can quickly find destinations matching their interests.
2. Site owner showcases Tigray’s attractions in an engaging, interactive manner, potentially promoting tourism.

---

## **Technologies Used**

* **HTML5** – Structure and content of the site.
* **CSS3 & Bootstrap 5** – Styling, responsive design, and layout.
* **JavaScript (ES6)** – Dynamic search, filtering, map interactivity, and chatbot logic.
* **Google Maps API** – Map display and markers for destinations.
* **Optional Chat API** – Custom chatbot implemented with JavaScript.

---

## **Features**

1. **Search Bar** – Type to filter destinations by name dynamically.
2. **Type Filter** – Dropdown filter by destination type: historical, cultural, nature, urban.
3. **Destination Cards** – Interactive cards displaying images and descriptions.
4. **Map Integration** – Google Maps updates dynamically based on filtered destinations.
5. **Smart Chatbot** – Provides suggestions and clickable destination links that filter cards and map markers.
6. **Responsive Design** – Works on desktop and mobile devices.

---

## **How to Use**

1. **Search or Filter**

   * Use the search bar or type filter to find destinations.
   * Map and cards update in real-time based on selections.

2. **Chatbot Interaction**

   * Type queries like “Show me historical sites” or “Tell me about Axum”.
   * Click on the clickable destination names in the chat to highlight and filter them on the page.

3. **Map Interaction**

   * Click markers on the Google Map to view destination info.

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

## **Code Attribution**

* Bootstrap 5: [https://getbootstrap.com](https://getbootstrap.com)
* Google Maps API: [https://developers.google.com/maps/documentation](https://developers.google.com/maps/documentation)
* All other code written by the project author.

---

## **Deployment**

1. Push the project folder to a GitHub repository.
2. Enable **GitHub Pages** in repository settings.
3. Ensure `index.html` is in the root or `/docs` folder.
4. Replace `YOUR_GOOGLE_MAPS_API_KEY` with a valid Google Maps API key.
5. Access your live site via the GitHub Pages URL.

---

## **Testing & Notes**

* Tested on Chrome, Firefox, and mobile devices.
* Google Maps may require API billing enabled for full functionality.
* Chatbot is a simple keyword-based system; future enhancements can integrate AI-based responses.

---
