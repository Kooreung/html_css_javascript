window.onload = function () {
    let skip = document.querySelector(".skip");
    let back = document.getElementById("back");

    // 같은 버전 1
    // skip.onclick = function () {
    //     back.style.display = "none";
    // };

    // 같은 버전 2
    // skip.addEventListener("click");
    //     back.style.display = "none";

    // 같은 버전 3
    skip.addEventListener("click", func_skip);
};

function func_skip() {
    back.style.display = "none";
}

$(function () {});
