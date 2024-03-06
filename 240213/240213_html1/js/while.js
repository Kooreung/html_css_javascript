const repeatA = ["a구역", "b구역", "c구역", "d구역", "e구역", "f구역", "g구역"];
const imgA = [
    "autumn_1.jpg",
    "autumn_2.jpg",
    "autumn_3.jpg",
    "autumn_4.jpg",
    "autumn_5.jpg",
    "autumn_6.jpg",
    "autumn_7.jpg",
];
let i = 0,
    count = 0;

window.onload = function () {
    // for (i = 0; i < repeatA.length; i++) {
    //     $("nav div:eq(" + i + ")").html(repeatA[i]);
    // }
    while (i < repeatA.length) {
        $("nav div:eq(" + i + ")").html(repeatA[i]);
        if (i >= repeatA.length) {
            break;
        } else {
            i++;
        }
    }
    while (count < imgA.length) {
        $("#img_nav > div:eq(" + count + ")")
            .css("background", "url(img/" + imgA[count] + ")")
            .css("background-size", "100% 100%");
        count++;
    }
};

$(function () {});
