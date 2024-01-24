// promise는 비동기 작업의 최종 완료 또는 실패를 나타내는 객체
// 기본적으로 promise는 함수에 콜백을 전달하는 대신, 콜백을 첨부하는 방식의 객체

// 1. 콜백은 JavaScript Event Loop가 현재 실행중인 콜 스택을 완료하기 이전에는 절대 호출되지 않음
// 2. 비동기 작업이 성공하거나 실패한 뒤에 then()을 이용하여 추가한 콜백의 경우에도 1과 동일
// 3. then()을 여러번 사용하여 여러개의 콜백을 추가 할 수 있음

// Chaining - 두 개 이상의 비동기 작업을 순차적으로 실행해야 하는 상황에 사용
// const promise = doSomething();
// const promise2 = doSomething().then(successCallback, failureCallback);
// promise2에 추가된 콜백은 successCallback 또는 failureCallbak에 의해 반환된 promise 뒤에 대기

function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작음'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(2)
  .then(() => console.log('타이머 완료!'))
  .catch(console.error)
  .finally(() => console.log('finish!'));

// pending(대기) : 이행하지도, 거부하지도 않은 초기 상태
// fulfilled(이행) : 연산이 성공적으로 완료
// rejected(거부) : 연산이 실패
