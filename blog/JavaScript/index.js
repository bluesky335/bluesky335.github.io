var windowHeight;

$(function(){
	$(".leftDiv").height($(window).height());
	$(".menuItem").mouseleave(function (){
		$(".menuTagDiv").stop().animate({"opacity":"0"},function(){
			$(this).css({"display":"none"});
		});
		$(this).css({"background-color":"#333333"});
	}).mouseenter(function(){
		var index = $(".menuItem").index($(this));
		var text = ["博客首页","分类","音乐"];
		if($(".menuTagDiv").css("opacity")==0){
			$(".menuTagDiv")
			.css({"display":"block","top":40+50*(index)+15})
			.stop()
			.animate({"opacity":"1"})
			.html(text[index]);
		}
		else{
			$(".menuTagDiv")
			.css({"display":"block"})
			.stop()
			.animate({"opacity":"1","top":40+50*(index)+15})
			.html(text[index]);
		}
		
		$(this).css({"background-color":"dodgerblue"});
	}).click(function(){
		var index = $(this).index();
		$(".leftDiv").animate({"opacity":"0"},function(){
			$(this).html("hahahahahahahahahah");
		})
		.animate({"opacity":"1"});
	});
});

$(window).resize(function(){
	$(".leftDiv").height($(window).height());
	console.log("111");
});

