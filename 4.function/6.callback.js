// 콜백함수 - 다른 함수에 매개변수로 넘겨준 함수
const add = (a, b) => a + b;
const multifly = (a, b) => a * b;

// 전달된 action은 콜백함수이다.
// 전달된 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함숭릐 래퍼런스(참조값)가 전달된다.
// 그래서 함수는 고차함수안에서 필요한 순간에 호출이 나중에 됨
function calculator(a, b, action) {
  if (a < 0 || b < 0) {
    return;
  }
  let result = action(a, b);
  console.log(result);
  return result;
}

calculator(-1, 2, add);
calculator(-1, 2, multifly);

const words = [
  'spary',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];

// function callback(element) {
//   console.log(element);
//   if (element.length > 6) return true;
//   else return false;
// }
// const newWords = words.filter(callback);
// console.log(newWords); // [ 'exuberant', 'destruction', 'present' ]

function myfilter(origin, callback) {
  var result = [];
  for (var i = 0; i < origin.length; i++) {
    var current = origin[i];
    if (callback(current)) {
      result.push(current);
    }
  }
  return result;
}
const newWords = myfilter(words, (element) => element.length > 6);
console.log(newWords); // [ 'exuberant', 'destruction', 'present' ]
