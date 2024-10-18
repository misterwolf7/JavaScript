// 콜백함수 정의 : 함수의 변수에 함수를 넣는 것. 
/*
function prt(){
    console.log('함수호출')
}
function callTenTimes(c){
    for (let i =0; i<10; i++){
        c();
    }
}

callTenTimes(prt);*/
function prt(){
    console.log('함수호출')
}
//ck : 콜백함수 : 함수자체를 넣에서 호출.
function callTenTimes(ck){
    for (let i =0; i<10; i++){
        ck();
    }
}
callTenTimes(prt)