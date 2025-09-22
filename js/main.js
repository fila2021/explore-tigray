// Destination data
const destinations = [
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
];

// DOM elements
const cardContainer = document.getElementById("destinationCards");
const typeFilter = document.getElementById("typeFilter");
const searchInput = document.getElementById("searchInput");

// Display destinations
function displayDestinations(list) {
  cardContainer.innerHTML = "";
  list.forEach((dest) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4");
    card.innerHTML = `
      <div class="card h-100">
        <img src="${dest.image}" class="card-img-top" alt="${dest.name}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${dest.name}</h5>
          <p class="card-text">${dest.description}</p>
          <a href="${dest.wiki}" target="_blank" class="btn btn-outline-primary mt-auto">Learn More</a>
        </div>
      </div>
    `;
    cardContainer.appendChild(card);
  });
}

// Filter and search
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

// Events
searchInput.addEventListener("input", filterAndDisplay);
typeFilter.addEventListener("change", filterAndDisplay);

// Initial render
displayDestinations(destinations);

// ---------------- Chatbot ----------------
const messagesDiv = document.getElementById("messages");
const userMessageInput = document.getElementById("userMessage");
const sendBtn = document.getElementById("sendBtn");

// Normalize string (for better matching)
function normalizeString(s) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

// Escape regex special chars
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Replace destination names with clickable spans
function makeClickableLinks(text) {
  if (/<a\s/i.test(text)) return text; // don’t overwrite anchor tags
  destinations.forEach((dest) => {
    const nameEsc = escapeRegExp(dest.name);
    const regex = new RegExp(`\\b${nameEsc}\\b`, "gi");
    text = text.replace(
      regex,
      `<span class="destination-link" data-name="${dest.name}">${dest.name}</span>`
    );
  });
  return text;
}

// Handle Enter key
userMessageInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendBtn.click();
});

// Chat send button
sendBtn.addEventListener("click", () => {
  const msg = userMessageInput.value.trim();
  if (!msg) return;

  // Show user's message
  const userMsgDiv = document.createElement("div");
  userMsgDiv.textContent = "You: " + msg;
  messagesDiv.appendChild(userMsgDiv);
  userMessageInput.value = "";

  const msgNorm = normalizeString(msg);
  let response = "";
  let matched = false;

  // Match by type
  const types = ["historical", "cultural", "nature", "urban"];
  for (const t of types) {
    if (msgNorm.includes(t)) {
      const names = destinations
        .filter((d) => d.type === t)
        .map((d) => d.name)
        .join(", ");
      response = `Top ${t} destinations: ${names}`;
      matched = true;
      break;
    }
  }

  // Match by destination
  if (!matched) {
    for (const dest of destinations) {
      if (msgNorm.includes(normalizeString(dest.name))) {
        response = `
          <strong>${dest.name}</strong> — ${dest.description}
          <div style="margin-top:.5rem">
            <a href="${dest.wiki}" target="_blank" class="wiki-link">Read more on Wikipedia</a>
            &nbsp;
            <button class="btn btn-sm btn-outline-primary show-dest-btn" data-name="${dest.name}">Show on site</button>
          </div>
        `;
        matched = true;
        break;
      }
    }
  }

  // Fallback
  if (!matched) {
    response =
      "Sorry, I don’t know that. Try asking about 'historical', 'cultural', or a destination name.";
  }

  // Bot message
  const botMsgDiv = document.createElement("div");
  if (!/<a\s/i.test(response)) {
    botMsgDiv.innerHTML = "Bot: " + makeClickableLinks(response);
  } else {
    botMsgDiv.innerHTML = "Bot: " + response;
  }
  messagesDiv.appendChild(botMsgDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;

  // Add click listeners
  botMsgDiv.querySelectorAll(".destination-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      filterByDestination(e.target.dataset.name);
    });
  });

  botMsgDiv.querySelectorAll(".show-dest-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      filterByDestination(e.target.dataset.name);
    });
  });
});

// Filter by chatbot click
function filterByDestination(name) {
  const filtered = destinations.filter((d) => d.name === name);
  displayDestinations(filtered);
  if (typeof updateMapMarkers === "function") updateMapMarkers(filtered);

  const cards = document.querySelectorAll("#destinationCards .card");
  cards.forEach((card) => {
    const title = card.querySelector(".card-title").textContent;
    card.style.border = title === name ? "3px solid #007bff" : "";
    if (title === name)
      card.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

// 404 redirect (for GitHub Pages)
if (
  window.location.pathname !== "/index.html" &&
  window.location.pathname !== "/"
) {
  window.location.href = "/index.html";
}
