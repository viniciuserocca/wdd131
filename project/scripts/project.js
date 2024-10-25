function getCurrentDate() {
	const currentyear = document.querySelector("#currentyear");
	const today = new Date();
	currentyear.innerHTML = `<span class="currentyear">${today.getFullYear()} </span>`;
}

getCurrentDate();

const menu = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menu.addEventListener('click', () => {
	navigation.classList.toggle('open');
	menu.classList.toggle('open');
});


const reasons = [
    {
      id: "hiring",
      name: "Hiring",
    },
	{
		id: "contract",
		name: "Contract",
	},
	{
		id: "project",
		name: "Project",
	},
	{
		id: "configuration",
		name: "Configuration",
	},
	{
		id: "question",
		name: "Question",
	},
	{
		id: "others",
		name: "Others",
	}
  ];

if(window.location.pathname.indexOf('contact.html') != -1){
	
	const selectReason = document.getElementById("selectReason");

	function populateOptions() {
		reasons.forEach(reason => {
			const option = document.createElement("option")
			option.value = reason.id;
			option.textContent = reason.name;
			selectReason.appendChild(option);
		});
	} 
	populateOptions();
}

if(window.location.pathname.indexOf('redirect.html') != -1){

	const counter = document.querySelector('#counter');
	let count = Number(window.localStorage.getItem('count-ls')) || 0;
	counter.textContent = count + 1;
	count++;
	localStorage.setItem('count-ls', count);

	function countdown() {
		let countdownElement = document.getElementById('countdown');
		let countdownValue = 10; 

		const countdownInterval = setInterval(() => {
		countdownValue--;
		countdownElement.textContent = countdownValue;

		if (countdownValue <= 0) {
				clearInterval(countdownInterval);
				window.location.href = 'project.html';
			}
		}, 1000);
	}
	countdown();
}