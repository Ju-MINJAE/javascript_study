// 옵셔널 체이닝 연산자 Optional Chaining Operator
// ?.

// null 또는 undefined인 경우를 확인할때
let item = { price: 1 };
const price = item?.price;
console.log(price);

let obj = { name: '🐶', owner: { name: 'MinJae' } };
function printName(obj) {
  const ownerName = obj?.owner?.name;
  console.log(ownerName);
}
printName(obj);
