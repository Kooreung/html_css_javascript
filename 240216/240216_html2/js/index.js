// function btn1() {
//     const num1 = document.getElementById("num1");
//     const result1 = document.getElementById("result1");
//     const cash1 = parseInt(num1.value);

//     if (cash1 % 2 == 0) result1.innerHTML = "짝수";
//     else result1.innerHTML = "홀수";
// }

// function btn2() {
//     const num2 = document.getElementById("num2");
//     const result2 = document.getElementById("result2");
//     const cash2 = parseInt(num2.value);

//     if (cash2 % 3 == 0) result2.innerHTML = "3의 배수입니다.";
//     else result2.innerHTML = "아닙니다";
// }

// function btn2() {
//     const num2 = document.getElementById("num2");
//     const result2 = document.getElementById("result2");
//     const cash2 = parseInt(num2.value);

//     if (cash2 % 3 == 0) {
//         result2.innerHTML = "3의 배수입니다.";
//     } else {
//         result2.innerHTML = "아닙니다";
//     }
// }
// function btn3() {
//     const num3 = document.getElementById("num3");
//     const result3 = document.getElementById("result3");
//     const cash3 = parseInt(num3.value);

//     if (cash3 < 19) {
//         result3.innerHTML = "미성년자입니다.";
//     } else {
//         result3.innerHTML = "성인입니다.";
//     }
// }

// function btn4() {
//     const num4 = document.getElementById("num4");
//     const result4 = document.getElementById("result4");
//     const cash4 = parseInt(num4.value);

//     if (cash4 > 60) {
//         result4.innerHTML = "합격입니다.";
//     } else {
//         result4.innerHTML = "불합격입니다.";
//     }
// }

function btn5() {
    // const num5 = document.getElementById("num5");
    // const result5 = document.getElementById("result5");
    const cash5 = parseInt(num5.value);

    if (cash5 >= 80) {
        result5.innerHTML = "1입니다.";
    } else if (cash5 >= 70) {
        result5.innerHTML = "2입니다.";
    } else if (cash5 >= 60) {
        result5.innerHTML = "3입니다.";
    } else {
        result5.innerHTML = "불합격입니다.";
    }
}
