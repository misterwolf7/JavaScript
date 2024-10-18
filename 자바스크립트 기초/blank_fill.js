// 콜백 함수 정의
function greet(name,mon){
    console.log(`안녕하세요 ${name}님!, ${mon}개월 만이네여.`);
}

// 다름 함수에서 콜백 함수 사용
function processUserInput(callback){
    const name = '홍길동'; // 사용자 입력 예시 const = 값고정.
    const mon = '30';
    callback(name,mon); // 콜백함수 호출
}

// processUserInput 함수에 geed를 공백으로 전달
processUserInput(greet);
