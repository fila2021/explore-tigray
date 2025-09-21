// Destination data
const destinations = [
  {
    name: "Axum",
    description: "Historic city with ancient obelisks and churches.",
    image: "images/axum.jpg",
    lat: 14.1212,
    lng: 38.7249,
    type: "historical",
  },
  {
    name: "Gera'alta",
    description: "Stunning rock-hewn churches and mountain views.",
    image: "images/geraalta.jpg",
    lat: 14.4171,
    lng: 39.048,
    type: "cultural",
  },
  {
    name: "Yeha",
    description: "Ancient temples and archaeological sites.",
    image: "images/yeha.jpg",
    lat: 14.1218,
    lng: 39.0355,
    type: "historical",
  },
  {
    name: "Adigrat",
    description: "Gateway town to Gera'alta mountains with cultural sites.",
    image: "images/adigrat.jpg",
    lat: 14.28,
    lng: 39.47,
    type: "cultural",
  },
  {
    name: "Shire",
    description: "A historic town with rich culture and scenic surroundings.",
    image: "images/shire.jpg",
    lat: 14.1167,
    lng: 38.2833,
    type: "urban",
  },
  {
    name: "Mekelle",
    description: "Capital city of Tigray with modern amenities and history.",
    image: "images/mekelle.jpg",
    lat: 13.4967,
    lng: 39.4759,
    type: "urban",
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
      <div class="card">
        <img src="${dest.image}" class="card-img-top" alt="${dest.name}">
        <div class="card-body">
          <h5 class="card-title">${dest.name}</h5>
          <p class="card-text">${dest.description}</p>
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
  updateMapMarkers(filtered);
}

// Events
searchInput.addEventListener("input", filterAndDisplay);
typeFilter.addEventListener("change", filterAndDisplay);

// Initial render
displayDestinations(destinations);

// Chatbot
const messagesDiv = document.getElementById("messages");
const userMessageInput = document.getElementById("userMessage");
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", () => {
  const msg = userMessageInput.value.trim();
  if (!msg) return;

  // Show user message
  const userMsgDiv = document.createElement("div");
  userMsgDiv.textContent = "You: " + msg;
  messagesDiv.appendChild(userMsgDiv);
  userMessageInput.value = "";

  // Bot response
  let response = destinations.map((d) => d.name).join(", ");
  const typeMap = {
    historical: destinations
      .filter((d) => d.type === "historical")
      .map((d) => d.name)
      .join(", "),
    cultural: destinations
      .filter((d) => d.type === "cultural")
      .map((d) => d.name)
      .join(", "),
    nature: destinations
      .filter((d) => d.type === "nature")
      .map((d) => d.name)
      .join(", "),
    urban: destinations
      .filter((d) => d.type === "urban")
      .map((d) => d.name)
      .join(", "),
  };

  for (let key in typeMap) {
    if (msg.toLowerCase().includes(key)) {
      response = `Top ${key} destinations: ${typeMap[key]}`;
    }
  }

  destinations.forEach((dest) => {
    if (msg.toLowerCase().includes(dest.name.toLowerCase())) {
      response = `${dest.name} is a wonderful place! ${dest.description}`;
    }
  });

  const botMsgDiv = document.createElement("div");
  botMsgDiv.innerHTML = "Bot: " + makeClickableLinks(response);
  messagesDiv.appendChild(botMsgDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;

  // Add click to chatbot links
  botMsgDiv.querySelectorAll(".destination-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      filterByDestination(e.target.dataset.name);
    });
  });
});

// Make links clickable
function makeClickableLinks(text) {
  destinations.forEach((dest) => {
    const regex = new RegExp(`\\b${dest.name}\\b`, "g");
    text = text.replace(
      regex,
      `<span class="destination-link" data-name="${dest.name}">${dest.name}</span>`
    );
  });
  return text;
}

// Filter by chatbot click
function filterByDestination(name) {
  const filtered = destinations.filter((d) => d.name === name);
  displayDestinations(filtered);
  updateMapMarkers(filtered);

  const cards = document.querySelectorAll("#destinationCards .card");
  cards.forEach((card) => {
    const title = card.querySelector(".card-title").textContent;
    card.style.border = title === name ? "3px solid #007bff" : "";
    if (title === name) {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
}
