const map = L.map('map').setView([50.0614, 19.9366], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.locate({ setView: true, maxZoom: 16 });

map.on('locationfound', function (e) {
    L.marker(e.latlng).addTo(map)
        .bindPopup("Jesteś tutaj!").openPopup();
});

map.on('locationerror', function () {
    alert("Nie można znaleźć Twojej lokalizacji.");
});