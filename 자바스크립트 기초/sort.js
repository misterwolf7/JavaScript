const arr1 = [2, 1, 3];
arr1.sort();
console.log(arr1);

const arr2 = ['banana', 'apple', 'orange'];
// 문자열로 정렬
arr2.sort();
console.log(arr2);

// 역순으로 배열
arr2.sort();
console.log(arr2.reverse());

// 문자열 배열.
arrayB.sort((itemA,itemB) => {
    return itemA.price - itemB.price;
});
console.log(arrayB);
