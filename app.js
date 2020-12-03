const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());

const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");

const Header = document.getElementById("header");
const Skills = document.getElementById("skills");
const About = document.getElementById("about");
const Products = document.getElementById("products");
const Services = document.getElementById("services");
const Contact = document.getElementById("contact");
const Footer = document.getElementById("footer");

navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
Header.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
Skills.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
About.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
Products.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
Services.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
Contact.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
Footer.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
