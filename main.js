const product1 = document.querySelector(".product1");
const product2 = document.querySelector(".product2");
const product3 = document.querySelector(".product3");
const product4 = document.querySelector(".product4");
const product5 = document.querySelector(".product5");

const description1 = document.querySelector(".description1");
const description2 = document.querySelector(".description2");
const description3 = document.querySelector(".description3");
const description4 = document.querySelector(".description4");
const description5 = document.querySelector(".description5");

product1.addEventListener("click", () => {
    description1.classList.remove("description1")
});