function helloBasic<T>(message: T): T {
  return message;
}

// 1. 함수를 사용할 때 타입을 지정하는 방식 > 지정한 타입으로만 입력할 수 있게 제한이 됨
helloBasic<string>('Searchkim');
// helloBasic<string>(29);   // Error 발생

// 2. 타입을 지정하지 않는 방식
helloBasic('Searchkim');    // Searchkim이라는 값에 의해서 타입이 추론됨
helloBasic(29);             // 29이라는 값에 의해서 타입이 추론됨

// 함수 선언 시, 타입을 여러 개 지정할 수 있음
function helloS<T, U>(message: T, comment: U): T {
  return message;
}

// 1. 타입을 지정하는 방식
helloS<string, number>('Searchkim', 29);
// 2. 타입을 지정하지 않는 방식
helloS(26, 29);     // 타입은 26, 29이다.