let inputs = Array.from(document.querySelectorAll("input"));
let btn = document.getElementById("register");

btn.addEventListener("click", send);

function send(event) {
  event.preventDefault();
  let inputValues = inputs.map((item) => {
    if (item.value !== "") {
      localStorage.setItem(item.id, item.value);
      return { id: item.id, value: item.value };
    } else {
      return false;
    }
  });

  inputValues.forEach((e) => {
    if (e == false) {
      let index = inputValues.indexOf(e);
      inputValues.splice(index, 1);
    }
  });
  
  if(inputs.length == inputValues.length){
    setTimeout(function () {
      location = 'login.html'
    }, 1000);
  }else{
    alert("Please check the field values")
  }
}
