var generateBtn = document.querySelector("#generate");


var passwordCriteria = {
	length: "",
	lowercase: "",
	uppercase: "",
	numeric: "",
	specialCharacters: ""
};


var characterTypes = function() {

	passwordCriteria.lowercase = window.prompt("Do you want to include lowercase characters? Answer yes or no.");
	passwordCriteria.lowercase = passwordCriteria.lowercase.toLowerCase();
	
    if (passwordCriteria.lowercase === "yes") {
		window.alert("You have chosen to include lowercase characters.");
		passwordCriteria.lowercase = true;
	}

	
    else if (passwordCriteria.lowercase === "no") {
		window.alert("You have chosen not to include lowercase characters.");
		passwordCriteria.lowercase = false;
	}


	passwordCriteria.uppercase = window.prompt("Do you want to include uppercase characters? Answer yes or no.");
	passwordCriteria.uppercase = passwordCriteria.uppercase.toLowerCase();
	
    if (passwordCriteria.uppercase === "yes") {
		window.alert("You have chosen to include uppercase characters.");
		passwordCriteria.uppercase = true;
	}
	
    else if (passwordCriteria.uppercase === "no") {
		window.alert("You have chosen not to include uppercase characters.");
		passwordCriteria.uppercase = false;
	}

	passwordCriteria.numeric = window.prompt("Do you want to include numeric characters? Answer yes or no.");
	passwordCriteria.numeric = passwordCriteria.numeric.toLowerCase();

	if (passwordCriteria.numeric === "yes") {
		window.alert("You have chosen to include numeric characters.");
		passwordCriteria.numeric = true;
	}

	else if (passwordCriteria.numeric === "no") {
		window.alert("You have chosen not to include numeric characters.");
		passwordCriteria.numeric = false;
	}

	passwordCriteria.specialCharacters = window.prompt("Do you want to include special characters? Answer yes or no.");
	passwordCriteria.specialCharacters = passwordCriteria.specialCharacters.toLowerCase();

	if (passwordCriteria.specialCharacters === "yes") {
		window.alert("You have chosen to include special characters.");
		passwordCriteria.specialCharacters = true;
	}

	else if (passwordCriteria.specialCharacters === "no") {
		window.alert("You have chosen not to include special characters.");
		passwordCriteria.specialCharacters = false;
	}

	if (passwordCriteria.lowercase === false && 
		passwordCriteria.uppercase === false && 
		passwordCriteria.numeric === false && 
		passwordCriteria.specialCharacters === false) {
		window.alert("You need to pick at least one character type.");
		characterTypes();
	}
};

var generatePassword = function() {

	passwordCriteria.length = window.prompt("Choose the length of the password (at least 8 characters and no more than 128).");
	
    
	passwordCriteria.length = parseInt(passwordCriteria.length);
	
    
	if (passwordCriteria.length < 8 || passwordCriteria.length > 128) {
		window.alert("You did not enter a valid length. Please try again.");
		generatePassword();
	}

	else {
		window.alert("You have entered a length of " + passwordCriteria.length + ".");
	}

	window.alert("What character types do you want to use? Choose at least one.");

	characterTypes();

	window.alert("Generating password.");

	function makePassword() {
		var characters = "";
		if (passwordCriteria.lowercase === true) {
			characters = "abcdefghijklmnopqrstuvwxyz";
		}

		if (passwordCriteria.uppercase === true) {
			characters = characters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		}

		if (passwordCriteria.numeric === true) {
			characters = characters + "0123456789";
		}

		if (passwordCriteria.specialCharacters === true) {
			characters = characters + "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
		}

		var password = "";
		var length = passwordCriteria.length;
		for (var i = 0, n = characters.length; i < length; i++) {
			password += characters.charAt(Math.floor(Math.random() * n));
		}
        window.alert("Your New Password is " + password)
		return password
		
	}
	
	makePassword();
};


function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
};


generateBtn.addEventListener("click", writePassword);