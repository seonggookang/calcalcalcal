// const body = document.body;
// const widthSize = window.innerWidth;
// 이 변수를 밖에 함수 밖에 설정하니 작동 x
const colorChange = document.querySelector('body');

function handleWindowSize(){
  const widthSize = window.innerWidth;
 // 함수 안에 변수를 선언함으로써 resize할 때마다 값이 반영되어 색변경 된다.
  if(widthSize < 600) {
      colorChange.style.backgroundColor = "red";
  } else if (widthSize <= 750) {
      colorChange.style.backgroundColor = "green";
  } else {
      colorChange.style.backgroundColor = "blue";
  }
}
window.addEventListener("resize", handleWindowSize);
