const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('h1');
const end = new Date('dec 24, 2021'); // 디데이

function getTime() {
  const today = new Date(); // 오늘 날짜
  const distance = end - today;

  // const days = gap / (1000*60*60*24);
  
  // const restdays = days - Math.floor(days); //0.42일 

  // const hours = restdays*24; //0.42일 *24시간 = 남은 시간

  // const resthours = hours- Math.floor(hours); // 0.24시간 남음

  // const minutes = resthours*60; //  

  // const seconds = minutes -Math.floor(minutes);
  
  // clockTitle.innerHTML = `${Math.floor(days)}일 ${Math.floor(hours)}시간 ${Math.floor(minutes)}분 ${Math.floor(seconds)}초 남음`;
  
  var d = Math.floor(distance / (1000 * 60 * 60 * 24));
  var h = Math.floor( ( distance % (1000 * 60 * 60 * 24) ) / (1000 * 60 * 60) );
  var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((distance % (1000 * 60)) / 1000);
  clockTitle.innerHTML = 
  `
  ${distance}ms =  ${d}일 ${h}시간 
  ${m < 10 ? `0${m}` : m}분
  ${s < 10 ? `0${s}` : s}초 남음
  `;
}

setInterval( function init() {
  getTime();
}, 1000)

init();




function foo() {
  console.log("foo");
}

function init() {
  setInterval( () => {
    getTime();
  }, 1000);
}
init();