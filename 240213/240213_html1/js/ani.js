const menuA = ["menu_1", "menu_2", "menu_3"];
const moveA = [
    "autumn_1",
    "autumn_2",
    "autumn_3",
    "autumn_4",
    "autumn_5",
    "autumn_6",
    "autumn_7",
];

const menulistA = [
    "가가",
    "나나",
    "다다",
    "라라",
    "마마",
    "바바",
    "사사",
    "아아",
    "자자",
    "차차",
    "타타",
];
let i = 0;

window.onload = function () {
    let menu = document.querySelector(".menu").getElementsByTagName("li");
    for (i = 0; i < menulistA.length; i++) {
        console.log(i);
        menu[i].innerHTML = menulistA[i];
    }
};

$(function () {
    //미완성

    // for (i = 0; i < menuA.length; i++)
    //     $("#menu_" + i).on("click", function () {
    //         console.log(i);
    //         $(".move").animate({ left: "100%" }, 500);
    //         $("#move_" + i).animate({ left: "20%" }, 500);
    //     });

    // no 인덱스 사용 방법

    // $(".menu li").on("click", function () {
    //     no = $(this).index();
    //     console.log(no);
    //     $(".move").animate({ left: "100%" }, 500);
    //     $("#move_" + no).animate({ left: "20%" }, 500);
    // });

    //  사용 방법

    $(".menu li").on("click", function () {
        no = $(this).index();
        console.log(no);
        $(".pic2").attr("src", "img/" + moveA[no] + ".jpg");
        $(".move").animate({ left: "20%" }, 500);
    });
});
