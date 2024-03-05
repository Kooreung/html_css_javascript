// JavaScript 코드에서 정적인 div 생성
const staticDiv = document.createElement("div");
staticDiv.className = "big_img1";

// top div 생성 및 스타일 추가
const topDiv = document.createElement("div");
topDiv.className = "top";
topDiv.style.border = "0.1rem dotted"; // 보더 추가
topDiv.style.padding = "1rem"; // 패딩 추가
topDiv.style.textAlign = "center"; // 가운데 정렬 추가

// table 요소에 클래스 추가
const tableElement = document.createElement("table");
tableElement.className = "table1";
tableElement.style.border = "0.1rem dotted"; // 테이블에 보더 추가
tableElement.style.width = "90%"; // 변경된 부분
tableElement.style.margin = "auto"; // 테이블 가운데 정렬 추가

const trElement = document.createElement("tr");

// 정적인 p 요소들 추가
for (let i = 1; i <= 5; i++) {
    const pElement = document.createElement("p");
    pElement.textContent = `표내용${i}`;

    // 스타일 추가
    pElement.style.width = "5rem";
    pElement.style.height = "5rem";
    pElement.style.border = "0.1rem dotted"; // 변경된 부분
    pElement.style.display = "inline-block"; // 인라인 블록 설정
    pElement.style.marginRight = "0.5rem"; // 가로 간격 추가

    const tdElement = document.createElement("td");
    tdElement.appendChild(pElement);
    trElement.appendChild(tdElement);
}

// 정적인 요소들을 조합하여 staticDiv에 추가
tableElement.appendChild(trElement);
topDiv.appendChild(tableElement);
staticDiv.appendChild(topDiv);

// body 요소에 정적인 staticDiv를 추가
document.body.appendChild(staticDiv);
