// Create a Javascript application (A Javascript-driven web page.)
// Just set up your basic HTML and a script tag that will run your script on page load.)
// That allows the user to match people in need with volunteers during a disaster relief effort.

alert("Hello to Victims and Volunteers!");

//Victims and Volunteers Array
var victims = [];
var volunteers = [];

function victimsAndVolunteers() {

    // Victim Function
    function needsHelp() {
        var question = confirm("Do you have any victims you would like to add?");
        while (question) {
            var victimsInfo = {};
            // For each disaster victim that will be added, prompt the user to enter their name, phone number, and street.
            victimsInfo.name = prompt("What is the victim's name? ");
            victimsInfo.phoneNumber = prompt("What is the victim's phone number? ");
            victimsInfo.street = prompt("What is the victim's street? ");
            victims.push(victimsInfo);
            question = confirm("Do you have another victim to add? ");
        }
        return victims;
    }

    //Volunteer Function
    function goingToHelp() {
        var question = confirm("Do you have any volunteer's you would like to add? ");
        while (question) {
            var volunteersInfo = {};
            // For each disaster volunteer that will be added, prompt the user to enter their name, phone number, and street.
            volunteersInfo.name = prompt("What is the volunteer's name? ");
            volunteersInfo.phoneNumber = prompt("What is the volunteer's phone number? ");
            volunteersInfo.street = prompt("What is the volunteer's street? ");
            volunteers.push(volunteersInfo);
            question = confirm("Do you have another volunteer to add? ");
        }
        return volunteers;
    }
    console.log(needsHelp());
    console.log(goingToHelp());

    // At the end, print out, in a single alert, the number of persons in need, the number of volunteers
    alert("There are " + victims.length + " persons in need and " + volunteers.length + " number of volunteers! ");


    //List of all persons in need and all volunteers.
    //List the victims in need
    var vicHeader = document.createElement('h1');
    vicHeader.innerHTML = "These are the victims!";
    document.body.appendChild(vicHeader);
    for (var i = 0; i < victims.length; i++) {
        var el = document.createElement('p');
        el.innerHTML = victims[i].name + ' ';
        document.body.appendChild(el);
    }

    //List the volunteers that around
    var volHeader = document.createElement('h1');
    volHeader.innerHTML = "These are the volunteers!";
    document.body.appendChild(volHeader);
    for (var j = 0; j < volunteers.length; j++) {
        var elVol = document.createElement('p');
        elVol.innerHTML = volunteers[j].name + ' ';
        document.body.appendChild(elVol);
    }
}

victimsAndVolunteers();
