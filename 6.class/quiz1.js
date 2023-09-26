// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// Counter 클래스 만들기

class Conter {
  #value;
  constructor(firstNum) {
    if (isNaN(firstNum) || firstNum < 0) {
      this.#value = 0;
    } else {
      this.#value = firstNum;
    }
  }

  get value() {
    return this.#value;
  }

  upCount = () => {
    this.#value++;
  };
}

const counter = new Conter(0);
counter.upCount();
counter.upCount();
console.log(counter.value);
