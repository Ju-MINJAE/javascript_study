// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name}:🍎`);
//   },
// };

// const orange = {
//   name: 'orange',
//   display: function () {
//     console.log(`${this.name}:🍊`);
//   },
// };

// 생성자 함수
function Friut(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  return this; // 생략 가능
}

const apple = new Friut('apple', '🍎');
const orange = new Friut('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(orange.emoji);
console.log(orange.display);
