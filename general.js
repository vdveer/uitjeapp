var totalFiles = 559;
var downloaded = 0;

if(window.applicationCache){
 	window.applicationCache.addEventListener("updateready", function(e){
 		document.getElementById("status").innerHTML = "Available offline";
 		if(!window.onLine){
		document.getElementById("status").innerHTML = "Working offline now";
	}
 	}, false);
 	window.applicationCache.addEventListener("cached", function(e){
 		document.getElementById("status").innerHTML = "Available offline";
 		if(!window.onLine){
		document.getElementById("status").innerHTML = "Working offline now";
	}
 	}, false);
 	window.applicationCache.addEventListener("checking", function(e){
 		document.getElementById("status").innerHTML = "Checking";
 		if(!window.onLine){
		document.getElementById("status").innerHTML = "Working offline now";
	}
 	}, false);
 	window.applicationCache.addEventListener("noupdate", function(e){
 		document.getElementById("status").innerHTML = "Available offline";
 		if(!window.onLine){
		document.getElementById("status").innerHTML = "Working offline now";
	}
 	}, false);
 	window.applicationCache.addEventListener("downloading", function(e){
 		downloaded++;
 		document.getElementById("status").innerHTML = "Downloading... [" + downloaded + "/" + totalFiles + "]"; 
 		if(!window.onLine){
		document.getElementById("status").innerHTML = "Working offline now";
	}
 	}, false);

}else {
	document.getElementById("status").innerHTML = "Not supported"
}