// Promise.resolve() - 주어진 값으로 이행하는 Promise 객체를 반환
function fetchEgg(chicken) {
  return Promise.resolve(`${chicken}=>🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg}=>🍳`);
}

// Promise.reject(reason) - 주어진 사유로 거부하는 Promise 객체를 반환
function getChichen() {
  //return Promise.reject(new Error('치킨을 가지고 올 수 없음!'));
  return Promise.resolve(`🪴=>🐓`);
}

getChichen()
  .catch(() => '🐓')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);
