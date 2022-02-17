// 1. typa alias 이용
type HelloFunctionGeneric1 = <T>(message: T) => T;   // T를 받아서 T를 리턴

const helloFunction1:HelloFunctionGeneric1 = <T>(message: T): T => {
  return message;
}

// 2. interface 이용
interface HelloFunctionGeneric2 {
  <T>(message: T): T;
}

const helloFunction2: HelloFunctionGeneric2 = <T>(message: T): T => {
  return message;
}