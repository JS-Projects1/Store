let email = document.getElementById("email");
let password = document.getElementById("password");
let btn = document.getElementById("login");
let localEmail = localStorage.getItem('email')
let localPassword = localStorage.getItem('password')

console.log(localEmail);
console.log(localPassword);

btn.addEventListener('click', send)
function send(event){
    event.preventDefault();

    if(email.value !== "" && password.value !== ""){
      if (email.value == localEmail && password.value == localPassword) {
          setTimeout(function () {
              location = 'index.html'
            }, 1000);
        }
        else{
          alert("Please enter true values.");
        }
    }else{
      alert("Please check the field values");
    }
}
