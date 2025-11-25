//호이스팅-함수를 끌어올려서 실행하는 이유


function printHello(){
    console.log('Hello')
}
printHello();

function log(message){
    console.log(message)
}
log('집')
log('에')
log('가')
log('고')
log('싶')
log('어')

function changeName(obj){
    obj.name='coder';
}
const hyun={name:'hyun'}
changeName(hyun);
console.log(hyun);

function addNumber(a,b){ //선언문
    let sum=a+b;
    alert(sum);
}
addNumber(10,2); //호출문

//즉시 실행함수
(function hello(){
    console.log("오늘 너무 많이 고생이 많아요");
})();

//화살표 함수

/* const add=function(x,y){
    return x+y
} */
 
/* const add=(x,y) =>{   //위에 함수랑 같은 함수
    return x+y
}
 */
const add=(x,y) => x+y  //위에 두개의 함수랑 같은 함수 좀더 간단하게 사용 가능