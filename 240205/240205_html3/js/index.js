window.onload = function () {
  let menu0, menu1, menu2, menu3;
  menu0 = document.getElementById("menu0");
  menu1 = document.getElementById("menu1");
  menu2 = document.getElementById("menu2");
  menu3 = document.getElementById("menu3");

  let sub0, sub1, sub2, sub3;
  sub0 = document.querySelector(".sub0");
  sub1 = document.querySelector(".sub1");
  sub2 = document.querySelector(".sub2");
  sub3 = document.querySelector(".sub3");

  // js 버전

  // let title = document.querySelector(".title");
  // menu0.onclick = function () {
  //   title.innerHTML = "MBTI 검사에 오신 것을 환영합니다.";
  // };
  // menu1.onclick = function () {
  //   title.innerHTML = "DISC 검사입니다.";
  // };
  // menu2.onclick = function () {
  //   title.innerHTML = "흥미적성 검사입니다.";
  // };
  // menu3.onclick = function () {
  //   title.innerHTML = "학습역량 전사입니다.";
  // };

  // 제이쿼리로 작성 방법

  // $(".menu li").on("click", function () {
  //   no = $(this).index();
  //   if (no == 0) $(".title").text("MBTI검사에 오신 것을 환영합니다.");
  //   else if (no == 1) $(".title").text("DISC검사에 오신 것을 환영합니다.");
  //   else if (no == 2) $(".title").text("흥미적성검사에 오신 것을 환영합니다.");
  //   else if (no == 3) $(".title").text("학습역량검사에 오신 것을 환영합니다.");
  // });
};

$(function () {
  $(".menu li").on("click", function () {
    $(".menu li").css("background", "none");
    $(this).css("background", "orange");
    $("article").hide();
    no = $(this).index();
    if (no == 0) {
      $(".title").text("MBTI검사에 오신 것을 환영합니다.");
      $(".at0").show();
      $(".sub0").text("에너지 충전");
      $(".sub1").text("인식기증(정보수집)");
      $(".sub2").text("판단기능(결정,선택)");
      $(".sub3").text("생활양식(판단,)");
    } else if (no == 1) {
      $(".title").text("DISC검사에 오신 것을 환영합니다.");
      $(".at1").show();
      $(".sub0").text("ㄱ");
      $(".sub1").text("ㄴ");
      $(".sub2").text("ㄷ");
      $(".sub3").text("ㄹ");
    } else if (no == 2) {
      $(".title").text("흥미적성검사에 오신 것을 환영합니다.");
      $(".at2").show();
      $(".sub0").text("ㅁ");
      $(".sub1").text("ㅂ");
      $(".sub2").text("ㅅ");
      $(".sub3").text("ㅇ");
    } else if (no == 3) {
      $(".title").text("학습역량검사에 오신 것을 환영합니다.");
      $(".at3").show();
      $(".sub0").text("ㅁ");
      $(".sub1").text("ㅂ");
      $(".sub2").text("ㅅ");
      $(".sub3").text("ㅇ");
    }
  });
  $(".left div").hover(
    function () {
      $(this).css("background", "skyblue");
    },
    function () {
      $(this).css("background", "none");
    }
  );
  $(".left div").on("click", function () {
    $(".left div").css("background", "none");
    $(this).css("background", "blue");
    no = $(this).index();
    if (no == 0) {
      $(".sub0").text("에너지 충전");
      $(".sub1").text("인식기증(정보수집)");
      $(".sub2").text("판단기능(결정,선택)");
      $(".sub3").text("생활양식(판단,)");
    } else if (no == 1) {
      $(".sub0").text("ㄱ");
      $(".sub1").text("ㄴ");
      $(".sub2").text("ㄷ");
      $(".sub3").text("ㄹ");
    } else if (no == 2) {
    } else if (no == 3) {
    }
  });

  $(".at0_box0").on("click", function () {
    $(".at0_box").css("opacity", "0.3");
    $(".at0_box1").css("opacity", "1");
  });
  $(".at0_box1").on("click", function () {
    $(".at0_box").css("opacity", "0.3");
    $(".at0_box2").css("opacity", "1");
  });
});
