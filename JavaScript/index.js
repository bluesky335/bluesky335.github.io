$(function(){
	$(".menuDiv").mouseenter(function(){
		$(this).stop().animate({width:'100px'},250);
	}).mouseleave(function(){
		$(this).stop().animate({width:'40px'},250);
	});
})

