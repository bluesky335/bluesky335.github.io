$(function(){
	resizeBgImage();
});

$(window).resize(function(){
	resizeBgImage();
}); 

function resizeBgImage(){
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	
	if(windowHeight/windowWidth<9/16){
		var imagepositiony = (windowWidth * (9/16)-windowHeight)/2*-1;
		$(".bgdiv").css({"background-size":"100% auto","background-position-y":imagepositiony,"background-position-x":0});
	}else{
		var imagepositionx = (windowHeight * (16/9)-windowWidth)/2*-1;
		$(".bgdiv").css({"background-size":"auto 100%","background-position-x":imagepositionx,"background-position-y":0});
	}
	
}
