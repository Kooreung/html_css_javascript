let menu;

window.onload = function () {
    menu = document.querySelector(".menu").getElementsByTagName("li");
    for (i = 0; i < 7; i++) {
        menu[i].style.fontSize = "1.3rem";
        menu[i].style.color = "black";
    }

    let middle;
    middle = document.querySelector(".middle").getElementsByTagName("div");
    for (i = 0; i < 7; i++) {
        middle[i].style.background = "url(img/icon" + [i + 1] + ".png)";
        middle[i].style.backgroundSize = "100% 100%";
    }
};

$(function () {
    $(".menu li").on("click", function () {
        $(".menu li").css("background", "none").css("color", "black");
        $(this).css({ background: "grey", color: "white" });
    });

    $(".middle div").on("click", function () {
        let numb = $(this).index();
        $(".big_pic").attr("src", "img/icon" + [numb + 1] + ".png");
    });
});
