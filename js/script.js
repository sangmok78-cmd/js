let heading=document.querySelector("#heading");
    heading.onclick=function(){   /* h1을 클릭하면 글자 색을 레드로 바꿔라 */
    heading.style.color="red"
}

// alert("1+1") 
/* alert 메세지(알림창) 괄호안에 ""안에 쓰면 문자로, "없이 1+1만 쓰면 연산해서 2로 나타남*/

/* let name=confirm("정말 배경이미지를 바꾸겠습니까?") */
/* confirm 메시지와 확인 취소창을 나타내는 알림창 */

let name=prompt("이름을지어주세요", "아무개")
console.log(name)

