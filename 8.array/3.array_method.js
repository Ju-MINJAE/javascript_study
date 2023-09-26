// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지

const fruit = ['🍎', '🍊', '🍌', '🍓'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruit));
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을때
console.log(fruit.indexOf('🍓'));

// 배열안에 특정한 아이템이 있는지 체크
console.log(fruit.includes('🍓'));

// 추가 - 제일 뒤
fruit.push('🍑'); // 배열 자체를 수정(업데이트)
console.log(fruit);
console.log(fruit.length);
// 추가 - 제일 앞
length = fruit.unshift('🥭'); // 배열 자체를 수정,업데이트
console.log(fruit);
console.log(fruit.length);

// 제거 - 제일 뒤
let lastItem = fruit.pop();
console.log(fruit);
console.log(lastItem);
// 제거 - 제일 앞
lastItem = fruit.shift(); // 배열 자체를 수정(업데이트)
console.log(fruit);
console.log(lastItem);

// 중간에 추가 또는 삭제
const deleted = fruit.splice(1, 1); // 배열 자체를 수정(업데이트)
console.log(fruit);
console.log(deleted);
fruit.splice(1, 0, '🥝', '🥥');
console.log(fruit);

// 잘라진 새로운 배열을 만듬
let newArr = fruit.slice(0, 2);
console.log(newArr);

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);
console.clear();
// 중복 배열을 하나의 배열로 쫙 펴가
let arr = [
  [1, 2, 3],
  [4, [5, 6]],
];
console.log(arr);
console.log(arr.flat(2));
arr = arr.flat(2);
// 특정한 값으로 배열을 채우기
arr.fill(0); // 배열 자체를 수정
console.log(arr);
arr.fill('s', 1, 3);
console.log(arr);
arr.fill('a', 3);
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join(' | ');
console.log(text);
