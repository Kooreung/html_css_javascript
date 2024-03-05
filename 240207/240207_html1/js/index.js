const menuA = ["토끼", "거북이", "용왕", "간땡이", "4차산업"];
const at0A = [
    "1.토끼는 빠르다",
    "2.토끼는 귀가 크다",
    "3.토끼는 귀엽다",
    "4.토끼는 토끼다",
    "5.토끼는 짱이다",
];
const at1A = [
    "1.거북이는 느리다",
    "2.거북이는 작다",
    "3.거북이는 귀엽다",
    "4.거북이는 거북이다",
    "5.거북이는 짱이다",
];
const at2A = [
    "1.용왕은 아프다",
    "2.용왕님 귀는 당나귀 귀다",
    "3.용왕은 예쁘다",
    "4.용왕은 용왕이다",
    "5.용왕은 짱이다",
];
const at3A = [
    "1.토끼는 빠르다",
    "2.토끼는 귀가 크다",
    "3.토끼는 귀엽다",
    "4.토끼는 토끼다",
    "5.토끼는 짱이다",
];
const at4A = [
    "1.토끼는 빠르다",
    "2.토끼는 귀가 크다",
    "3.토끼는 귀엽다",
    "4.토끼는 토끼다",
    "5.토끼는 짱이다",
];
const backA = ["토끼사진", "거북이사진", "용왕사진", "간사진", "4차산업사진"];

let i;

window.onload = function () {
    for (i = 0; i < menuA.length; i++) {
        $("nav div:nth-child(" + (i + 1) + ")").html(menuA[i]);
        $("#title" + i).html(menuA[i]);
        $("#at0 .text li:eq(" + i + ")").html(at0A[i]);
        $("#at1 .text li:eq(" + i + ")").html(at1A[i]);
        $("#at2 .text li:eq(" + i + ")").html(at2A[i]);
        $("#at3 .text li:eq(" + i + ")").html(at3A[i]);
        $("#at4 .text li:eq(" + i + ")").html(at4A[i]);
    }
};

let sw = 0,
    sw2 = 0;

$(function () {
    $(".bar").on("click", function () {
        if (sw2 == 0) {
            $(this).html("X");
            $("nav").animate({ left: "80%" }, 500);
            sw2 = 1;
        } else {
            $(this).html("메뉴");
            $("nav").animate({ left: "100%" }, 500);
            sw2 = 0;
        }
    });
    $("nav div").on("click", function () {
        $("nav").animate({ left: "100%" }, 500);
        no = $(this).index();
        $(".at").hide();
        $("#at" + no).show();
        $(".bar").html("메뉴");
        $(".big")
            .css("background-image", "url('/img/at" + no + ".jpg')")
            .css("background-size", "100%");
    });

    $(".text li").on("click", function () {
        if (sw == 0) {
            sw = 1;
            text_li();
        }
        $(".text li").css("background", "white");
        $(this).css("background", "green");
    });
});

function text_li() {
    $(".text").animate(
        {
            height: "100px",
            top: "80%",
            left: "0%",
            padding: "0",
        },
        500,
        function () {
            $(".text").css({
                display: "flex",
                justifyContent: "space-between",
            });
            $(".text li").css({
                fontSize: "1.5rem",
                width: "15%",
                height: "100%",
                lineHeight: "100px",
                textAlign: "center",
                marginTop: "0",
                textIndent: "0",
            });
        }
    );
    $(".big").animate(
        {
            width: "500px",
            height: "500px",
            padding: "0",
            margin: "auto",
            borderRadius: "100%",
            position: "absolute",
            top: "30%",
            left: "40%",
        },
        500
    );
}