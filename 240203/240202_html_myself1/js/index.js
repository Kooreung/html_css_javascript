function exampleConst() {
  const x = 10;
  if (true) {
    const y = 20;
    console.log(x); // 10
    console.log(y); // 20
  }
  // console.log(y); // 에러: y는 블록 외부에서 접근 불가
}

exampleConst();