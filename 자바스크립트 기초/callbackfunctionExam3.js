// 배열의 각 요소에 대해 콜백 함구 사용
function double(number){
    return number *2;
}

//배열의 자리하는 함수
function processArray(arr, cb){
    const result = [];
    for (let i = 0; i<arr.length; i++){
        result.push(cb(arr[i])); // 콜백함수 호출
    }
    return result;
}

//배열
const numbers = [1,2,3,4,5];
const_doublednumbers = processArray(numbers, double);
console.log(const_doublednumbers)