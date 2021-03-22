// const title = document.getElementById('title');
const title = document.querySelector('#title');
// title.innerHTML = 'You clicked here!';
// title.style.color='red';
// document.title = "changed"

// console.log(title);
//click, resize, submit, input change load
// before closing printing
// everthing is event

const CLICKED_CLASS = "clicked";

// function handleResize(event){
//   console.log(event); 
//   // console.log("i have been risized");
// }
function handleClick(){
  const currentClass = title.className;
  if(currentClass !== CLICKED_CLASS){
    title.className = CLICKED_CLASS;
  }else{
    title.className = ""; // 비워라 라는 명령
  }
}
function init(){
  title.addEventListener('click',handleClick);
}
init();
// listener 함수실행시점 : 이벤트 발생했을 때
// listener() 함수실행시점 : 지금 당창 호출하라는뜻

// 이벤트를 다룰 하수를 만들 때마다 js는 자동적으로 함수를 객체에 붙인다.

// form을 만들때 링크만들때 
//  액셔쓰