const x = 0;
const y = 0;
const coordinate = { x, y }; // { x: x, y: y }; 키 이름과 참조하는 변수의 이름이 동일한 경우 생략이 가능 !
console.log(coordinate);

function makeObj(name, age) {
  return {
    name,
    age,
  };
}
let me = makeObj('Minjae', 26);
console.log(me);
