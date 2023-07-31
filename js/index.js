// Write your Pizza Builder JavaScript in this file.


// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = "visible";
    } else {
      oneMushroom.style.visibility = "hidden"
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = "visible"
    } else {
      oneGreenPepper.style.visibility = "hidden"
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.querySelector(".sauce")
  if (state.whiteSauce) {
    sauce.classList.add("sauce-white");
  } else {
      sauce.classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.querySelector(".crust")
  if (state.glutenFreeCrust) {
    crust.classList.add("crust-gluten-free")
  } else {
    crust.classList.remove("crust-gluten-free")
  }


}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let pepperoni = document.querySelector(".btn-pepperoni")
  let mushrooms = document.querySelector(".btn-mushrooms")
  let greenPeppers = document.querySelector(".btn-green-peppers")
  let sauce = document.querySelector(".btn-sauce")
  let crust = document.querySelector(".btn-crust")
  pepperoni.classList.toggle("active", state.pepperoni)
  mushrooms.classList.toggle("active", state.mushrooms)
  greenPeppers.classList.toggle("active", state.greenPeppers)
  sauce.classList.toggle("active", state.whiteSauce)
  crust.classList.toggle("active", state.glutenFreeCrust)
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let pepperoni = document.querySelector(".pepperoni")
  if (state.pepperoni) {
    pepperoni.style.visibility = "visible"
  } else {
    pepperoni.style.visibility = "hidden"
  }
  let mushrooms = document.querySelector(".mushrooms")
  if (state.mushrooms) {
    mushrooms.style.visibility = "visible"
  } else {
    mushrooms.style.visibility = "hidden"
  }
  let greenPeppers = document.querySelector(".li-green-pepper")
  if (state.greenPeppers) {
    greenPeppers.style.visibility = "visible"
  } else {
    greenPeppers.style.visibility = "hidden"
  }
  let whiteSauce = document.querySelector(".white-sauce")
  if (state.whiteSauce) {
    whiteSauce.style.visibility = "visible"
  } else {
    whiteSauce.style.visibility = "hidden"
  }
  let gluteFree = document.querySelector(".gluten-free")
  if (state.glutenFreeCrust) {
    gluteFree.style.visibility = "visible"
  } else {
    gluteFree.style.visibility = "hidden"
  }
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").addEventListener("click", function () {
  state.mushrooms = !state.mushrooms
  renderEverything()
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").addEventListener("click", function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click", function () {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener("click", () => {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
})
