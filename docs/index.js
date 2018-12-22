//getAllChildMarkers retunrs an arrau of markers contained with this cluster.
//the icon works by, cluster gets it child markers.

var markers = L.markerClusterGroup({
  iconCreateFunction: function(cluster) {
    var markers = cluster.getAllChildMarkers();
    var n = 0;
    for (var i = 0; i < markers.length; i++){
      n += markers[i].number;
    }
    return L.divIcon({ html: n, className: 'mycluster', iconSize: [10, 10] });
  }, maxClusterRadius: 200, chunkedLoading: true, singleMarkerMode: true 
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

