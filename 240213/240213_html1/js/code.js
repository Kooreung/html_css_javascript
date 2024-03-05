const menuA = [
    "박장대소",
    "기립박수",
    "미소찾기",
    "박수웃음",
    "개웃김",
    "소웃김",
    "말웃김",
];
const pic_textA = [
    "박장대소이다.",
    "기립박수이다.",
    "미소찾기이다.",
    "박수웃음이다.",
    "개웃음이다.",
    "소웃음이다.",
    "말웃음이다.",
];

let i, no;

window.onload = function () {
    for (i = 0; i < menuA.length; i++) {
        $("nav div:eq(" + i + ")").html(menuA[i]);
    }
};

$(function () {
    $("nav div").on("click", function () {
        no = $(this).index();
        $(".pic").attr("src", "img/IMG2_" + no + ".jpg");
        $(".pic_text").text(pic_textA[no]);
    });
});
