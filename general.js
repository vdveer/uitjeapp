var CACHING = {

doCacheAll: function(){

	var element = document.getElementById('download');
	element.setAttribute("onclick", "");
	element.innerHTML = "Downloading... 0%";
	
	var myLoader = html5Preloader();

	myLoader.on('finish', function(){ console.log('All assets loaded.'); });
	myLoader.on('error', function(e){ console.error(e); });

	myLoader.addFiles('activities.html',
'audio.js',
'config.xml',
'contact.html',
'general.js',
'home.css',
'hotel.html',
'hotel.js',
'icon.png',
'index.html',
'leaflet.css',
'leaflet.ie.css',
'leaflet.js',
'map.html',
'map.js',
'polish.html',
'restaurant.css',
'restaurant.html');

}


};
