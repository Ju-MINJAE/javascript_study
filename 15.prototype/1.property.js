const dog = { name: '와우', emoji: '🐶' };

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

console.log('name' in dog); // dog 안에 name이 있는지 확인 (in)
console.log(dog.hasOwnProperty('name'));

// 오브젝트의 각각의 프로퍼티 디스크립터라고 하는 객체러 저장됨
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);

const desc = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(desc);

Object.defineProperty(dog, 'name', {
  value: '멍멍',
  writable: false,
  enumerable: false,
  configurable: false,
});
console.log(dog.name);
console.log(Object.keys(dog));
delete dog.name;
console.log(dog.name);
