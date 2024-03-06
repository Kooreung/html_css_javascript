let siderbarSwitch = 0;
const titleA = ["좀비", "스켈레톤", "크리퍼"];
const titlecolorA = ["green", "red", "blue"];
const at_bgA = ["autumn_0", "autumn_1", "autumn_2"];
const at0_imgA = [
    "zombie_0.webp",
    "zombie_1.webp",
    "zombie_2.webp",
    "zombie_3.mp4",
];
const at1_imgA = ["skeleton_0.webp", "skeleton_1.webp", "skeleton_2.webp"];
const at2_imgA = ["creeper_0.webp", "creeper_1.webp"];

window.onload = function () {
    for (i = 0; i < titleA.length; i++) {
        $("#at" + i + "_title").html(titleA[i]);
        $("#at" + i + "_title").css("background-color", titlecolorA[i]);
        $("#at" + i + "_bg").css(
            "background-image",
            "url(img/" + at_bgA[i] + ".jpg)"
        );
    }
    for (i = 0; i < at0_imgA.length; i++) {
        $("#at0_img" + i)
            .css("background-image", "url(img/" + at0_imgA[i])
            .css("background-size", "100% 200%");
        $("#at1_img" + i)
            .css("background-image", "url(img/" + at1_imgA[i])
            .css("background-size", "100% 200%");
        $("#at2_img" + i)
            .css("background-image", "url(img/" + at2_imgA[i])
            .css("background-size", "100% 200%");
    }
};

$(function () {
    $("#sidebar").on("click", function () {
        if (siderbarSwitch == 0) {
            $("#sidebar_menu").stop().animate({ right: "0px" }, 500);
            siderbarSwitch = 1;
            console.log(siderbarSwitch);
        } else {
            $("#sidebar_menu").stop().animate({ right: "-110px" }, 500);
            siderbarSwitch = 0;
            console.log(siderbarSwitch);
        }
    });
    $("#at0_title").on("click", function () {
        $(".at").css("opacity", "0");
        no = $(this).attr("class").substr(1, 1);
        console.log(no);
    });
});
