const destinations = [
  {
    name: "Axum",
    description: "Historic city with ancient obelisks.",
    image: "images/axum.jpg",
  },
  {
    name: "Gera'alta",
    description: "Rock-hewn churches and mountains.",
    image: "images/geraalta.jpg",
  },
  {
    name: "Yeha",
    description: "Ancient temples and archaeology.",
    image: "images/yeha.jpg",
  },
];
const cardContainer = document.getElementById("destinationCards");

function displayDestinations() {
  cardContainer.innerHTML = "";
  destinations.forEach((dest) => {
    cardContainer.innerHTML += `
      <div class="col-md-4">
        <div class="card">
          <img src="${dest.image}" class="card-img-top" alt="${dest.name}">
          <div class="card-body">
            <h5>${dest.name}</h5>
            <p>${dest.description}</p>
          </div>
        </div>
      </div>`;
  });
}

displayDestinations();
