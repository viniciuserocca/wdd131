// Get current year
const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `<span class="currentyear">${today.getFullYear()} </span>`;

// Get last modification date
const lastModified = document.querySelector("#lastModified");
const latestDate = new Date(document.lastModified);
lastModified.innerHTML = `<p class="lastModified">Last Modified: ${latestDate} </p>`;
