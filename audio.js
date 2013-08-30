
function playsound(filename){
	var a = document.getElementsByTagName("audio")[0];
	if (a !== undefined){
		a.src = filename;
		a.play();
	}
}
