window.onload = function () {};

$(function () {
    $("#sidebar").on("click", function () {
        if (siderbarSwitch == 0) {
            $("#sidebar_menu").stop().animate({ right: "0px" }, 500);
            siderbarSwitch = 1;
            console.log(siderbarSwitch);
        } else {
            $("#sidebar_menu").stop().animate({ right: "-110px" }, 500);
            siderbarSwitch = 0;
            console.log(siderbarSwitch);
        }
    });
    $("#at0_title").on("click", function () {
        $(".at").css("opacity", "0");
        no = $(this).attr("class").substr(1, 1);
        console.log(no);
    });
});
