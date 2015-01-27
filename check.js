lastTime = new Date().getTime();
isFocus = true;
var log = function(text){
	console.log(new Date().getTime() + " " +text);
	var s = document.getElementById('status');
	s.innerHTML = s.innerHTML + "\n" + text;
};
setInterval(function(){
	var now = new Date().getTime();
	if(now - lastTime > 900){
		if(isFocus){
			log('You lost the focus!');
			isFocus = false;
		}
	}else{
		if(!isFocus){
			log('You are now focused.');
			isFocus = true;
		}
	}
	lastTime = now;
}, 100);