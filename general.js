if(window.applicationCache){
 	window.applicationCache.onupdateready = function(){
 		document.getElementById("status").innerHTML = "Update downloaded";
 	};
 	window.applicationCache.noupdate = function(){
 		document.getElementById("status").innerHTML = "Up to date";
 	};
}else {
	document.getElementById("status").innerHTML = "Not supported"
}