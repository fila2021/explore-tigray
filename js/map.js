let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("mapContainer"), {
    zoom: 8,
    center: { lat: 14.3, lng: 39.0 },
  });
}
window.onload = initMap;
function addMarkers() {
  destinations.forEach((dest) => {
    new google.maps.Marker({
      position: { lat: dest.lat, lng: dest.lng },
      map,
      title: dest.name,
    });
  });
}
window.onload = () => {
  initMap();
  addMarkers();
};
