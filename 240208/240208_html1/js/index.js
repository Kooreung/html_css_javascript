window.onload = function () {
    $("#apSection").hide();
    $("#fovSection").hide();
};

$(function () {
    // 내비게이션반응

    $("#headerNav1_title").on({
        mouseenter: function () {
            $("#headerNav1_ID").stop().animate({ top: "50px" }, 500);
            $("#headerNav1_title").stop().animate({ fontSize: "1.2rem" }, 100);
            $("#headerNav1_title").css({
                background: "rgba(253, 245, 230, 0.75)",
            });
        },
        mouseleave: function () {
            $("#headerNav1_ID").stop().animate({ top: "-175px" }, 500);
            $("#headerNav1_title").stop().animate({ fontSize: "1rem" }, 100);
            $("#headerNav1_title").css({
                background: "rgba(255, 255, 255, 0.3",
            });
        },
    });
    $("#headerNav1_ID").on({
        mouseenter: function () {
            $("#headerNav1_ID").stop().animate({ top: "50px" }, 500);
            $("#headerNav1_title").stop().animate({ fontSize: "1.2rem" }, 100);
            $("#headerNav1_title").css({
                background: "rgba(253, 245, 230, 0.75)",
            });
        },
        mouseleave: function () {
            $("#headerNav1_ID").stop().animate({ top: "-175px" }, 500);
            $("#headerNav1_title").stop().animate({ fontSize: "1rem" }, 100);
            $("#headerNav1_title").css({
                background: "rgba(255, 255, 255, 0.3",
            });
        },
    });
    $("#headerNav2_title").on({
        mouseover: function () {
            $("#headerNav2_ID").stop().slideToggle();
            $("#headerNav2_title").stop().animate({ fontSize: "1.2rem" }, 100);
            $("#headerNav2_title").css({
                background: "rgba(253, 245, 230, 0.75)",
            });
        },
        mouseleave: function () {
            $("#headerNav2_ID").stop().slideToggle();
            $("#headerNav2_title").stop().animate({ fontSize: "1rem" }, 100);
            $("#headerNav2_title").css({
                background: "rgba(253, 245, 230, 0.3)",
            });
        },
    });
    $("#headerNav2_ID").on({
        mouseover: function () {
            $("#headerNav2_ID").stop().slideToggle();
            $("#headerNav2_title").stop().animate({ fontSize: "1.2rem" }, 100);
            $("#headerNav2_title").css({
                background: "rgba(253, 245, 230, 0.75)",
            });
        },
        mouseleave: function () {
            $("#headerNav2_ID").stop().slideToggle();
            $("#headerNav2_title").stop().animate({ fontSize: "1rem" }, 100);
            $("#headerNav2_title").css({
                background: "rgba(253, 245, 230, 0.3)",
            });
        },
    });

    // 타이틀 및 내비게이션 클릭반응

    $("#title").on("click", function () {
        $("#main section").hide();
        $("#mainSection").show();
    });

    $("#headerNav1_title").on("click", function () {
        $("#main section").hide();
        $("#fovSection").show();
    });

    $("#headerNav2_title").on("click", function () {
        $("#main section").hide();
        $("#apSection").show();
    });

    const fovA = ["24mm", "35mm", "50mm", "70mm", "105mm", "135mm", "200mm"];

    fovA.forEach((value, index) => {
        $(`#fov${index + 1}`).on("click", function () {
            expOn(index);
        });
    });
});

function expOn(js) {
    $("#fovImg" + (js + 1)).absolute(
        {
            scale: "300%",
        },
        1500,
        function () {
            position: "absolute";
            top: "200%"
            left: "200%"
        }
    );
}

// function expOff(js) {
//     $(".fovImg").animate({
//         height: "100px",
//         top: "80%",
//         left: "0%",
//         padding: "0",
//     });
// }


