//- Create a button that, when clicked, calls a function called `launchRocket`. You will need no other HTML.
//`launchRocket` should create a div at the bottom-center of the page, representing a rocket. 
//Immediately after being created, the rocket should 'fly' upwards, and it should appear to be affected by gravity. 
//You can dynamically affect the position of the rocket with javascript, e.g. 

function launchRocket() {
	//create a div that represents a rocket
	var rocket = document.createElement('div');
	rocket.style.left = Math.random(0, 15);
	rocket.style.bottom = Math.random(0, 9);
	document.body.appendChild(rocket);
	
	console.log(rocket);
}

launchRocket();

