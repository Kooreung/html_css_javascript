// HTML 요소 생성 및 속성 설정
const body = document.body;

// 배경 설정
const backDiv = document.createElement("div");
backDiv.style.width = "100%";
backDiv.style.height = "100%";
backDiv.style.background = "url(../img/bg.jpg) no-repeat";
backDiv.style.backgroundSize = "cover";
backDiv.style.position = "fixed";
backDiv.style.top = "0";
backDiv.style.left = "0";
backDiv.style.zIndex = "-1";
body.appendChild(backDiv);

// 타이틀 메뉴 설정
const titleUl = document.createElement("ul");
titleUl.className = "title";
titleUl.style.width = "90%";
titleUl.style.height = "8rem";
titleUl.style.border = "0.1rem solid orange";
titleUl.style.margin = "auto";
titleUl.style.display = "flex";
titleUl.style.alignItems = "center";
titleUl.style.justifyContent = "space-evenly";
titleUl.style.listStyle = "none";
titleUl.style.fontFamily = "black han sans";

const titleLiArray = [];
for (let i = 0; i < 8; i++) {
  const titleLi = document.createElement("li");
  titleLi.style.width = "12rem";
  titleLi.style.height = "3rem";
  titleLi.style.border = "0.1rem dotted orangered";
  titleLi.style.textAlign = "center";
  titleLi.style.fontSize = "0.9vw";
  titleLi.style.lineHeight = "3rem";
  titleLi.style.cursor = "pointer";

  titleLiArray.push(titleLi);
  titleUl.appendChild(titleLi);
}

// drop 함수 정의
function drop() {
  const drop = event.target;
  drop.style.transform = "translateY(100px)";
  drop.addEventListener(
    "transitionend",
    function () {
      drop.style.transform = "none";
    },
    { once: true }
  );
}

titleLiArray[3].id = "drop";
titleLiArray[3].onclick = drop;

body.appendChild(titleUl);

// 섹션 요소 생성 및 스타일 설정
for (let i = 0; i <= 7; i++) {
  const section = document.createElement("section");
  section.id = `secID${i}`;
  section.className = `sec${i}`;
  section.style.width = "100%";
  section.style.height = "900px";
  section.style.position = "absolute";
  section.style.top = "12rem";
  section.style.left = "0";
  section.style.display = "none";
  section.style.overflow = "hidden";
  body.appendChild(section);
}

// 메뉴 설정
const menuDiv = document.createElement("div");
menuDiv.className = "menu";
menuDiv.style.width = "15rem";
menuDiv.style.height = "3rem";
menuDiv.style.border = "0.1rem dotted orangered";
menuDiv.style.textIndent = "1rem";
menuDiv.style.marginTop = "2rem";
menuDiv.style.marginLeft = "6vw";

const menuP = document.createElement("p");
menuP.style.width = "100%";
menuP.style.height = "100%";
menuP.style.border = "0.1rem dotted orangered";
menuP.style.fontSize = "1.2rem";
menuP.style.lineHeight = "3rem";

const menuSubUl = document.createElement("ul");
menuSubUl.className = "sub";
menuSubUl.style.border = "0.1rem dotted rgb(8, 214, 77)";
menuSubUl.style.listStyle = "none";
menuSubUl.style.display = "none";

const menuSubLiArray = [];
for (let i = 0; i < 5; i++) {
  const menuSubLi = document.createElement("li");
  menuSubLi.style.width = "100%";
  menuSubLi.style.height = "2rem";
  menuSubLi.style.border = "0.1rem dotted rgb(8, 214, 77)";
  menuSubLi.style.textIndent = "2dvh";
  menuSubLi.style.lineHeight = "2rem";
  menuSubLi.style.cursor = "pointer";

  menuSubLiArray.push(menuSubLi);
  menuSubUl.appendChild(menuSubLi);
}

menuDiv.appendChild(menuP);
menuDiv.appendChild(menuSubUl);
body.appendChild(menuDiv);

