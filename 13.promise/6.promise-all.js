function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('No orange'));
}

// 바나나와 사과를 같이 가지고 오기
getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => [banana, apple])
  )
  // 바나나 1초, 사과 3초 - 총 4초 후 반환
  .then(console.log);

// Promise.all - 병렬적으로 한번에 모든 Promise들을 실행 !
Promise.all([getBanana(), getApple()]) // 실행하고 싶은 Promise를 배열로 전달
  .then((fruits) => console.log('Promise.all', fruits));

// Promise.race - 주어진 Promise중에 제일 빨리 수행된것이 이김 !
Promise.race([getBanana(), getApple()]) // 바나나가 사과보다 빠르기 때문에 바나나만 출력
  .then((fruits) => console.log('Promise.race', fruits));

Promise.all([getBanana(), getApple(), getOrange()]) // 오렌지때문에 출력 X
  .then((fruits) => console.log('Promise.all-error', fruits))
  .catch(console.log);

// Promise.allSettled - fulfilled 상태라면 value를, rejected 상태라면 reason 속성을 확인 가능
Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('Promise.all-settled', fruits))
  .catch(console.log);
