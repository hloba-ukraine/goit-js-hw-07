const categories = document.querySelector("#categories");
const quCategories = categories.querySelectorAll(".item").length;
console.log(`Number of categories: ${quCategories}`);
const arrayCategories = categories.querySelectorAll(".item");
arrayCategories.forEach((element) => {
  console.log(`Category: ${element.querySelector("h2").textContent}`);
  console.log(`Elements: ${element.querySelectorAll("ul > li").length}`);
});
