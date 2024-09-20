const apple = {
  name: 'apple',
  display: function () {
    console.log(`${this.name}:🍎`); // 자신의 객체에 접근할 때는 this를 사용!
  },
};

apple.display();
