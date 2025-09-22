// ---------------- Destinations Data ----------------
const destinations = [
  // ---- Historical & Cultural ----
  {
    name: "Axum",
    description: "Historic city with ancient obelisks and churches.",
    image: "images/axum.jpg",
    lat: 14.1212,
    lng: 38.7249,
    type: "historical",
    wiki: "https://en.wikipedia.org/wiki/Axum",
  },
  {
    name: "Shire",
    description: "A historic town with rich culture and scenic surroundings.",
    image: "images/shire.jpg",
    lat: 14.1167,
    lng: 38.2833,
    type: "urban",
    wiki: "https://en.wikipedia.org/wiki/Shire,_Ethiopia",
  },
  {
    name: "Mekelle",
    description: "Capital city of Tigray with modern amenities and history.",
    image: "images/mekelle.jpg",
    lat: 13.4967,
    lng: 39.4759,
    type: "urban",
    wiki: "https://en.wikipedia.org/wiki/Mekelle",
  },
  {
    name: "Gera'alta",
    description: "Stunning rock-hewn churches and mountain views.",
    image: "images/geraalta.jpg",
    lat: 14.4171,
    lng: 39.048,
    type: "cultural",
    wiki: "https://en.wikipedia.org/wiki/Gheralta",
  },
  {
    name: "Yeha",
    description: "Ancient temples and archaeological sites.",
    image: "images/yeha.jpg",
    lat: 14.1218,
    lng: 39.0355,
    type: "historical",
    wiki: "https://en.wikipedia.org/wiki/Yeha",
  },
  {
    name: "Adigrat",
    description: "Gateway town to Gera'alta mountains with cultural sites.",
    image: "images/adigrat.jpg",
    lat: 14.28,
    lng: 39.47,
    type: "cultural",
    wiki: "https://en.wikipedia.org/wiki/Adigrat",
  },

  // ---- Restaurants (Food) ----
  {
    name: "Axum Traditional Restaurant",
    description: "Authentic Tigrayan cuisine including injera and tsebhi.",
    image: "images/axum-restaurant.jpg",
    lat: 14.123,
    lng: 38.725,
    type: "food",
  },
  {
    name: "Africa Hotel and Restaurant",
    description: "Local dishes with cultural dance performances.",
    image: "images/shire-restaurant.jpg",
    lat: 14.118,
    lng: 38.285,
    type: "food",
  },
  {
    name: "Mekelle Desta Restaurant",
    description:
      "Popular restaurant serving Ethiopian coffee and traditional meals.",
    image: "images/mekelle-restaurant.jpg",
    lat: 13.497,
    lng: 39.477,
    type: "food",
  },
  {
    name: "Gera'alta Lodge Restaurant",
    description:
      "Beautiful lodge restaurant offering local and continental food.",
    image: "images/geraalta-restaurant.avif",
    lat: 14.419,
    lng: 39.05,
    type: "food",
  },
  {
    name: "Yeha Heritage Restaurant",
    description: "Rustic dining with a focus on ancient Tigrayan recipes.",
    image: "images/yeha-restaurant.jpg",
    lat: 14.122,
    lng: 39.036,
    type: "food",
  },
  {
    name: "Adigrat Family Restaurant",
    description: "Cozy local eatery serving injera with tsebhi and shiro.",
    image: "images/adigrat-restaurant.jpg",
    lat: 14.281,
    lng: 39.472,
    type: "food",
  },

  // ---- Hotels ----
  {
    name: "Axum Hotel",
    description: "Comfortable hotel with modern amenities near obelisks.",
    image: "images/axum-hotel.jpg",
    lat: 14.125,
    lng: 38.726,
    type: "hotels",
  },
  {
    name: "Gebar Shire Hotel",
    description: "Popular hotel with cultural ambiance and local hospitality.",
    image: "images/shire-hotel.jpg",
    lat: 14.119,
    lng: 38.284,
    type: "hotels",
  },
  {
    name: "Planet Hotel Mekelle",
    description: "Luxury hotel with conference halls, spa, and dining.",
    image: "images/mekelle-hotel.jpg",
    lat: 13.498,
    lng: 39.476,
    type: "hotels",
  },
  {
    name: "Gera'alta Lodge",
    description: "Eco-lodge with breathtaking views and trekking options.",
    image: "images/geraalta-hotel.avif",
    lat: 14.42,
    lng: 39.049,
    type: "hotels",
  },
  {
    name: "Yeha Hotel",
    description: "Charming hotel overlooking ancient ruins of Yeha.",
    image: "images/yeha-hotel.jpg",
    lat: 14.124,
    lng: 39.034,
    type: "hotels",
  },
  {
    name: "Adigrat Tourist Hotel",
    description: "Friendly hotel with easy access to cultural landmarks.",
    image: "images/adigrat-hotel.jpg",
    lat: 14.282,
    lng: 39.471,
    type: "hotels",
  },

  // ---- Trekking ----
  {
    name: "Gheralta Trek",
    description: "Trekking route across dramatic cliffs and valleys.",
    image: "images/trek.jpg",
    lat: 14.41,
    lng: 39.05,
    type: "trekking",
  },
];

