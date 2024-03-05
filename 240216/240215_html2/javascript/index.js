const menuA = [
    "기술역량",
    "포트폴리오",
    "프로젝트경험",
    "면접 준비",
    "이력서 작성",
    "학습 스킬",
    "지속적인학습",
];
const titleA = [
    "주요 기술 스팩에 대한 전문 지식을 소개합니다.",
    "학업 중에 수행한 프로젝트 등을 포함해서 구성했습니다.",
    "협업과 소통 능력을 발휘하여 성공적인 프로젝트 완료한 경험을 갖고 있습니다.",
    "기술적인 능력을 보여주기 위해 이론과 실무에 대한 연습으로 실력을 향상 시켰습니다.",
    "경력사항과 자격사항 등을 경험에 맞춰서 작성했습니다.",
    "HTML, CSS, JAVASCRIPT는 기본이고 스프링부트, JSP, SERVLET, REACT, SQL 등등 학습 했습니다.",
    "노드, 앵귤러, 몽고디비 기타등등을 학습 중에 있습니다.",
];

const menu_posA = [150, 380, 600, 800, 1050, 550, 1150];
let menu, i;

window.onload = function () {
    menu = document.getElementsByClassName("menu");
    for (i = 0; i < menuA.length; i++) {
        menu[i].innerHTML = menuA[i];
    }
};

$(function () {
    $("nav > div").on("mouseover", function () {
        no = $(this).index();
        $("#subtitle").html(titleA[no]);
        $("#subtitle").css("marginLeft", menu_posA[no]);
    });
});
