// Math.random() 함수에 10을 곱해서 0 ~ 10 사이의 실수를 만들고,
// Math.ceil() 함수를 이용해 0 ~ 10 사이의 정수를 생성합니다.
ans = 0;                                            // 값을 초기화

do {                                                // do를 먼저 읽고 while를 나중에 읽는다
    var a = Math.ceil(Math.random() * 10);          // 0 ~ 10 사이의 수 랜덤으로 생성
    var b = Math.ceil(Math.random() * 10);          // 0 ~ 10 사이의 수 랜덤으로 생성

    var solution = a * b;                           // 정답을 solution 에 저장

    var ans;                                        // 값을 입력 받을 함수를 생성

    ans = parseInt(prompt(a + "*" + b + "= ?"));    // 사용자에게 답을 입력받음
} while (ans != solution);                          // 입력 받은 값과 정답을 비교
console.log("맞혔습니다!");                          // 정답이면 "맞혔습니다"를 출력