let array = [{name : '고구마' , price : 1000}, {name : '감자' , price : 500},{name : '바나나' , price : 1500}];

// array pop : 배열의 마지막 요소를 제거
let popped = array.pop();
console.log(popped); // { name: '바나나', price: 1500 } 맨 뒤의 값 출력후 저장
console.log(array); // [ { name: '고구마', price: 1000 }, { name: '감자', price: 500 } ]

// array push : 배열의 마지막 부분에 요소 추가
array.push(popped);
console.log(array);
// [{ name: '고구마', price: 1000 },{ name: '감자', price: 500 },{ name: '바나나', price: 1500 }]

let arrayA = ['고구마', '감자', '바나나'];
// sort : 정렬
arrayA.sort();
console.log(arrayA); //[ '감자', '고구마', '바나나' ]
// reverse : 반대로 정렬 : 
console.log(arrayA.reverse()); //[ '바나나', '고구마', '감자' ]


let arrayB = [{name : '고구마' , price : 1000}, {name : '감자' , price : 500},{name : '바나나' , price : 400}];


console.log('-price 기준으로 오름차순으로 정렬');
arrayB.sort((itemA,itemB) =>{
    return itemA.price - itemB.price;
});
console.log(arrayB);
// [{ name: '바나나', price: 400 },{ name: '감자', price: 500 },{ name: '고구마', price: 1000 }]


console.log('name을 기준으로 오름차순으로 정렬');
arrayB.sort((itemA,itemB) =>{
    if (itemA.name < itemB.name){
        return -1;
    }
    else if (itemA.name> itemB.name){
        return 1;
    }
    else{
        return 0;
    }
});
console.log(arrayB);
// [{ name: '감자', price: 500 },{ name: '고구마', price: 1000 },{ name: '바나나', price: 400 }]

// name을 기준으로 내림차순으로 정렬
console.log('name을 기준으로 내림차순으로 정렬');
arrayB.sort((itemA,itemB) =>{
    if (itemA.name < itemB.name){
        return 1;
    }
    else if (itemA.name> itemB.name){
        return -1;
    }
    else{
        return 0;
    }
});
console.log(arrayB);
// [{ name: '바나나', price: 400 },{ name: '고구마', price: 1000 },{ name: '감자', price: 500 }]

// price를 기준으로 오름차순으로 정렬
console.log('price를 기준으로 오름차순으로 정렬')
arrayB.sort((itemA,itemB) =>{
    if (itemA.price < itemB.price){
        return -1;
    }
    else if (itemA.price> itemB.price){
        return 1;
    }
    else{
        return 0;
    }
});
console.log(arrayB);
// [{ name: '바나나', price: 400 },{ name: '감자', price: 500 },{ name: '고구마', price: 1000 }]