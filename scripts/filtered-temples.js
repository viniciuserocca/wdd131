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

// Navigation Button Actions

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
	createTempleCard(temples)
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
old.addEventListener('click', () => {
	removeActive();
	old.classList.add('active');
	h2.innerHTML = "Old";
	createTempleCard(temples.filter(temple => parseInt(temple.dedicated.slice(0, 4), 10) < 1900));
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
varNew.addEventListener('click', () => {
	removeActive();
	varNew.classList.add('active');
	h2.innerHTML = "New";
	createTempleCard(temples.filter(temple => parseInt(temple.dedicated.slice(0, 4), 10) > 2000));
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
large.addEventListener('click', () => {
	removeActive();
	large.classList.add('active');
	h2.innerHTML = "Large";
	createTempleCard(temples.filter(temple => temple.area > 90000));
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
small.addEventListener('click', () => {
	removeActive();
	small.classList.add('active');
	h2.innerHTML = "Small";
	createTempleCard(temples.filter(temple => temple.area < 10000));
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// Temples Array

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Campinas Brazil",
		location: "Campinas, Brazil",
		dedicated: "2002, May, 17",
		area: 48100,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/campinas-brazil/400x250/campinas-brazil-temple-morning-1029896-wallpaper.jpg"
	},
	{
		templeName: "Fukuoka Japan",
		location: "Fukuoka, Japan",
		dedicated: "2000, June, 11",
		area: 10700,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fukuoka-japan/400x250/fukuoka-japan-temple-lds-306863-wallpaper.jpg"
	},
	{
		templeName: "Lisbon Portugal",
		location: "Lisbon, Portugal",
		dedicated: "2019, September, 15",
		area: 23730,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lisbon-portugal/400x250/03-045a97e8471a9f581e927698521a1d184f4b3753.jpeg"
	},
];

createTempleCard(temples)

function createTempleCard(FilteredTemples){
	const templeContainer = document.getElementById('container');
	templeContainer.innerHTML = "";

	FilteredTemples.forEach(temple => {
		const card = document.createElement('div');
		card.classList.add('temple-card');

		const year = parseInt(temple.dedicated.slice(0, 4), 10);

		card.innerHTML = `
			<h3>${temple.templeName}</h3>
			<p><strong>Location:</strong>${temple.location}</p>
			<p><strong>Dedicated:</strong>${temple.dedicated}</p>
			<p><strong>Size:</strong>${temple.area} sq ft</p>
			<img src="${temple.imageUrl}" alt="${temple.templeName}" class="temple-image" loading="lazy" width="400" height="250">
		`;
		templeContainer.appendChild(card);
	});
}