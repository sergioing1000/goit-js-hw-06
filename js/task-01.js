const category = document.querySelectorAll(".item");
const categoryUL = document.querySelectorAll("#categories");

console.log(`Number of categories: ${category.length}`);
console.log(" ");

for (let element of category) {
  console.log(`Category: ${element.querySelector("h2").textContent }`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
  console.log(" ");
}

