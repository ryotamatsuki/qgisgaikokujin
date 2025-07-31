var wms_layers = [];


        var lyr_2_0 = new ol.layer.Tile({
            'title': '英語2',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/english/{z}/{x}/{y}.png'
            })
        });

        var lyr__1 = new ol.layer.Tile({
            'title': '地理院地図（英語）',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/english/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: '市区町役場',
                interactive: true,
                title: '<img src="./styles/legend/_3.png" /> 市区町役場'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: '医療機関',
                interactive: true,
    title: '医療機関<br />    <img src="./styles/legend/_4_0.png" /> 病院<br />    <img src="./styles/legend/_4_1.png" /> 診療所<br />    <img src="./styles/legend/_4_2.png" /> 歯医者<br />    <img src="./styles/legend/_4_3.png" /> <br />' });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: '学校',
                interactive: true,
    title: '学校<br />\n    <img src="./styles/legend/_5_0.png" /> 小学校<br />\n    <img src="./styles/legend/_5_1.png" /> 中学校<br />\n    <img src="./styles/legend/_5_2.png" /> 中等教育学校<br />\n    <img src="./styles/legend/_5_3.png" /> 高等学校<br />\n    <img src="./styles/legend/_5_4.png" /> 高等専門学校<br />\n    <img src="./styles/legend/_5_5.png" /> 短期大学<br />\n    <img src="./styles/legend/_5_6.png" /> 大学<br />\n    <img src="./styles/legend/_5_7.png" /> 幼稚園<br />\n    <img src="./styles/legend/_5_8.png" /> 特別支援学校<br />\n    <img src="./styles/legend/_5_9.png" /> 幼保連携型認定こども園<br />\n    <img src="./styles/legend/_5_10.png" /> 各種学校<br />\n    <img src="./styles/legend/_5_11.png" /> 専修学校<br />\n    <img src="./styles/legend/_5_12.png" /> <br />' });

lyr_2_0.setVisible(true);lyr__1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);
var layersList = [lyr_2_0,lyr__1,lyr_OpenStreetMap_2,lyr__3,lyr__4,lyr__5];
lyr__3.set('fieldAliases', {'P34_001': 'P34_001', 'P34_002': 'P34_002', 'P34_003': 'P34_003', 'P34_004': 'P34_004', });
lyr__4.set('fieldAliases', {'P04_001': 'P04_001', 'P04_002': 'P04_002', 'P04_003': 'P04_003', 'P04_004': 'P04_004', 'P04_005': 'P04_005', 'P04_006': 'P04_006', 'P04_007': 'P04_007', 'P04_008': 'P04_008', 'P04_009': 'P04_009', 'P04_010': 'P04_010', });
lyr__5.set('fieldAliases', {'P29_001': 'P29_001', 'P29_002': 'P29_002', 'P29_003': 'P29_003', 'P29_004': 'P29_004', 'P29_005': 'P29_005', 'P29_006': 'P29_006', 'P29_007': 'P29_007', 'P29_008': 'P29_008', 'P29_009': 'P29_009', });
lyr__3.set('fieldImages', {'P34_001': 'TextEdit', 'P34_002': 'TextEdit', 'P34_003': 'TextEdit', 'P34_004': 'TextEdit', });
lyr__4.set('fieldImages', {'P04_001': 'Range', 'P04_002': 'TextEdit', 'P04_003': 'TextEdit', 'P04_004': 'TextEdit', 'P04_005': 'TextEdit', 'P04_006': 'TextEdit', 'P04_007': 'Range', 'P04_008': 'Range', 'P04_009': 'Range', 'P04_010': 'Range', });
lyr__5.set('fieldImages', {'P29_001': 'TextEdit', 'P29_002': 'TextEdit', 'P29_003': 'TextEdit', 'P29_004': 'TextEdit', 'P29_005': 'TextEdit', 'P29_006': 'TextEdit', 'P29_007': 'TextEdit', 'P29_008': 'TextEdit', 'P29_009': 'TextEdit', });
lyr__3.set('fieldLabels', {'P34_001': 'no label', 'P34_002': 'no label', 'P34_003': 'no label', 'P34_004': 'no label', });
lyr__4.set('fieldLabels', {'P04_001': 'no label', 'P04_002': 'no label', 'P04_003': 'no label', 'P04_004': 'no label', 'P04_005': 'no label', 'P04_006': 'no label', 'P04_007': 'no label', 'P04_008': 'no label', 'P04_009': 'no label', 'P04_010': 'no label', });
lyr__5.set('fieldLabels', {'P29_001': 'no label', 'P29_002': 'no label', 'P29_003': 'no label', 'P29_004': 'no label', 'P29_005': 'no label', 'P29_006': 'no label', 'P29_007': 'no label', 'P29_008': 'no label', 'P29_009': 'no label', });
lyr__5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});