// <T extends string | number> : T는 string | number인 union type만 가능
class PersonExtends<T extends string | number> {
  private _name: T;

  constructor(name: T){
    this._name = name;
  }
}

new PersonExtends('Searchkim');
new PersonExtends(123);
// new PersonExtends(boolean);   // Error 발생: string, number타입이 아니기 때문에