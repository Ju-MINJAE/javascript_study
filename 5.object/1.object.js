// Object literal {key: value }
// new Object()
// Object.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체(함수)

let apple = {
  name: 'apple',
  'hello-bye': '🙌', // helloBye 카멜케이스로 작성하는 것이 더 좋음
  0: '1',
  ['hello-bye1']: '✋', // [] 대괄호 안에 저장된 문자열은 key
};

// 속성, 데이터에 접근하기 위해서는
console.log(apple.name); // 마침표 표기법 dot notation
console.log(apple['name']); // 대괄호 표기법 bracket notation
console.log(apple['hello-bye']); // 특수문자를 사용한 경우는 대괄호 표기법만 가능

// 속성 추가
apple.emoji = '🍎';
console.log(apple.emoji);
console.log(apple['emoji']); // 항상 문자열로

// 속성 삭제
delete apple.emoji;
console.log(apple.emoji);
