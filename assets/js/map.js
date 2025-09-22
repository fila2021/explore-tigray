// -------------------
// Google Map Setup
// -------------------
let map;
let markers = [];

// Initialize Map
function initMap() {
  map = new google.maps.Map(document.getElementById("mapContainer"), {
    center: { lat: 13.5, lng: 39.5 }, // Center of Tigray
    zoom: 7,
  });

  // Add markers for all destinations
  updateMapMarkers(destinations);
}

// -------------------
// Update Map Markers
// -------------------
function updateMapMarkers(list) {
  // Clear old markers
  markers.forEach((marker) => marker.setMap(null));
  markers = [];

  // Add new markers
  list.forEach((dest) => {
    const marker = new google.maps.Marker({
      position: { lat: dest.lat, lng: dest.lng },
      map,
      title: dest.name,
    });

    // Info window
    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div style="max-width: 200px;">
          <h6>${dest.name}</h6>
          <p style="font-size: 0.9rem;">${dest.description}</p>
        </div>
      `,
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });

    markers.push(marker);
  });

  // Adjust map bounds if markers exist
  if (markers.length > 0) {
    const bounds = new google.maps.LatLngBounds();
    markers.forEach((marker) => bounds.extend(marker.getPosition()));
    map.fitBounds(bounds);
  }
}

// Initialize map after window load
window.addEventListener("load", initMap);
