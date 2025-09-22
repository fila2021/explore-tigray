let map;
let markers = [];

function initMap() {
  map = new google.maps.Map(document.getElementById("mapContainer"), {
    zoom: 8,
    center: { lat: 14.3, lng: 39.0 },
  });
  if (typeof updateMapMarkers === "function") updateMapMarkers(destinations);
}

function updateMapMarkers(list) {
  markers.forEach((m) => m.setMap(null));
  markers = [];

  list.forEach((dest) => {
    const marker = new google.maps.Marker({
      position: { lat: dest.lat, lng: dest.lng },
      map: map,
      title: dest.name,
    });
    const info = new google.maps.InfoWindow({
      content: `<h5>${dest.name}</h5><p>${dest.description}</p>`,
    });
    marker.addListener("click", () => info.open(map, marker));
    markers.push(marker);
  });
}

window.onload = initMap;
