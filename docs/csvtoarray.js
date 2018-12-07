const { convertCSVToArray } = require('convert-csv-to-array');
const converter = require('convert-csv-to-array');

var array = convertCSVToArray(text, {
header: false,
  type: 'array',
  separator: ';'
});
/*
console.log(JSON.stringify(array));

var colorsRGB = convertCSVToArray(colors, {
	header: false,
	separator: ';',
	type: 'object',
});


//Necessary format for the points:
//[{"r":0.26666666666666669,"g":0.00392156862745098,"b":0.32941176470588237},
//{"r":0.9921568627450981,"g":0.9058823529411765,"b":0.1450980392156863}]


let clrs = function(i, point) {
	return colors[i]; 
};
*/
L.glify.points({
  map: mymap,
  data: array,
  click: function(e, point, xy) {
  	L.popup()
  	.setLatLng(point)
  	.setContent("You clicked the point at longitude:" + point[L.glify.longitudeKey] + ', latitude:' + point[L.glify.latitudeKey])
    .openOn(mymap);
    console.log(point);  	
  },
  //color: clrs
});
