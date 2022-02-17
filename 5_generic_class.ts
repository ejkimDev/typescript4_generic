// T의 유효범위는 클래스 전체이기 때문에 클래스 이름 뒤에 <T> 선언 
class Person<T, K>
 {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K){
    this._name = name;
    this._age = age
  }
}

// 1. 타입 지정하는 방식
new Person<string, number>('Mark', 22);
// new Person<string, number>('Mark', 'Anna');   // Error 발생

// 2. 타입을 지정하지 않는 방식
new Person('Searchkim', 22);
new Person('Searchkim', 'Jade');

