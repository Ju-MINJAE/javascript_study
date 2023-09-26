// 클래스를 베이스로한 객체지향 프로그래밍

class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  printName() {
    console.log(`${this.name} ${this.emoji}`);
  }
}

class Tiger extends Animal {
  hunt() {
    console.log('사냥 시작 !');
  }
}
class Dog extends Animal {
  play() {
    console.log('놀자 !');
  }
}
const dog1 = new Dog('멍멍', '🐶', '민재');
const tiger1 = new Tiger('어흥', '🐯');
dog1.printName();
tiger1.printName();
dog1.play();
tiger1.hunt();

console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Tiger);
console.log(tiger1 instanceof Dog);
console.log(tiger1 instanceof Tiger);
