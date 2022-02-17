interface IPerson {
  name: string,
  age: number;
}

const person: IPerson = {
  name: 'Searchkim',
  age: 29
}

function getProp(obj, key) {
  return obj[key];
}