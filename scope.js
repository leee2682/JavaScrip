function a() {                                                          // a() 함수 생성
    var v_a = "a";                                                      // 변수 v_a 초기화


function b() {                                                         // a() 함수 안에 b() 함수를 생성</span>
    var v_b = "b";                                                      // b() 함수 안에서 변수 v_b를 초기화</span>
    console.log("b :", typeof(v), typeof(v_a), typeof(v_b));            // b : string string string 
}

b();                                                                   // a() 함수 안에서 b() 함수를 호출</span>

console.log("a :", typeof(v), typeof(v_a), typeof(v_b));                // a : string string undefined
}

var v = "v";                                                            // a() 함수 바깥에서 변수 v 초기화

a();                                                                   // a() 함수 호출

console.log("o :", typeof(v), typeof(v_a), typeof(v_b));                // o : string undefined undefined