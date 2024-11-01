// JASON : javascript_object_notation

const javascriptObject = [{name : '윤인성', region : '서울'}, {name: '윤명월', region:'도쿄'}];

// JSON.stringify() : 메소드로 자바스크립트 객체를 JSON 문자열로 변경합니다.
const outputA = JSON.stringify(javascriptObject);
const outputB = JSON.stringify(javascriptObject, null, 2); // 변환함수는 일반적으로 사용하지 않음 -> null로 처리
console.log(typeof(outputA)); // string
console.log(outputA);
console.log(outputB);
console.log('-------------');
// [{"name":"윤인성","region":"서울"},{"name":"윤명월","region":"도쿄"}]
// [
//   {
//     "name": "윤인성",
//     "region": "서울"
//   },
//   {
//     "name": "윤명월",
//     "region": "도쿄"
//   }
// ]
// -------------

// JSON.parse() : 메소드로 JSON 문자열을 자바 스크립트로 변경합니다.
const outputC = JSON.parse(outputB) // JSON 문자열을 자바스크립트 객체로 변환하는 메소드
console.log(typeof(outputC)); // object
console.log(outputC); // [ { name: '윤인성', region: '서울' }, { name: '윤명월', region: '도쿄' } ]

