let menuList = ["aaa", "bbb", "ccc", "ddd", "eee", "fff", "ggg", "hhh"];
let menu, i;

window.onload = function () {
    menu = document.querySelector(".menu").getElementsByTagName("div");
    for (i = 0; i < menuList.length; i++) {
        menu[i].innerHTML = menuList[i];
    }
};

$(function () {
    $(".menu div").on("click", function () {
        no = $(this).index();

        $(".section").hide();
        $("#section_" + no).show();
        $("#section_" + no).animate({ opacity: 1, left: 200 }, 500);
    });

    $("#section_0 ul li").on("click", function () {
        no = $(this).index();

        $(".section0_bottom").animate({ opacity: 0 }, 500);
        $("#section0_bottom" + no).show();
        $("#section0_bottom" + no).animate({ opacity: 1 }, 500);
        $(".section0_menu").css({ background: "none" });
        $(this).css({ background: "skyblue" });
    });
});
