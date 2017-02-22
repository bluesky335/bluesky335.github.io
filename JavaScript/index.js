var imgindex = 1;
var imagesArray = [
    "images/1.jpeg",
    "images/7.png",
    "images/0.jpeg",
    "images/2.jpeg",
    "images/3.jpeg",
    "images/4.jpeg",
    "images/5.jpeg",
    "images/6.jpeg",
    "images/8.jpg"
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
