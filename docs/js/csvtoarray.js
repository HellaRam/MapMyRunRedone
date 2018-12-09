const { convertCSVToArray } = require('convert-csv-to-array');
const converter = require('convert-csv-to-array');

var array = convertCSVToArray(text, {
header: false,
  type: 'array',
  separator: ';'
});

var colorsRGB = convertCSVToArray(colors, {
	header: false,
	separator: ';',
	type: 'object',
});

//bring in the number values.
var number_runs = convertCSVToArray(number, {
  header: false,
  separator: '\n',
  type: 'array'
});

console.log(array.length);

function getItemInArray(array, item) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][0] == item[0] && array[i][1] == item[1]) {
      return i;
    }
  }
  return false;
}



console.log(number_runs[getItemInArray(array, [39.621, -76.4322])]);
//Necessary format for the points:
//[{"r":0.26666666666666669,"g":0.00392156862745098,"b":0.32941176470588237},
//{"r":0.9921568627450981,"g":0.9058823529411765,"b":0.1450980392156863}]

let clrs = function(i, point) {
	return colorsRGB[i]; 
};

L.glify.points({
  map: mymap,
  data: array,
  click: function(e, point, x, f) {
  	L.popup()
  	.setLatLng(e.latlng)
  	.setContent("This point has been run "  + getItemInArray(array, [point]) +' times')
    .openOn(mymap);
    console.log(number_runs[getItemInArray(array, point)], point);  	
  },
  color: clrs,
  size: 15
});
/*
//add the legend to the map
var legend = L.control({position: 'bottomright'});
//"classes extending L.control will inherit the following methods."
legend.onAdd = function (mymap) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 10, 20, 50, 100, 200, 500, 1000],
        labels = ['<strong>Number of runs</strong>'];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(map);

*/