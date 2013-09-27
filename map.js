var map;

TextButtonControl = function(theLocationFunction, buttonTXT, positionTXT) { 
    var control = new (L.Control.extend({ 
    options: { position: positionTXT }, 
    onAdd: function (map) { 
	var className = 'leaflet-control-zoom';
        controlDiv = L.DomUtil.create('div', className); 
        L.DomEvent 
            .addListener(controlDiv, 'click', L.DomEvent.stopPropagation) 
            .addListener(controlDiv, 'click', L.DomEvent.preventDefault) 
            .addListener(controlDiv, 'click', this.LocationFunction); 
        // Set CSS for the control border 
        var controlUI = L.DomUtil.create('div', 
'button-border', controlDiv); 
        controlUI.title = 'Button'; 
        // Set CSS for the control interior 
        var controlText = L.DomUtil.create('div', 
'button-interior', controlUI); 
        controlText.innerHTML = buttonTXT; 
        return controlDiv; 
    } 
    })); 
    control.LocationFunction = theLocationFunction; 
    return control; 
}; 

		function initmap(){
			map = new L.Map('map');

			var cloudmadeUrl = '{z}/{x}/{y}.png',
				cloudmadeAttribution = '<a href="http://openstreetmap.org/">OSM</a> --- <a href="http://topicus.nl/">Topicus</a>',
				cloudmade = new L.TileLayer(cloudmadeUrl, {maxZoom: 17, minZoom: 8, attribution: cloudmadeAttribution});

			map.addControl(TextButtonControl(LocationFunction,"Current", "topright")); 
			map.addControl(TextButtonControl(KrakowFunction,"Budapest", "topright")); 
			map.addControl(TextButtonControl(BackFunction,"BACK", "bottomleft")); 

			var hotel = new L.Marker(new L.LatLng(47.494137, 19.059812));
			var restaurant = new L.Marker(new L.LatLng(47.486919,19.063339));
		 	var lunch = new L.Marker(new L.LatLng(47.500489,19.052074));
		 	var trap1 = new L.Marker(new L.LatLng(1,1));
		 	var trap2 = new L.Marker(new L.LatLng(1,2));

			var popupContent = 'Huidige locatie.', popup = new L.Popup();

			popup.setContent(popupContent);

			hotel.bindPopup("Hotel Astoria");
			restaurant.bindPopup("Voros Postakocsi");
			lunch.bindPopup("Meetingpoint biketour");
			trap1.bindPopup("TRAP room 1");
			trap2.bindPopup("TRAP room 2");

			hotel.on('click', function(e){e.openPopup();});
			restaurant.on('click', function(e){e.openPopup();});
			lunch.on('click', function(e){e.openPopup();});
			trap1.on('click', function(e){e.openPopup();});
			trap2.on('click', function(e){e.openPopup();});

			
			map.addLayer(cloudmade);
			map.addLayer(restaurant);
			map.addLayer(hotel);
			map.addLayer(lunch);
			map.addLayer(trap1);
			map.addLayer(trap2);
	
			map.on('locationfound', onLocationFound);
			map.on('locationerror', onLocationError);
			
			map.locate();
		
			function onLocationFound(e) {
				var radius = e.accuracy / 2;
	
				var circle = new L.Circle(e.latlng, radius);

				circle.on('click',function(f){
					popup.setLatLng(new L.LatLng(f.target._latlng.lat, f.target._latlng.lng));
					map.openPopup(popup);
				});
					
				map.addLayer(circle);
				map.setView(e.latlng, 8);

				if(isInCracow(e.latlng)){ 
					map.setZoom(12);
					//alert('in krakow'); 
				} 
				else { 
					map.setZoom(8); 
					//alert('niet in krakow'); 
				}
				
			}
	
			function onLocationError(e) {
				//FAIL
			}

			function isInCracow(l){
				//alert('in function');
				if(l.lat < 47.74579 && l.lat > 47.22983 && l.lng < 19.48563 && l.lng > 18.66028){
					return true;
				}
				return false;			
			}
		}




LocationFunction = function () { map.locate(); }; 
KrakowFunction = function(){ map.setView(new L.LatLng(47.494137, 19.059812), 17); };
BackFunction = function(){ window.location = "index.html"; };

document.addEventListener("deviceready", initmap, false);
