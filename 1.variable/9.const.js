// let 재활당이 가능
let a = 1;
a = 2;

// const 재활당이 불가능
// 1.상수
// 2.상수변수 또는 변수
const text = 'hello';

// 1.상수
const MAX_FRUITS = 5;
// 2.재활당 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
// apple = {};
console.log(apple);
apple.display = '🍏';
console.log(apple);
