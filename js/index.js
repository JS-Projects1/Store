let nav1 = document.getElementById("nav-1");
let nav2 = document.getElementById("nav-2");
let userName = document.getElementById("userName");
let logout = document.getElementById("logout");
let container = document.querySelector(".products .row");
let menu = document.querySelector("nav .dropdown-menu");
let number = document.querySelector(".dropdown .number");
let products = JSON.parse(localStorage.getItem("products")) || [];
let counter = parseInt(localStorage.getItem("counter")) || 0;

window.addEventListener("scroll", function () {
  const hero = document.querySelector(".hero");
  const navbar = document.querySelector(".navbar");
  const namberNav = document.querySelector(".dropdown span");

  if (window.scrollY >= hero.offsetHeight - 200) {
    console.log(hero.offsetHeight);
    navbar.style.backgroundColor = "rgb(173 130 72 / 88%)";
    namberNav.style.backgroundColor = "rgb(66, 53, 34)";
    navbar.style.transition = "0.3s";
  } else {
    navbar.style.backgroundColor = "transparent";
    namberNav.style.backgroundColor = "rgb(196, 155, 99) ";
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

let data = [
  {
    id: 1,
    image: "images/menu-1.jpg",
    title: "Coffee 1",
    text: "A small river named Duden flows by their place and supplies.",
    price: "11",
  },

  {
    id: 2,
    image: "images/menu-2.jpg",
    title: "Coffee 2",
    text: "A small river named Duden flows by their place and supplies.",
    price: "12",
  },

  {
    id: 3,
    image: "images/menu-3.jpg",
    title: "Coffee 3",
    text: "A small river named Duden flows by their place and supplies.",
    price: "13",
  },
];

let drawProducts = data.map((item) => {
  return `
    <div class="col-7 col-md-5 col-lg-3  mb-5">
          <div class="product">
            <div class="img-product">
              <img src="${item.image}" alt="photo">
            </div>
            <div class="info-product">
              <h3 class="my-3 text-light">${item.title}</h3>
              <p class="mb-0">${item.text}</p>
              <small class="d-block my-3">$${item.price}</small>
              <button onclick="AddToCart(${item.id})">Add To Cart</button>
            </div>
          </div>
        </div>
    `;
});

container.innerHTML = drawProducts;
number.textContent = counter;
products.forEach((item) => {
  menu.innerHTML += `<a class="dropdown-item" href="#">${item.title}</a>`;
});

function AddToCart(id) {
  if (localStorage.getItem("email")) {
    let addProducts = data.find((e) => {
      return e.id == id;
    });
    counter++;
    menu.innerHTML += `<a class="dropdown-item" href="#">${addProducts.title}</a> `;
    number.textContent = counter;
    // products.push(addProducts)
    products = [...products, addProducts];
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("counter", counter);
    console.log(products);
  } else {
    if (! localStorage.getItem("email")) {
      location = "register.html";
    }
  }
}
