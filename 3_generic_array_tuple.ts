/* 배열 형태 */
function helloArray<T>(message: T[]): T {   // T배열이 매개변수, T의 요소가 리턴
  return message[0];    // T[]배열의 0번째 요소 리턴
}

helloArray(['hello', 'world']);
helloArray(['hello', 123]);   // T는 string | number인 union type이 된다.

/* 튜플 형태 */
function helloTuple<T, K>(message: [T, K]): T {
  return message[0]; 
}

// 앞, 뒤 모두 string 타입
helloTuple(['hello', 'world']); 
// 앞에는 string 타입, 뒤에는 number타입이기 때문에 리턴은 0번째 인덱스인 string으로 정확히 추론됨
helloTuple(['hello', 123]); 