const menuA = ["메뉴0", "메뉴1", "메뉴2", "메뉴3", "메뉴4"];
const sectionTitleA = [
    "메뉴0-0",
    "메뉴0-1",
    "메뉴0-2",
    "메뉴0-3",
    "메뉴1-0",
    "메뉴1-1",
    "메뉴1-2",
    "메뉴1-3",
    "메뉴1-4",
    "메뉴2-0",
    "메뉴2-1",
    "메뉴2-2",
    "메뉴3-0",
    "메뉴3-1",
    "메뉴3-2",
    "메뉴3-3",
    "메뉴3-4",
    "메뉴4-0",
    "메뉴4-1",
    "메뉴4-2",
];

window.onload = function () {
    for (i = 0; i < menuA.length; i++) {
        document.getElementById("menuTitle" + i).innerHTML = menuA[i];
    }
};

function sectionTitleChange(index) {
    const sectionTitle = document.getElementById("sectionTitle");
    sectionTitle.textContent = sectionTitleA[index];
}

const menu0_0 = document.getElementById("menuList0-0");

menu0_0.addEventListener("mouseover"),
    function () {
        sectionTitleChange(0);
    };
