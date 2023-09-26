const textObj = new String('Hello World!');
const text = 'Hello World!';
console.log(textObj);
console.log(text);

console.log(text.length);
console.log(text[0]);
console.log(text[1]);
console.log(text.charAt(0));

console.log(text.indexOf('l'));
console.log(text.lastIndexOf('l'));

console.log(text.includes('h')); // 대소문자 구별
console.log(text.includes('H'));

console.log(text.startsWith('He'));
console.log(text.endsWith('w'));

console.log(text.toUpperCase(text)); // 대문자로 변경
console.log(text.toLowerCase(text)); // 소문자로 변경

console.log(text.substring(0, 2)); // 0부터 2전까지 인덱스
console.log(text.slice(2));
console.log(text.slice(-2));

const space = '       space   ';
console.log(space.trim()); // 공백 제거

const longText = 'Get to the point';
console.log(longText.split(' ')); // 공백으로 구분
console.log(longText.split(' ', 2)); // 공백으로 구분, 2개만
