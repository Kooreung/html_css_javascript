window.onload = function () {
    // document.write("<br>자동차-0");
    // document.write("<br>자동차-1");
    // document.write("<br>자동차-2");
    // document.write("<br>자동차-3");
    // document.write("<br>자동차-4");
    // for (i = 0; i < 5; i++) document.write("<br>자동차-" + i);
    // document.write("<br>다음-" + i + "<br>");
    //---
    // let sum = 0,
    //     odd = 0, // 합을 구하는 변수는 반드시 초기화 시켜야 함
    //     x = 0,
    //     str = "",
    //     box;
    //---
    // 홀수 합계 구한 후 나머지 짝수 합계 구하기
    // // for (i = 1; i < 100; i++)
    // //     // document.write("<br>숫자" + i);
    // //     if (i % 2 == 0) {
    // //         sum += i;
    // //     } else odd += i;
    // // document.write("<br>합계" + sum);
    // // document.write("<br>짝수합계" + odd);
    //---
    // 3단 구하기
    // for (i = 1; i <= 9; i++) {
    //     x = 3 * i;
    //     str += "<br>3 곱하기" + i + "=" + x;
    // }
    // box = document.querySelector(".box");
    // box.innerHTML = str;
    //---
    // 구구단만들기
    let dan, ok, box;

    dan = document.querySelector(".dan");
    ok = document.querySelector(".ok");
    box = document.querySelector(".box");
    ok.addEventListener("click", function () {
        str = "";
        let gu = Number(dan.value);
        console.log(dan.value); //input 태그 값 주려면 .value
        for (i = 1; i <= 9; i++) {
            str += "<br>" + gu + "*" + i + "=" + gu * i;
        }
        box.innerHTML = str;
    });
};
