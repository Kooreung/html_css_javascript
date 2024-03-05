let kor = 50,
  eng = 38,
  mat = 40,
  sum = 0,
  avg = 0;
let k, e, m, s, a;

window.onload = function () {
  var cal = document.getElementById("cal");
  cal.addEventListener("click", function () {
    s = kor + eng + mat;
    a = s / 3;
    // alert("총점 : " + sum);
    // alert("평균 : " + avg);
    sum = document.querySelector(".sum");
    avg = document.querySelector(".avg");
    sum.innerHTML = s;
    avg.innerHTML = a.toFixed(2);
  });
};
