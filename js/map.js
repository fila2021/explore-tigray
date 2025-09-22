let map;
let markers = [];

function showMapLoader(show = true) {
  const loader = document.getElementById("mapLoader");
  if (!loader) return;
  loader.classList.toggle("visually-hidden", !show);
}

function showMapError(message) {
  const err = document.getElementById("mapError");
  if (!err) return;
  if (!message) {
    err.classList.add("visually-hidden");
    err.textContent = "";
    return;
  }
  err.textContent = message;
  err.classList.remove("visually-hidden");
}

function initMap() {
  showMapLoader(true);
  showMapError("");

  try {
    map = new google.maps.Map(document.getElementById("mapContainer"), {
      zoom: 8,
      center: { lat: 14.3, lng: 39.0 },
    });

    // Populate markers with full list if available
    if (typeof updateMapMarkers === "function")
      updateMapMarkers(window.destinations || []);

    // Hide loader after small delay to allow tiles to paint
    setTimeout(() => showMapLoader(false), 800);
  } catch (err) {
    console.error("Map failed to initialize:", err);
    showMapLoader(false);
    showMapError(
      "Map failed to load. Please check your API key or network connection."
    );
  }
}

function updateMapMarkers(list) {
  if (!map) {
    // If map not initialized yet, try again later
    return;
  }

  showMapLoader(true);
  showMapError("");

  // Remove existing markers
  markers.forEach((m) => m.setMap(null));
  markers = [];

  if (!Array.isArray(list) || list.length === 0) {
    // Center to default
    map.setCenter({ lat: 14.3, lng: 39.0 });
    showMapLoader(false);
    return;
  }

  const bounds = new google.maps.LatLngBounds();

  list.forEach((dest) => {
    try {
      const marker = new google.maps.Marker({
        position: { lat: dest.lat, lng: dest.lng },
        map: map,
        title: dest.name,
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `<h5>${dest.name}</h5>
                  <p>${dest.description}</p>
                  <a href="${dest.wiki}" target="_blank" rel="noopener noreferrer">Read more on Wikipedia</a>`,
      });

      marker.addListener("click", () => infoWindow.open(map, marker));

      markers.push(marker);
      bounds.extend(marker.getPosition());
    } catch (err) {
      console.error("Failed to create marker for", dest.name, err);
    }
  });

  if (list.length === 1) {
    map.setCenter({ lat: list[0].lat, lng: list[0].lng });
    map.setZoom(10);
  } else {
    map.fitBounds(bounds);
  }

  // small delay to keep UI smooth
  setTimeout(() => showMapLoader(false), 350);
}

// expose destinations globally for map init usage
window.destinations = destinations;

// If API uses callback=initMap on the script tag, Google will call initMap automatically
