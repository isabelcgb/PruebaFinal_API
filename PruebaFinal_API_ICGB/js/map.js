var map;
var tb;

require([
    "esri/map",
    "esri/geometry/Extent",
    "esri/layers/ArcGISDynamicMapServiceLayer",
    "esri/dijit/BasemapGallery",
    "esri/dijit/Legend",
    "esri/dijit/Scalebar",
    "esri/dijit/Search",

    "dijit/layout/TabContainer",
    "dijit/layout/ContentPane",
    "dijit/layout/BorderContainer",

    "dojo/domReady!",
    "dojo/on"],

    function (Map, Extent, ArcGISDynamicMapServiceLayer, BasemapGallery, Legend, Scalebar, Search,
    on) {

    on(dojo.byId("pintaYQuery"),"click",fPintaYQuery);
    on(dojo.byId("progButtonNode"),"click",fQueryEstados);

    function fPintaYQuery(){
    alert("Evento del botón Ir a estado");
    }
    function fQueryEstados(){
    alert("Evento del botón Seleccionar ciudades");
    }

    //Paso 3: Extensión Inicial
    var extentInitial = new Extent ({
        "xmin":-15503148.235139094,
        "ymin":2294149.6727864263,
        "xmax":-5318067.090198636,
        "ymax":6804545.837836908,
        "spatialReference":{
            "wkid":102100
        }
    });

    //Constructor de Mapa
    map = new Map("map", {
    basemap: "topo",
    extent: extentInitial,
    sliderStyle: "small"
    });

    //Paso 4: Añadir el Servicio de Mapa
    var lyrUSA = new ArcGISDynamicMapServiceLayer ("http://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/", {
        opacity: 0.5
    });
    map.addLayer (lyrUSA);
    
    //Paso 5. Añadir un widget BaseMapGallery
    var basemapGallery = new BasemapGallery ({
        showArcGISBasemaps: true,
        map: map
    }, "basemapGallery");
    basemapGallery.startup ();
    
    //Paso 7.  Añadir un widget de Escala.
    var dijitScalebar= new Scalebar ({
        map: map,
        scalebarUnit: "dual",
        attachTo: "bottom-left"
    });
    
    //Paso 8.  Añadir un widget de Search.
    //var dijiSearch = new Search ({
       // map: mapMain,
       // autoComplete: true
   // }, "divSearch");
    //dijiSearch.startup();
    //});
  
    
    map.on("load",function(evt){
        //Paso 6. Añadir un widget de Leyenda
        var dijitLegend= new Legend ({
            map: map,
            arrangement: Legend.ALIGN_LEFT
            }, "legendDiv");
        dijitLegend.startup();
    map.resize();
    map.reposition();
    });
    

});


