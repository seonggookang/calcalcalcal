

 // parameter로 event를 써주는것은 어떤의미인지? -->> 핸들러 함수에만 존재. 많은 메소드들 갖고있음
// event.preventDefault(); ->> 새로 고침되는것을 막는다
// event가 발생하면 root에서 시작된다(여기선 form에서 시작)
// ============================================================ 
// <input class="form">
// <input type="text" placeholder="what is your name?"> 
// </input>
// ============================================================ 
// event는 거품의 일종 같은거. 위로 올라가면서 모든것들이 이 event에 반응함
// form을 제출하는 event가 발생하면 event가 계속 위로 올라감 document까지
// 그 document는 다른곳으로 간다.(프로그래밍되어진곳으로: 페이지가 새로고침되는현상))

const form = document.querySelector(".form"),
     input = form.querySelector('input'),
     greeting = document.querySelector('.greeting');
      

function handleSubmit(event){
  event.preventDefault(); //이수행을 하고 나면 submit을 해도 페이지 새로고침 X
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function saveName(text){
  localStorage.setItem("current", text);
}

function putYourName() {  
  form.classList.add("showing");
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
  form.classList.remove("showing");// 색을 칠하기 위해 없애는 코드
  greeting.classList.add("showing"); // 주의!! 따옴표 안씀
  greeting.innerText = `Hello ${text}`;
} 

function loadName(){ // Name을 불러오기만 하는 코드 ( 저장은 따로 해줘야 됨 )
  const currentUser = localStorage.getItem("current");
  if(currentUser === null) {
    putYourName();
  }else{ 
    paintGreeting(currentUser);
  } 
}

function init(){
  loadName();
}
init(); 