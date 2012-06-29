var mediaplayer;
var lastsong;
function playsound(filename){
	lastsong = filename;
	if(mediaplayer != undefined){
		mediaplayer.release();
	}
	mediaplayer = new Media(lastsong, function(){}, onAudioFail).play();
}

function onAudioFail(){
	if(mediaplayer != undefined){
		mediaplayer.release();
	}
	mediaplayer = new Media("/android_asset/www/"+lastsong, function(){}, onAudioFail).play();
}
