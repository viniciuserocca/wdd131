// Get current year
const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `<span class="currentyear">${today.getFullYear()} </span>`;

// Get last modification date
const lastModified = document.querySelector("#lastModified");
const latestDate = new Date(document.lastModified);
lastModified.innerHTML = `<p class="lastModified">Last Modified: ${latestDate.getMonth() + 1}/${latestDate.getDate()}/${latestDate.getFullYear()} ${latestDate.getHours()}:${latestDate.getMinutes()}:${latestDate.getSeconds()}</p>`;

// Hamburger Menu

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// Function to remove the active class
function removeActive() {
	home.classList.remove("active");
	old.classList.remove("active");
	varNew.classList.remove("active");
	large.classList.remove("active");
	small.classList.remove("active");
  }

// Applying Active and H2 text

const home = document.querySelector('#home');
const old = document.querySelector('#old');
const varNew = document.querySelector('#new');
const large = document.querySelector('#large');
const small = document.querySelector('#small');
const h2 = document.querySelector("#h2");

home.addEventListener('click', () => {
	removeActive();
	home.classList.add('active');
	h2.innerHTML = "Home";
});
old.addEventListener('click', () => {
	removeActive();
	old.classList.add('active');
	h2.innerHTML = "Old";
});
varNew.addEventListener('click', () => {
	removeActive();
	varNew.classList.add('active');
	h2.innerHTML = "New";
});
large.addEventListener('click', () => {
	removeActive();
	large.classList.add('active');
	h2.innerHTML = "Large";
});
small.addEventListener('click', () => {
	removeActive();
	small.classList.add('active');
	h2.innerHTML = "Small";
});