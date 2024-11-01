let array = [52, 273, 32, 64,72];

console.log('--- for Each() 메소드 ---');
array.forEach((item, index) =>{
    console.log(`- ${index}번째 요소는 ${item}입니다.`);
}
)


console.log('--- map() 메소드 ---');
let outputA = array.map((item, index) => {
    // 배열의 모든 요소를 제곱해서 새로운 배열을 만듬
    return item * item;
});
console.log (outputA);


console.log('--- filter() 메소드 ---');
let outputB = array.filter((item, index) => {
    // 짝수만 추출
    return item % 2 == 0;
})
console.log(outputB);