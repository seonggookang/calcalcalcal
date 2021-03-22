const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('h1');
const xmasDay = new Date('dec 24, 2021'); // 디데이

function getTime() {
  const today = new Date(); // 오늘 날짜
  const gap = xmasDay - today; // (24732831853ms)

  const days =  gap / (1000*60*60*24); //286.2557(일)

  const restdays = days - Math.floor(days); //0.2557(일) 

  const hours = restdays*24; // 6.136(시간)

  const resthours = hours- Math.floor(hours); // 0.136(시간)

  const minutes = resthours*60; //  8.358(분)

  const restminutes = minutes - Math.floor(minutes); //0.358(분)

  const seconds = restminutes*60;
  
  
  clockTitle.innerHTML = `
  ${Math.floor(days)}일 
  ${Math.floor(hours)}시간 
  ${Math.floor(minutes)}분
  ${Math.floor(seconds) < 10 ? `0${Math.floor(seconds)}` : Math.floor(seconds)}초 남음
  `;
}

function init() {
  getTime();// 최초 실행을 위해서
  setInterval(() => {
    getTime();
  }, 1000); // 1초 후마다 반복 실행
}
init();
