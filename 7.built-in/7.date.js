// UTC기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date());
console.log(new Date('Jun 12,1998'));
console.log(new Date('2023-04-11T23:30:22'));

console.log(Date.now());
console.log(Date.parse('2023-04-11T23:30:22'));

const now = new Date();
now.setFullYear(2023);
now.setMonth(3); // 0이 1월
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getDay()); // 0 일요일부터 ..
console.log(now);

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString()); // ISO 8601 형식
console.log(now.toLocaleString('en-US'));
console.log(now.toLocaleString('ko-KR'));
