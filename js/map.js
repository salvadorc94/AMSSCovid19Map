var casos = L.layerGroup();
L.marker([13.73241, -89.21176]).bindPopup("Ayutuxtepeque: 18").addTo(casos);
L.marker([13.69899,-89.11584]).bindPopup("Ilopango: 80").addTo(casos);
L.marker([13.73536, -89.07157]).bindPopup("San Martin: 60").addTo(casos);
L.marker([13.702188, -89.141838]).bindPopup("Soyapango: 258").addTo(casos);
L.marker([13.66464, -89.18258]).bindPopup("San Marcos: 48").addTo(casos);
L.marker([13.6983, -89.19619]).bindPopup("San Salvador: 556").addTo(casos);
L.marker([13.673324, -89.24461]).bindPopup("Antiguo Cuscatlan: 19").addTo(casos);

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