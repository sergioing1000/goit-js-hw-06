const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUl = document.querySelector("#ingredients");

ingredients.forEach(element => {
  const ingr0 = document.createElement("li");
  ingr0.textContent = element;
  ingr0.classList.add("item");
  ingredientsUl.append(ingr0);
});