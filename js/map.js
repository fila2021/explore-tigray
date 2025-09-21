let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("mapContainer"), {
    zoom: 8,
    center: { lat: 14.3, lng: 39.0 },
  });
}
window.onload = initMap;
