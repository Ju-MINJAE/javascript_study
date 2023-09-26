// 예제 1
function sum(num1, num2) {
  console.log('function!');
  return num1 + num2;
}
const result = sum(1, 2);
console.log(result);

// 예제 2
function fullName(firstName, lastName) {
  return `${lastName} ${firstName} 👋`;
}

let lastName = '문';
let firstName = '재인';
console.log(fullName(firstName, lastName));

let lastName2 = '윤';
let firstName2 = '석열';
console.log(fullName(firstName2, lastName2));
