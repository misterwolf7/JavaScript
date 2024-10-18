let array = [{ name:'고구마', price:1000}, { name:'감자', price:500},{ name:'바나나', price:1500}];

console.log(array)

// popped : 맨뒤의 요소  제거
let popped = array.pop();
console.log(popped);
console.log(array);

// push : 맨뒤에 요소 추가.
array.push(popped);
array.push({name:'사과', price:2000});
console.log(array);