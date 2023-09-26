// const cat1 = { name: '달콤', emoji: '🐱' };
// const cat2 = { name: '보리', emoji: '🐈' };

function Cat(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  // 인스턴스 레벨의 함수
  /*
  this.printName = () => {
    console.log(`${this.name} ${this.emoji}`);
  };
  */
}

// 프로토타입 레벨의 함수
Cat.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

const cat1 = new Cat('달콤', '🐱');
const cat2 = new Cat('보리', '🐈');
console.log(cat1, cat2);
cat1.printName();
cat2.printName();

// 오버라이딩
// 인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의 하면 (오버라이딩 하면)
// 프로토타입 레벨의(부모) 함수의 프로퍼티는 가려진다 (섀도잉)
cat1.printName = function () {
  console.log('안녕');
};
cat1.printName();

// 정적 레벨
Cat.hello = () => {
  console.log('Hello');
};
Cat.hello();
Cat.MAX_AGE = 20;
