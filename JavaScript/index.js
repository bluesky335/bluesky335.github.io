var imgindex = 1;
var imagesArray = [
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487670708913&di=0e7830941d4a0cb263eae324b45ac811&imgtype=0&src=http%3A%2F%2Fimage103.360doc.com%2FDownloadImg%2F2017%2F02%2F2017%2F91918399_6.jpg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488266058&di=fa4421e68e00ebf48454fdc514e1b039&imgtype=jpg&er=1&src=http%3A%2F%2Fimage65.360doc.com%2FDownloadImg%2F2013%2F10%2F0712%2F35698035_25.jpg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487671339139&di=f18e1531046a598cc33b22f1171e130c&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201505%2F06%2F20150506011410_GtwXT.jpeg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487670671751&di=f3f20d8614f7976b246cc2d4be5739bc&imgtype=0&src=http%3A%2F%2Fbizhi.zhuoku.com%2F2016%2F09%2F01%2Fzhuoku%2Fzhuoku004.jpg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487671378128&di=00e4ca2efe3cf4f33039cb18c5701fd0&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201504%2F26%2F194420sdovlw1emrvq11dl.jpg"
];
$(function() {
    
    $("#bg1").css({ "background-image": "url("+imagesArray[0]+")" });
    $("#bg2").css({ "background-image": "url("+imagesArray[1]+")" });
    var timer = setInterval(function() {
        $("#bg1").animate({ "opacity": 0 }, 1500, function() {
            $("#bg1").css({ "background-image": "url("+imagesArray[imgindex]+")" });
            $("#bg1").css({ "opacity": 1 });
            imgindex = 1 + imgindex;
            if(imgindex >= imagesArray.length) {
                imgindex = 0;
            }
            $("#bg2").css({ "background-image": "url("+imagesArray[imgindex]+ ")" });
        });
    }, 5000);
    resizeBgImage();
    $(".link").mouseenter(function() {
        $(this).animate({ "width": 90, "height": 90, "border-radius": 45, "margin": 0 }, 100);
    }).mouseout(function() {
        $(this).stop().animate({ "width": 70, "height": 70, "border-radius": 35, "margin": 10 }, 100);
    });


    preload(imagesArray);

});

function preload(imageUrls) {

    var images = new Array();
    for(i = 0; i < imageUrls.length; i++) {
        images[i] = new Image()
        images[i].src = preload.arguments[i]
    }
}

$(window).resize(function() {
    resizeBgImage();
});

function resizeBgImage() {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    if(windowHeight / windowWidth < 9 / 16) {
        var imagepositiony = (windowWidth * (9 / 16) - windowHeight) / 2 * -1;
        $("#bg1,#bg2").css({ "background-size": "100% auto", "background-position-y": imagepositiony, "background-position-x": 0 });
    } else {
        var imagepositionx = (windowHeight * (16 / 9) - windowWidth) / 2 * -1;
        $("#bg1,#bg2").css({ "background-size": "auto 100%", "background-position-x": imagepositionx, "background-position-y": 0 });
    }

}
