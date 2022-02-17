"use strict";
function helloString(message) {
    return message;
}
function helloNumber(message) {
    return message;
}
// 모든 타입을 받고 모든 타입을 리턴할 수 있음 -> Any...?
function hello(message) {
    return message;
}
// string에 사용하는 메소드이지만 any타입이기 때문에 사용할 수 있다.
console.log(hello('Searchkim').length);
// 하지만 number, boolean과 같은 타입에 사용하면 undefined가 출력된다. 
console.log(hello(39).length); // undefined
console.log(hello(true).length); // undefined
// -> 이러한 문제때문에 타입을 변수를 활용해서 리턴타입에 연관을 주면 좋겠다!
// <T> : 타입이라고 생각하면 됨
// 함수 안에서 T를 기억. 
function helloGeneric(message) {
    return message;
}
// Anna라는 리터럴 타입으로 추론됨 -> string
console.log(helloGeneric('Anna'));
console.log(helloGeneric('Anna').length);
// 39라는 리터럴 타입으로 추론됨 -> number
console.log(helloGeneric(39));
// number형으로 추론되었으니 string형에서 사용하는 .length 메서드는 당연히 사용 불가
// console.log(helloGeneric(39).length);     // Error 발생
// true라는 리터럴 타입으로 추론됨 -> boolean
console.log(helloGeneric(true));
