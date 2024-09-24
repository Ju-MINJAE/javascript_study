function loop() {
  const array = [];
  //var과 let의 차이점!
  // let 사용 >> 0,1,2,3,4
  // var 사용 >> 5,5,5,5,5
  // var는 블록스코프가 존재하지 않음. 함수스코프만 존재.
  for (let i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

const array = loop();
array.forEach((func) => func());
