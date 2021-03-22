


const colorChange = document.querySelector('body');
const widthSize = window.innerWidth; // 너비 변수를 함수 밖에다가 선언해서 틀림

function resizeHandler(){
  // const widthSize = window.innerWidth; // 안쪽에 해야 정상 작동
  if(widthSize < 250 ){
    colorChange.style.backgroundColor = 'red';
  } else if (widthSize <= 460) {
    colorChange.style.backgroundColor = 'green';
  } else {
    colorChange.style.backgroundColor= 'blue';
  }
  // widthSize를 밖에 선언하고 값이 잘 들어왔나 console.log로 확인
  return console.log(widthSize);
}
colorChange.style.backgroundColor = 'peru';
// colorChange.addEventListener('resize', resizeHandler); <-내가 쓴 문장
window.addEventListener('resize', resizeHandler);
// 윈도우창을 줄이는거지 바디창을 줄이는 이벤트가 아니다

// 감점 요인
// 1.윈도우의 너비값을 넣은 변수widthSize를 함수 안에
//   안넣고 바깥에 둔거.
// 2.객체를 window로 안쓰고 colorChange라고 한거


