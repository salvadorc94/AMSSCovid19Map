var casos = L.layerGroup();
L.marker([13.735383, -89.201088]).bindPopup("Ayutuxtepeque: 18").addTo(casos);
L.marker([13.694108, -89.109249]).bindPopup("Ilopango: 80").addTo(casos);
L.marker([13.737718, -89.055519]).bindPopup("San Martin: 60").addTo(casos);
L.marker([13.703031, -89.150276]).bindPopup("Soyapango: 258").addTo(casos);
L.marker([13.657497, -89.182463]).bindPopup("San Marcos: 48").addTo(casos);
L.marker([13.6983, -89.19619]).bindPopup("San Salvador: 556").addTo(casos);
L.marker([13.674427, -89.241171]).bindPopup("Antiguo Cuscatlan: 19").addTo(casos);
L.marker([13.812743, -89.230614]).bindPopup("Nejapa: 10").addTo(casos);
L.marker([13.779068, -89.116287]).bindPopup("Tonacatepeque: 45").addTo(casos);
L.marker([13.800407, -89.177742]).bindPopup("Apopa: 81").addTo(casos);
L.marker([13.722876, -89.171219]).bindPopup("Ciudad Delgado: 107").addTo(casos);
L.marker([13.723043, -89.18787]).bindPopup("Mejicanos: 135").addTo(casos);
L.marker([13.673343, -89.286232]).bindPopup("Santa Tecla: 103").addTo(casos);
L.marker([13.727837, -89.180961]).bindPopup("Cuscatancingo: 42").addTo(casos);

var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

var normal   = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
    dark  = L.tileLayer(mbUrl, {id: 'mapbox/dark-v10', tileSize: 512, zoomOffset: -1, attribution: mbAttr});

var map = L.map('covidmap', {
    center: [13.698889, -89.191389],
    zoom: 13,
    layers: [normal, casos]
});

var baseLayers = {
    "Normal": normal,
    "Dark": dark
};

var overlays = {
    "Casos": casos
};

L.control.layers(baseLayers, overlays).addTo(map);


var popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}
map.on('click', onMapClick);

function centerMap(){
    map.setView([13.698889, -89.191389], 13);
}