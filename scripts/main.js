let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/mars-car.jpg') {
		myImage.setAttribute('src', 'images/mars-car2.jpg');
	} else {
		myImage.setAttribute('src', 'images/mars-car.jpg')
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('请输入你的名字。');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Welcome, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome back，' + storedName;
}

myButton.onclick = function() {
   setUserName();
}