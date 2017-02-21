var imgindex=2;
$(function(){
	var timer = setInterval(function(){
		console.log("sss="+imgindex);
		$("#bg1").animate({"opacity":0},1500,function(){
			$("#bg1").css({"background-image": "url(./images/"+imgindex+".jpg)"});
			$("#bg1").css({"opacity":1});
			imgindex = 1 + imgindex;
		if(imgindex>5){
			imgindex = 1;
		}
			$("#bg2").css({"background-image": "url(./images/"+imgindex+".jpg)"});
		});
	},5000);
	resizeBgImage();
	$(".link").mouseenter(function(){
		$(this).animate({"width":90,"height":90,"border-radius":45,"margin":0},100);
	}).mouseout(function(){
		$(this).stop().animate({"width":70,"height":70,"border-radius":35,"margin":10},100);
	});
	
	 var images = new Array()
            function preload() {
                for (i = 0; i < preload.arguments.length; i++) {
                    images[i] = new Image()
                    images[i].src = preload.arguments[i]
                }
            }
            preload(
                "./images/1.jpg",
                "./images/2.jpg",
                "./images/3.jpg",
                "./images/4.jpg",
                "./images/5.jpg"
            )
	
});

$(window).resize(function(){
	resizeBgImage();
}); 

function resizeBgImage(){
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	
	if(windowHeight/windowWidth<9/16){
		var imagepositiony = (windowWidth * (9/16)-windowHeight)/2*-1;
		$("#bg1,#bg2").css({"background-size":"100% auto","background-position-y":imagepositiony,"background-position-x":0});
	}else{
		var imagepositionx = (windowHeight * (16/9)-windowWidth)/2*-1;
		$("#bg1,#bg2").css({"background-size":"auto 100%","background-position-x":imagepositionx,"background-position-y":0});
	}
	
}
