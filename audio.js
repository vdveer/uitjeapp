var mediaplayer;
var lastsong;
function playsound(filename){
	lastsong = filename;
	if(mediaplayer != undefined){
		mediaplayer.release();
	}
	mediaplayer = new Audio(lastsong).play();
}

function onAudioFail(){
	if(mediaplayer != undefined){
		mediaplayer.release();
	}
	mediaplayer = new Media("/android_asset/www/"+lastsong, function(){}, onAudioFail).play();
}
