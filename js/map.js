//Esta variable nos sirve para guardar en ella todos los casos que obtendremos del geojson
var casos = L.layerGroup();

/*
con Fetch obtenemos los datos del geojson luego de acceder al link donde está alojado
utilizamos .then para acceder a los recursos del json y luego a su data
creamos un layer de geoJson y accediendo capa por capa podemos llegar a la propiedad texto
y a las coordenadas luego la agregamos a la variable de casos
*/
fetch('https://raw.githubusercontent.com/salvadorc94/AMSSCovid19Map/dev/resources/cordsMap.geojson')
.then(
    res => res.json()
).then(
    data => {
        let geojsonlayer = L.geoJSON(data, {
            onEachFeature: function(feature, layer){
                layer.bindPopup(feature.properties['text'])
            }
        }).addTo(casos)
    }
)

/*En esta parte definimos los mapas que utilizaremos en este caso obtenemos un mapa bajo la licencia CC BY-SA 2.0 que esta alojado en MapBox */
var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

/*Estas dos variables las utilizamos para guardar los dos estilos de la api de mapbox
en este caso el estilo normal del mapa y el estilo dark
*/    
var normal   = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
    dark  = L.tileLayer(mbUrl, {id: 'mapbox/dark-v10', tileSize: 512, zoomOffset: -1, attribution: mbAttr});

/*Creamos nuestro mapa con las coordenadas centrales y añadimos a este los Layers que antes habiamos creado*/
var map = L.map('covidmap', {
    center: [13.698889, -89.191389],
    zoom: 12,
    layers: [normal, casos]
});


var baseLayers = {
    "Light": normal,
    "Dark": dark
};

var overlays = {
    "Casos": casos
};

L.control.layers(baseLayers, overlays).addTo(map);


var popup = L.popup();



//Esta funcion nos sirve para mostrar las coordenadas en el mapa sobre las cuales hayamos clickeado
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}
map.on('click', onMapClick);

//Funcion para centrar la vista del visor en el mapa
function centerMap(){

    /*map.setView recibe dos parametros el primero es un arreglo de dos posiciones
    las coordenadas latitud, longitud y la siguiente la altura a la que queremos
    el zoom en este caso se ha seteado a 13
    */
    map.setView([13.698889, -89.191389], 12);
}
/*Implementación del botón para regresar arriba del sitio*/
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});