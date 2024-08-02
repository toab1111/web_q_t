var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_district_1 = new ol.format.GeoJSON();
var features_district_1 = format_district_1.readFeatures(json_district_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_district_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_district_1.addFeatures(features_district_1);
var lyr_district_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_district_1, 
                style: style_district_1,
                popuplayertitle: "district",
                interactive: true,
    title: 'district<br />\
    <img src="styles/legend/district_1_0.png" /> 1<br />\
    <img src="styles/legend/district_1_1.png" /> 2<br />\
    <img src="styles/legend/district_1_2.png" /> 9<br />\
    <img src="styles/legend/district_1_3.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_district_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_district_1];
lyr_district_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'dcode': 'dcode', 'dname': 'dname', 'dname_e': 'dname_e', 'pcode': 'pcode', 'pname': 'pname', 'num_male': 'num_male', 'num_female': 'num_female', 'num_school': 'num_school', 'num_hos': 'num_hos', 'num_comm': 'num_comm', 'num_temple': 'num_temple', 'num_health': 'num_health', 'zone': 'zone', });
lyr_district_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'AREA': 'TextEdit', 'dcode': 'TextEdit', 'dname': 'TextEdit', 'dname_e': 'TextEdit', 'pcode': 'TextEdit', 'pname': 'TextEdit', 'num_male': 'TextEdit', 'num_female': 'TextEdit', 'num_school': 'TextEdit', 'num_hos': 'TextEdit', 'num_comm': 'TextEdit', 'num_temple': 'TextEdit', 'num_health': 'TextEdit', 'zone': 'Range', });
lyr_district_1.set('fieldLabels', {'OBJECTID': 'no label', 'AREA': 'no label', 'dcode': 'no label', 'dname': 'inline label - always visible', 'dname_e': 'no label', 'pcode': 'no label', 'pname': 'no label', 'num_male': 'no label', 'num_female': 'no label', 'num_school': 'no label', 'num_hos': 'no label', 'num_comm': 'no label', 'num_temple': 'no label', 'num_health': 'no label', 'zone': 'no label', });
lyr_district_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});