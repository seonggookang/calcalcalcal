const wow = document.querySelector("h2");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];


const superEventHandler = { // superEventHandler는 함수가 아니다 객체다.
  // key : value,
  // key : value,
  // key : value,
  // key : value
  in:function mouseInHandler() {
    // textContent : 태그까지도 문자로 인식
    // innerHTML : 태그는 태그로 인식
    wow.textContent = "The mouse in here!";
    wow.style.color = colors[0];
  },
  leave: function mouseleaveHandler() {
    wow.textContent = "The mouse in gone!";
    wow.style.color = colors[1];
  },
  resize: function resizeHandler() {
    wow.textContent = "You just resized!";
    wow.style.color = colors[2];
  },
  content: function contextmenuHandler() {
    wow.textContent = "That was a right click!";
    wow.style.color = colors[3];
  }
};

wow.addEventListener("mouseenter", superEventHandler.in);
wow.addEventListener("mouseleave", superEventHandler.leave);
// 틀림: wow.addEventListener("resize", resize); 
// resize 의 대상은 wow 가 아니다
window.addEventListener("resize", superEventHandler.resize);
wow.addEventListener("contextmenu", superEventHandler.content);