/* 변수 이름 지을떄 _,영어,$ 로 시작 */

let width;
let height;

width=2;
height=7;
let area= width * height;
console.log(area)

//상수 선언하기

/* const width1=200;  */
/* const : 변하면 안되는 값이 필요할떄 태그 */

const Pi=3.14; //원주율을 상수로 선언//
let radius=prompt("반지름값을 입력해주세요"); 
//반지름값 입력 받기//
let area1=Pi * radius * radius
//변수를 사용해 원의 넓이 계산//
console.log(area1)
//원의 넓이를 알림창에 출력//


//****탬플릿 리터럴
let names='kim';
let classRoom= 204;
/* console.log(names+"지현은 오늘"+classRoom+"오세요") */
console.log(`${names}지현은 오늘 ${classRoom}오세요0`)

//배열
let spring="봄"
let summer="여름"
let fall="가을"
let winter="겨울"

/* let season=["봄","여름","가을","겨울"]  */ //배열은 대괄호//
/* console.log(season[3]) */ //순서는 0,1,2,3//

/* let input=prompt("숫자를 입력해주세요");
console.log(input)
console.log(typeof input)
console.log(input*3)
console.log(Number(input)) */

//논리형이 거짓이면 0 참이면 1//



//산술연산자
let a=5;
let b=3;
let bb=++a;
console.log(bb)

//할당연산자
let x=1;
let y=7;
//y=x+3
y += x //y=y+x
console.log(y)

