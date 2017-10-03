L.mapbox.accessToken = 'pk.eyJ1IjoiYmdjYW1lcmFhbGVydCIsImEiOiJjajF3M2pvMGUwMDExMnFwb2FrZXJkMWQxIn0.XWO61ZQC1-EpeXNivwHp3A';
function onEachFeature(feature, layer) {
	var popupContent = "<p>Geo Cordinates " +
			feature.geometry.type + "</p>";
	if (feature.geometry && feature.geometry.coordinates) {
		popupContent += feature.geometry.coordinates;
	}
	layer.bindPopup(popupContent);
}
var options = {
  minZoom: 8
};
var map = L.mapbox.map('map', 'mapbox.streets', options).setView([42.6582, 25.24658], 7);
L.mapbox.styleLayer('mapbox://styles/bgcameraalert/cj76c8vyl573o2sshtf8i8chv').addTo(map);
//map.scrollWheelZoom.disable();
