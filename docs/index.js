const { convertCSVToArray } = require('convert-csv-to-array');
const converter = require('convert-csv-to-array');
const clusterer = require('leaflet.markercluster');

var array = convertCSVToArray(text, {
header: false,
  type: 'array',
  separator: ';'
});

//bring in the number values.
var number_runs = convertCSVToArray(number, {
  header: false,
  separator: '\n',
  type: 'array'
});

//getAllChildMarkers retunrs an arrau of markers contained with this cluster.
//the icon works by, cluster gets it child markers.
var markers = L.markerClusterGroup({
  maxClusterRadius: 200,
  iconCreateFunction: function (cluster) {
    var markers = cluster.getAllChildMarkers();
    var n = 0;
    for (var i = 0; i < markers.length; i++){
      n += markers[i].number;
    }
    return L.divIcon({ html: n, className: 'mycluster', iconSize: [10, 10] });
  },
  chunkedLoading: true, singleMarkerMode: true
});

function populate() {
  for (var i = 0; i < array.length; i++) {
    var a = array[i];
    var title = number_runs[i];
    var m = L.marker(new L.LatLng(a[0], a[1]), {title: title});
    m.number = Number(title);
    markers.addLayer(m);
  }
  return false;
}

populate();
map.addLayer(markers);

//Necessary format for the points:
//[{"r":0.26666666666666669,"g":0.00392156862745098,"b":0.32941176470588237},
//{"r":0.9921568627450981,"g":0.9058823529411765,"b":0.1450980392156863}]


//add the legend to the map
