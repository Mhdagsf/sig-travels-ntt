var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_point_1 = new ol.format.GeoJSON();
var features_point_1 = format_point_1.readFeatures(json_point_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_point_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_1.addFeatures(features_point_1);
var lyr_point_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_point_1, 
                style: style_point_1,
                popuplayertitle: "point",
                interactive: true,
                    title: '<img src="styles/legend/point_1.png" /> point'
                });

lyr_OSMStandard_0.setVisible(true);lyr_point_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_point_1];
lyr_point_1.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_point_1.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_point_1.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_point_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});