function shadowing_example() {
    var val = 5;                // 지역 변수
    console.log("f", val);      // 함수 안에서 변수 val의 값 출력
    val++;                      // val 값을 1 증가
}

var val = 0;                    // (전역 변수) 함수 바깥에서는 변수 val 을 선언하고 0으로 초기화
shadowing_example();            // 함수 호출
console.log("O", val)           // 가장 바깥에서 변수 val의 값 출력