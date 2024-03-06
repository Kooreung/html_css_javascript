const menuA = ["회사소개", "주문예약", "매장관리", "판매실적", "도움말"];
const imgA = ["img0.jpg", "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
const imgTextA = ["장장", "간장", "고추장", "된장", "양념"];

window.onload = function () {
    for (i = 0; i < 5; i++) {
        $("header div:eq(" + i + ")").text(menuA[i]);
    }
};

$(function () {
    $("header div").on("click", function () {
        // $("header div").css("background", "skyblue");
        // $(this).css("background", "orange");
        $("header div").removeClass("selected");
        $(this).toggleClass("selected");
        // 또 다른 방식
        // $(this).toggleClass("selected").sibling().removeClass("selected");
        no = $(this).index();
        $(".pic").attr("src", "img/" + imgA[no]);
        $(".text").html(imgTextA[no]);
    });

    let sw1 = 0;

    $(".menu").on("click", function () {
        console.log(sw1);
        if (sw1 === 0) {
            $("nav").animate({ left: "0px" }, 500);
            sw1 = 1;
        } else {
            $("nav").animate({ left: "-100px" }, 500);
            sw1 = 0;
        }
    });
});
