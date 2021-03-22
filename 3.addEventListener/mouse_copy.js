const start = document.querySelector('.today');
const colors = ['red','yellow','green','blue'];


const superEventHandler = {
  top : function mouseTopHandler(){ // superEventHandler 가 객체이고 객체안의 형식을 염두해야겠다. key: value , key : value, 의 형식
    start.innerHTML = "your point is here";
    start.style.color = colors[0];
  },
  leave : function mouseLeaveHandler(){
    start.innerHTML = "your point is gone";
    start.style.color = colors[1];
  },
  right : function rightClickHandler(){
    start.innerHTML = "you clicked right button";
    start.style.color = colors[2];
  },
  resize : function resizeHandler(){
    start.innerHTML = "you resized your page";
    start.style.color = colors[3];
  }
};
// 반복을 줄여주는 것을 끊임없이 생각하라
// 밑에 껏들은 모두 이벤트가 다르니 위임불가인가.
start.addEventListener('mouseenter', superEventHandler.top);
start.addEventListener('mouseleave', superEventHandler.leave);
start.addEventListener('contextmenu', superEventHandler.right);// start말고 window객체로 해주면 페이지 아무데나 우클릭 해도 이벤트 실행.
window.addEventListener('resize', superEventHandler.resize); // .today 부분을 사이즈 조절하는게 아니라 웹페이지를 조절하는 것이니 객체는 window가 됨

// 1분코딩님이 알려준 이벤트리스터 위임<- 이벤트 리스너 하나만 쓰면 됨.
// e.target
// e.currentTarget
// 현재 값이 들어가있는 변수 하나 설정 var currentVar;