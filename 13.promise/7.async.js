// async/await - Promise 로직을 더 쉽고 간결하게 사용
// 함수를 선언 할 때 함수의 앞부분에 async, Promise의 앞부분(비동기로 처리되는 부분)에 await

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
  return Promise.reject(new Error('no orange'));
}

// 바나나와 사과를 같이 가지고 오기 (async/await)
// async/await를 사용하여 비동기적인 코드를 동기적으로 절차적으로 사용 가능
// async가 붙은 함수는 반드시 promise를 반환하고, promise가 아닌 것은 promise로 감싸 반환
// await는 Promise 처리가 끝날때까지 기다림
async function fetchFruits() {
  const banana = await getBanana();
  const apple = await getApple();
  return [banana, apple];
}
fetchFruits() //
  .then((fruits) => console.log(fruits));
