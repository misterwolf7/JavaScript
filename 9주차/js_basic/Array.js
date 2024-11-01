let array = [{name : '고구마' , price : 1000}, {name : '감자' , price : 500},{name : '바나나' , price : 1500}];

// array pop : 배열의 마지막 요소를 제거
let popped = array.pop();
console.log(popped); // { name: '바나나', price: 1500 } 맨 뒤의 값 출력후 저장
console.log(array); // [ { name: '고구마', price: 1000 }, { name: '감자', price: 500 } ]

// array push : 배열의 마지막 부분에 요소 추가
array.push(popped);
console.log(array);
// [{ name: '고구마', price: 1000 },{ name: '감자', price: 500 },{ name: '바나나', price: 1500 }]
