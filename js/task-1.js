const categories = document.querySelectorAll("ul#categories li.item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const headerText = category.querySelector("h2").textContent;
  console.log("Category:", headerText);

  const elements = category.querySelectorAll("ul li");
  console.log("Elements:", elements.length);
});
