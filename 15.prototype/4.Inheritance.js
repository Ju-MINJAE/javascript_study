// 프로토타입을 베이스로한 객체지향 프로그래밍

function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
  // super(name,emoji)
  Animal.call(this, name, emoji);
  this.owner = owner;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.play = () => {
  console.log('놀자!');
};

function Tiger(name, emoji) {
  Animal.call(this, name, emoji);
}

Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
  console.log('사냥시작!');
};

const dog1 = new Dog('멍멍', '🐶', '민재');
const tiger1 = new Tiger('어흥', '🐯');
dog1.play();
dog1.printName();
tiger1.hunt();
tiger1.printName();

console.log(dog1 instanceof Dog); // 상속확인 True/False
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);
