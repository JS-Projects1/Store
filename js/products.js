let nav1 = document.getElementById("nav-1");
let nav2 = document.getElementById("nav-2");
let userName = document.getElementById("userName");
let logout = document.getElementById("logout");
let container = document.querySelector(".products .row");
let products = JSON.parse(localStorage.getItem("products"));
let counter = parseInt(localStorage.getItem("counter")) || 0;
let totalPrice = document.querySelector(".totalPrice span");
let totalPriceNumber = 0

window.addEventListener("scroll", function () {
  const hero = document.querySelector(".hero");
  const navbar = document.querySelector(".navbar");
  const namberNav = document.querySelector(".dropdown span");

  if (window.scrollY >= hero.offsetHeight - 200) {
    console.log(hero.offsetHeight);

    navbar.style.backgroundColor = "rgb(173 130 72 / 88%)";
    namberNav.style.backgroundColor = "#423522";
    navbar.style.transition = "0.3s";
  } else {
    navbar.style.backgroundColor = "transparent";
    namberNav.style.backgroundColor = "#c49b63 ";
  }
});

if (localStorage.getItem("email")) {
  nav1.style.display = "flex";
  nav2.style.display = "none";
  userName.textContent =
    localStorage.getItem("firstName") + " " + localStorage.getItem("lastName");
}

logout.addEventListener("click", out);

function out() {
  localStorage.clear();
  setTimeout(() => {
    location = "register.html";
  }, 1000);
}

function Draw() {
  container.innerHTML = " ";
  totalPriceNumber = 0;
  totalPrice.textContent = totalPriceNumber
  products.forEach((item) => {
    container.innerHTML += `
        <div class="col-7 col-md-5 col-lg-3 mx-2 mb-5">
          <div class="product">
            <div class="img-product">
              <img src="${item.image}" alt="photo">
            </div>
            <div class="info-product">
              <h3 class="my-3 text-light">${item.title}</h3>
              <p class="mb-0">${item.text}</p>
              <small class="d-block my-3">$${item.price}</small>
              <button onclick="Delete(${item.id})" class="mx-2">Delete</button>
            </div>
          </div>
        </div>
    `;
    totalPriceNumber += +(item.price)
    totalPrice.textContent = '$' +totalPriceNumber
  });
}
Draw();

function Delete(id) {
  console.log(counter);
  const index = products
    .map((ele) => {
      return ele.id;
    })
    .indexOf(id);
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  counter--;
  
  localStorage.setItem('counter',counter)
  Draw();
}
