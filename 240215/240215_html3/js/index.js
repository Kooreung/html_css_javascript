let img5A = [
    "img/autumn_0.jpg",
    "img/autumn_1.jpg",
    "img/autumn_2.jpg",
    "img/autumn_3.jpg",
    "img/autumn_4.jpg",
    "img/autumn_0.jpg",
];
let text5A = ["aaa", "bbb", "ccc", "ddd", "eee", "fff"];

window.onload = function () {
    let img5Items = document.querySelectorAll(".img5 li");
    let text5Items = document.querySelectorAll(".text5 li");

    for (i = 0; i < img5Items.length; i++) {
        img5Items[i].style.backgroundImage = `url(${img5A[i]})`;
    }
};
