// this 바인딩

// 자바나 C++ 같은 클래스 기반 언어에서 this는 언제나 클래스가 생성하는 인스턴스를 가리킨다.
// 하지만 자바스크립트의 this는 함수가 호출되는 방식에 따라 this에 바인딩될 값, 즉 this 바인딩이 동적으로 결정된다.
// 또한 strict mode(엄격 모드) 역시 this 바인딩에 영향을 준다.

// 자바, C#, C++ 대부분의 객체지향 프로그래밍 언어에서는
// this는 항상 자신의 인스턴스 자체를 가리킴!
// 정적으로 인스턴스가 만들어지는 시점에 this가 결정됨!
// 하지만, 자바스크립트에서는 누가 호출하냐에 따라서 this가 달라짐!
// 즉, this는 호출하는 사람(caller)에 의해 동적으로 할당됨!

function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`고양이의 이름을 출력한다냥: ${this.name}`);
  };
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지의 이름을 출력한다멍: ${this.name}`);
  };
}

const cat = new Cat('달콤');
const dog = new Dog('멍멍');
cat.printName();
dog.printName();

dog.printName = cat.printName;
dog.printName();
cat.printName();

function printOnMonitor(printName) {
  console.log('모니터를 준비하고, 전달된 콜백을 실행!');
  printName();
}

printOnMonitor(cat.printName);