// ---------------- DOM Elements ----------------
const cardContainer = document.getElementById("destinationCards");
const typeFilter = document.getElementById("typeFilter");
const searchInput = document.getElementById("searchInput");
const noResultsEl = document.getElementById("noResults");
const favContainer = document.getElementById("favoritesList");

// ---------------- Display Destinations ----------------
function displayDestinations(list) {
  cardContainer.innerHTML = "";
  if (!Array.isArray(list) || list.length === 0) {
    noResultsEl.classList.remove("visually-hidden");
    return;
  }
  noResultsEl.classList.add("visually-hidden");

  list.forEach((dest) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4");
    card.innerHTML = `
      <div class="card h-100">
        <img src="${dest.image}" class="card-img-top" alt="${dest.name}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${dest.name}</h5>
          <p class="card-text">${dest.description}</p>
          ${
            dest.wiki
              ? `<a href="${dest.wiki}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary mb-2">Learn More</a>`
              : ""
          }
          <button class="btn btn-outline-success mt-auto add-fav-btn" data-name="${
            dest.name
          }">Add to Favorites</button>
        </div>
      </div>
    `;
    cardContainer.appendChild(card);
  });

  // Attach event listeners for favorites
  document.querySelectorAll(".add-fav-btn").forEach((btn) => {
    btn.addEventListener("click", () => addToFavorites(btn.dataset.name));
  });
}

// ---------------- Filter and Search ----------------
function filterAndDisplay() {
  const query = searchInput.value.toLowerCase();
  const type = typeFilter.value;

  const filtered = destinations.filter((dest) => {
    const matchesName = dest.name.toLowerCase().includes(query);
    const matchesType = type === "all" || dest.type === type;
    return matchesName && matchesType;
  });

  displayDestinations(filtered);
  if (typeof updateMapMarkers === "function") {
    updateMapMarkers(filtered);
  }
}

searchInput.addEventListener("input", filterAndDisplay);
typeFilter.addEventListener("change", filterAndDisplay);

// Initial render
displayDestinations(destinations);

// ---------------- Favorites ----------------
function addToFavorites(name) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!favorites.includes(name)) favorites.push(name);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  renderFavorites();
}

function renderFavorites() {
  favContainer.innerHTML = "";
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (favorites.length === 0) {
    favContainer.innerHTML =
      "<p class='text-center'>No favorites added yet.</p>";
    return;
  }

  favorites.forEach((name) => {
    const dest = destinations.find((d) => d.name === name);
    if (!dest) return;

    favContainer.innerHTML += `
      <div class="col-md-4">
        <div class="card h-100 border-success">
          <img src="${dest.image}" class="card-img-top" alt="${dest.name}">
          <div class="card-body">
            <h5 class="card-title">${dest.name}</h5>
            <p class="card-text">${dest.description}</p>
            ${
              dest.wiki
                ? `<a href="${dest.wiki}" target="_blank" rel="noopener noreferrer" class="btn btn-success">Learn More</a>`
                : ""
            }
          </div>
        </div>
      </div>
    `;
  });
}

// Render favorites on page load
renderFavorites();
