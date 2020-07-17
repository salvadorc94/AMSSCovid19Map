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
    el zoom en este caso se ha seteado a 12
    */
    map.setView([13.698889, -89.191389], 12);
}
//Funciones para centrar en el  municipio
function verSS(){

    /*map.setView recibe dos parametros el primero es un arreglo de dos posiciones
    las coordenadas latitud, longitud de San Salvador y la siguiente la altura a la que queremos
    el zoom en este caso se ha seteado a 15
    */
    map.setView([13.696693, -89.196281], 15);
}
function verSoya(){

    /*map.setView recibe dos parametros el primero es un arreglo de dos posiciones
    las coordenadas latitud, longitud de Soyapango y la siguiente la altura a la que queremos
    el zoom en este caso se ha seteado a 15
    */
    map.setView([13.703031, -89.150276], 15);
}
function verMeji(){

    /*map.setView recibe dos parametros el primero es un arreglo de dos posiciones
    las coordenadas latitud, longitud de Mejicanos y la siguiente la altura a la que queremos
    el zoom en este caso se ha seteado a 15
    */
    map.setView([13.723043, -89.18787], 15);
}
function verTecla(){

    /*map.setView recibe dos parametros el primero es un arreglo de dos posiciones
    las coordenadas latitud, longitud de Santa Tecla y la siguiente la altura a la que queremos
    el zoom en este caso se ha seteado a 15
    */
    map.setView([13.673343, -89.286232], 15);
}
function verI(){

    /*map.setView recibe dos parametros el primero es un arreglo de dos posiciones
    las coordenadas latitud, longitud de Ilopango y la siguiente la altura a la que queremos
    el zoom en este caso se ha seteado a 15
    */
    map.setView([13.694108, -89.109249], 15);
}
function verCD(){

    /*map.setView recibe dos parametros el primero es un arreglo de dos posiciones
    las coordenadas latitud, longitud de Ciudad Delgado y la siguiente la altura a la que queremos
    el zoom en este caso se ha seteado a 15
    */
    map.setView([13.722876, -89.171219], 15);
}
function verA(){

    /*map.setView recibe dos parametros el primero es un arreglo de dos posiciones
    las coordenadas latitud, longitud de Apopa y la siguiente la altura a la que queremos
    el zoom en este caso se ha seteado a 15
    */
    map.setView([13.800407, -89.177742], 15);
}
function verSM(){

    /*map.setView recibe dos parametros el primero es un arreglo de dos posiciones
    las coordenadas latitud, longitud de San Marcos y la siguiente la altura a la que queremos
    el zoom en este caso se ha seteado a 15
    */
    map.setView([13.657497, -89.182463], 15);
}
function verSMt(){

    /*map.setView recibe dos parametros el primero es un arreglo de dos posiciones
    las coordenadas latitud, longitud de San Martin y la siguiente la altura a la que queremos
    el zoom en este caso se ha seteado a 15
    */
    map.setView([13.737718, -89.055519], 15);
}
function verCusca(){

    /*map.setView recibe dos parametros el primero es un arreglo de dos posiciones
    las coordenadas latitud, longitud de Cuscatancingo y la siguiente la altura a la que queremos
    el zoom en este caso se ha seteado a 15
    */
    map.setView([13.727837, -89.180961], 15);
}
function verTona(){

    /*map.setView recibe dos parametros el primero es un arreglo de dos posiciones
    las coordenadas latitud, longitud de Tonacatepeque y la siguiente la altura a la que queremos
    el zoom en este caso se ha seteado a 15
    */
    map.setView([13.779068, -89.116287], 15);
}
function verAntiguo(){

    /*map.setView recibe dos parametros el primero es un arreglo de dos posiciones
    las coordenadas latitud, longitud de Antiguo Cuscatlan y la siguiente la altura a la que queremos
    el zoom en este caso se ha seteado a 15
    */
    map.setView([13.674427, -89.241171], 15);
}
function verAyutux(){

    /*map.setView recibe dos parametros el primero es un arreglo de dos posiciones
    las coordenadas latitud, longitud de Ayutuxtepeque y la siguiente la altura a la que queremos
    el zoom en este caso se ha seteado a 15
    */
    map.setView([13.735383, -89.201088], 15);
}
function verNejapa(){

    /*map.setView recibe dos parametros el primero es un arreglo de dos posiciones
    las coordenadas latitud, longitud de Nejapa y la siguiente la altura a la que queremos
    el zoom en este caso se ha seteado a 15
    */
    map.setView([13.812743, -89.230614], 15);
}
/*Implementación de la funcion del botón en la tabla para regresar al mapa*/
$(document).ready(function(){ 
    $('#button_SS').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
$(document).ready(function(){ 
    $('#button_Soya').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
$(document).ready(function(){ 
    $('#button_Meji').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
$(document).ready(function(){ 
    $('#button_Tecla').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
$(document).ready(function(){ 
    $('#button_I').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
$(document).ready(function(){ 
    $('#button_CD').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
$(document).ready(function(){ 
    $('#button_A').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
$(document).ready(function(){ 
    $('#button_SM').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
$(document).ready(function(){ 
    $('#button_SMt').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
$(document).ready(function(){ 
    $('#button_Cusca').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
$(document).ready(function(){ 
    $('#button_Tona').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
$(document).ready(function(){ 
    $('#button_Antiguo').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
$(document).ready(function(){ 
    $('#button_Ayutux').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
$(document).ready(function(){ 
    $('#button_Nejapa').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
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