//할당연산자
let x=3;
let y=6;

x+=y; //x=x+y  9=3+6   
console.log(x)
x-=y; //x=9-6 
console.log(x)
x*=y
console.log(x) //18
x/=y   //x=x/y
console.log(x)

//const는 선언과 동시에 값을 할당 해야함

//비교연산자
console.log(10<6); //false
console.log(10<=6); //false
console.log(10>6); //true
console.log(10>=6); //true

console.log(3==='3'); //false '3'이 문자열이라 거짓으로 나옴
console.log(3=='3'); //true   ==는 숫자만 보기때문에 참으로 나옴
console.log(3!=='3'); //true  !는 부정을 나타냄 (3과 문자열'3'은 같지 않다)<진실(청개구리연산자)
console.log(3!='3'); //false  !는 부정을 나타냄 3과 '3'이 숫자만봤을때 같으나 !가 붙어 같지 않다라고 말해서 거짓으로 나옴

//논리 연산자 (or ||), (and &&), (not !)
const value1=false
const value2=4<2;

function check(){
    for(let i=0; i<10; i++){
        console.log('오예')
    }
    return true;
}

console.log(`or:${ value1 || value2 || check()}`)
console.log(!value1)

//조건문
const name='hhh'
if(name=='hyun'){
    console.log('반갑다')
}else if(name=='jeeyoung'){
    console.log('오랜만이야')
}else{
    console.log('다음에 또 만나')
}

//삼항 조건 연산자
console.log(name==='hh'? 'yes':'no')

//switch
const browser='IE'

switch(browser){
    case 'IE':
        console.log('go away!')
        break;
    case 'Creom':
        console.log('hello')
        break;
    case 'Firefox':
        console.log('ㅋㅋㅋㅋ')
        break
    default:
        console.log('입력좀 하지')
        break
}

let userNumber=prompt('숫자를 입력해주세요'); //<---문자열임 '' 안에 있으니)
console.log(userNumber)

if(userNumber !== null){
    if(parseInt(userNumber) % 3 === 0){ 
        //parseInt(userNumber) 문자열을 정수로 바꿔줌
        alert("3의 배수입니다")
    }else{
        alert("3의 배수가 아닙니다")
    }
}else{
    alert("입력이 취소되었습니다.")
}

//반복문
let sum=0;

for(let i=1; i<100; i++){
    sum += i;
}
console.log(`1부터 100까지 더하면 ${sum}`)


//do~while 실행후 조건문 
let k=3
/* do{
    console.log(`while:${k}`)
    k--;
}while(k<0); */
//while 조건이 맞지 않으면 실행하지 않음
while(k>0){
    console.log(`wile:${k}`);
    k--;
}