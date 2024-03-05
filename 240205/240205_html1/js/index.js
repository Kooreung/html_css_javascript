// 변수를 만드는 방법 : 영어로 시작 / $로 시작해도 됨 / _로 시작해도 됨
//   특수문자, 공백 사용 불가

// 자바스크립트 기본 문법
//   한 문장이 끝나면 ; 해 줘야 함
//   명령어는 소문자 입력. 대소문자를 구분한다.

// alert ("연결");
// document.write("자동차");

// a = 100;
// b = 200;
// c = a + b;

// k = '홍길동';

// document.write(c + ':' + k);

var menu1,
  menu2,
  menu3,
  menu4,
  pic,
  no,
  count = 1;
let prev, next, first, last;

window.onload = function () {
  menu1 = document.getElementById("menu1");
  menu2 = document.getElementById("menu2");
  menu3 = document.getElementById("menu3");
  menu4 = document.getElementById("menu4");
  pic = document.querySelector(".pic");
  no = document.querySelector(".no");
  prev = document.querySelector("prev");
  next = document.querySelector("next");
  first = document.querySelector("first");
  last = document.querySelector("last");

  menu1.onclick = function () {
    pic.src = "img/cat (1).jpg";
    no.innerHTML = 1;
  };
  menu2.onclick = function () {
    pic.src = "img/cat (2).jpg";
    no.innerHTML = 2;
  };
  menu3.onclick = function () {
    pic.src = "img/cat (3).jpg";
    no.innerHTML = 3;
  };
  menu4.onclick = function () {
    pic.src = "img/cat (4).jpg";
    no.innerHTML = 4;
  };

  prev = document.querySelector(".prev");
  // prev.onclick = function () {
  //   if (count > 1) count--;
  //   no.innerHTML = count;
  //   pic.src = "img/cat (" + count + ").jpg";
  // };
  next = document.querySelector(".next");
  // next.onclick = function () {
  //   if (count < 4) count++;
  //   no.innerHTML = count;
  //   pic.src = "img/cat (" + count + ").jpg";
  // };

  prev.addEventListener("click", function () {
    if (count > 1) count--;
    else {
      count = 4;
    }
    no.innerHTML = count;
    pic.src = "img/cat (" + count + ").jpg";
  });
  next.addEventListener("click", function () {
    if (count < 4) count++;
    else {
      count = 1;
    }
    no.innerHTML = count;
    pic.src = "img/cat (" + count + ").jpg";
  });
  
  first = document.querySelector("first");
  last = document.querySelector("last");

  
  first.addEventListener("click", function () {
    count = 1;
    no.innerHTML = count;
    pic.src = "img/cat (" + count + ").jpg";
  });
  last.addEventListener("click", function () {
    count = 4;
    no.innerHTML = count;
    pic.src = "img/cat (" + count + ").jpg";
  });
};