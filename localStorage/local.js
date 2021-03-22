// const select = document.querySelector("select");

// function selectHandler(event){
//   event.preventDefault();
//   const value = select.options[select.selectedIndex].value; // KR,JP,USA
//   saveData(value); 

// }
// function saveData(text){
//   const currentCountry =  localStorage.setItem('country', text );
//   loadCountry(currentCountry);
// }
// function loadCountry(text){
  
// }

// // select.options[3].selected = "selected";
// function selectedCountry(){
//   select.addEventListener('change', selectHandler);
// }

// function init(){
//   selectedCountry();
// }

// init();

// ====================================================
const countryList = document.querySelector('select');

function changeHandler(event){
  const selectedCountry = event.target.value;
    localStorage.setItem("Country", selectedCountry); // undefiend
}


function selectSave(){

// 로컬스토리지에 저장되어있는 값을 변수로 선언
  const savedValue = localStorage.getItem("Country");
  
  // vlaue값에 뭐가 있든 없든
  // countryList value에 가져온 Country의 value값을 가져와라
  // ->> 문제점) 뭐가 없는 상황에서 빈칸을 가지고 올 수 있음.
  if( savedValue !== null){
    countryList.value = savedValue;  
  }
}

function init(){
  countryList.addEventListener('change', changeHandler);
  selectSave();
}

init();

// select에 set시키는 코드

// 로컬스토리지에 저장된 값을 불러오고 select에 set해주는 함수가 없네요

    // console.log(select.options[i]);// 전체 해당 줄 다나옴
    // console.log(select.options[i].selected);// KR 선택시 true, 나머지 false
    // console.log(select.options[i].value); // KR  




