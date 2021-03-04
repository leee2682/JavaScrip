var height = prompt("키를 입력해 주세요.");

console.log(height, typeof(height));
/* 입력 받은 문자열을 그대로 ("123") 돌려주기 때문에 string 타입이다. */

var height_int = parseInt(height);
console.log(height_int, typeof(height_int));
/* str -> int 바꾸고 소수점 삭제. */

var height_float = parseFloat(height);
console.log(height_float, typeof(height_float));
/* str -> int 바꾸고 소수점 출력. */