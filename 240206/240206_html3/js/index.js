window.onload = function () {
    $(".bottom div").hide();
    $(".bottom5").show();
    $(".bottom5 div").show();
};

$(function () {
    $(".right div").on("click", function () {
        let numb = $(this).attr("class").substring(5, 6);
        console.log(numb);
        $(".bottom div").hide();
        $(".bottom" + numb).show();
        $(".bottom" + numb + " div").show();
    });

    let gno, sno;

    $(".bottom5_menu li").on("click", function () {
        $(".bottom5_menu li").css("background", "none");
        $(this).css("background", "lightblue");

        gno = $(this).index() + 1;
        console.log(gno);
        for (i = 0; i < 6; i++) {
            $(".bottom5_pic" + i).attr(
                "src",
                "img/IMG" + gno + "_" + i + ".jpg"
            );
        }
    });

    $(".bottom5_small li").on("click", function () {
        sno = $(this).index() + 1;
        console.log(gno);
        console.log(sno);
        $(".bottom5_bigpic").attr("src", "img/IMG" + gno + "_" + sno + ".jpg");
    });
});
