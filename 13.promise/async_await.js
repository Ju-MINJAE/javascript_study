function timer(time) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}

// console.log('Timer start');
// timer(1000)
//   .then(function (time) {
//     console.log('Time : ' + time);
//     return timer(time + 1000);
//   })
//   .then(function (time) {
//     console.log('Time : ' + time);
//     return timer(time + 1000);
//   })
//   .then(function (time) {
//     console.log('Time : ' + time);
//     console.log('Timer end');
//   });

async function run() {
  console.log('Timer start');
  var time = await timer(1000);
  console.log('time:' + time);
  time = await timer(time + 1000);
  console.log('time:' + time);
  time = await timer(time + 1000);
  console.log('time:' + time);
  console.log('Timer end');
}

async function run2() {
  console.log('parent start');
  await run();
  console.log('parent end');
}

console.log('parent parent start');
run2().then(function () {
  console.log('parent parent end');
});
