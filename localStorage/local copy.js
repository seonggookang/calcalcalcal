const select = document.querySelector("select");

function saveCountry(event) {
  const countryName = event.target.value;
  localStorage.setItem("country", countryName);
}

function selectedElement() {

// 선택한 country 의 value값을 contryName2에 할당
  const countryName2 = localStorage.getItem("country");
  
  // 1. 만약 value값으로 뭔가 있다면
  if (countryName2 !== null) { 
    // 해당 value값을 가지고 있는 태그를 selectElementDefault에 할당
    const selectDefault = select.querySelector(`[value = ${countryName2}]`);
    // 계속 선택되어지게 seleced = truee
    selectDefault.selected = true;
  }

  // 2. 만약 value값으로 아무것도 없다면 아무것도 하지말라 원래상태 그대로

}

function init() {
  select.addEventListener("change", saveCountry);
  selectedElement();
}

init();