// 팁 설정
const tipDiv = document.createElement("div");
tipDiv.className = "tip";
tipDiv.style.width = "5rem";
tipDiv.style.height = "5rem";
tipDiv.style.border = "0.1rem dotted orangered";
tipDiv.style.borderRadius = "100%";
tipDiv.style.background = "rgba(0, 0, 0, 0.301)";
tipDiv.style.position = "fixed";
tipDiv.style.top = "12rem";
tipDiv.style.right = "6vw";

const tipP = document.createElement("p");
tipP.style.width = "100%";
tipP.style.height = "100%";
tipP.style.border = "0.1rem dotted orangered";
tipP.style.textAlign = "center";
tipP.style.lineHeight = "5rem";

const tipInnerDiv = document.createElement("div");
tipInnerDiv.style.width = "15rem";
tipInnerDiv.style.height = "4rem";
tipInnerDiv.style.border = "0.1rem dotted orangered";
tipInnerDiv.style.marginLeft = "12rem";
tipInnerDiv.style.position = "absolute";
tipInnerDiv.style.top = "100%";
tipInnerDiv.style.lineHeight = "4rem";
tipInnerDiv.style.textAlign = "right";
tipInnerDiv.style.transition = "0.5s";

tipDiv.appendChild(tipP);
tipDiv.appendChild(tipInnerDiv);
body.appendChild(tipDiv);

// 빅 설정
const bigDiv = document.createElement("div");
bigDiv.className = "big";
bigDiv.style.width = "50%";
bigDiv.style.height = "40rem";
bigDiv.style.border = "0.1rem solid rgb(111, 0, 255)";
bigDiv.style.padding = "1rem";
bigDiv.style.position = "fixed";
bigDiv.style.left = "28%";

const bigTextDiv = document.createElement("div");
bigTextDiv.className = "big_text1";
bigTextDiv.style.width = "30%";
bigTextDiv.style.height = "10rem";
bigTextDiv.style.border = "0.1rem solid rgb(111, 0, 255)";
bigTextDiv.style.marginTop = "1rem";
bigTextDiv.style.position = "relative";
bigTextDiv.style.textAlign = "center";
bigTextDiv.style.fontSize = "1.2rem";

const bigImgDivArray = [];
for (let i = 1; i <= 3; i++) {
  const bigImgDiv = document.createElement("div");
  bigImgDiv.className = "big_img";
  bigImgDiv.id = `big_img_id${i}`;
  bigImgDiv.style.width = "200%";
  bigImgDiv.style.border = "0.1rem solid rgb(111, 0, 255)";
  bigImgDiv.style.position = "absolute";
  bigImgDiv.style.top = "0%";
  bigImgDiv.style.left = "100%";
  bigImgDiv.style.display = "none";

  const bigImgTable = document.createElement("table");
  bigImgTable.style.width = "100%";
  bigImgTable.style.border = "0.1rem solid rgb(0, 255, 55)";
  bigImgTable.style.margin = "auto";
  bigImgTable.style.fontSize = "1rem";

  const bigImgTd = document.createElement("td");
  bigImgTd.style.width = "50%";
  bigImgTd.style.border = "0.1rem solid rgb(0, 255, 55)";

  const bigImgImg = document.createElement("img");
  bigImgImg.src = `img/img${i}.gif`;
  bigImgImg.alt = "";
  bigImgImg.width = "50%";
  bigImgImg.style.border = "0.1rem dotted orangered";

  const bigImgPArray = [];
  for (let j = 0; j < 5; j++) {
    const bigImgP = document.createElement("p");
    bigImgP.style.width = "100%";
    bigImgP.style.border = "0.1rem dotted orangered";
    bigImgPArray.push(bigImgP);
  }

  bigImgTd.appendChild(bigImgImg);
  bigImgTd.appendChild(bigImgPArray[0]);
  bigImgTd.appendChild(bigImgPArray[1]);
  bigImgTd.appendChild(bigImgPArray[2]);
  bigImgTd.appendChild(bigImgPArray[3]);
  bigImgTd.appendChild(bigImgPArray[4]);

  bigImgTable.appendChild(bigImgTd);
  bigImgDiv.appendChild(bigImgTable);
  bigImgDivArray.push(bigImgDiv);
}

bigDiv.appendChild(bigTextDiv);
bigImgDivArray.forEach((div) => bigDiv.appendChild(div));
body.appendChild(bigDiv);
