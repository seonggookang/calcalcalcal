const select = document.querySelector('select');

function handleChange(event){
  const selectedValue = event.target.value;
  localStorage.setItem("country",selectedValue);
}

function paintValue(){
  const selectedValue = localStorage.getItem('country');
  if(selectedValue !== null){
    const countryDefault = select.querySelector(`[ value = ${selectedValue} ]`);
    //백틱```````````````````````````````````````````````
    countryDefault.selected = true;
    // select.value = selectedValue; // selected 이용하는 방법
  }
}

function init(){
  select.addEventListener('change', handleChange);
  paintValue();
}

init();
