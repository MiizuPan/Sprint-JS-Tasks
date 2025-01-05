function convertToCelsius(temp){
	const celcius = ((temp - 32) * 5/9)
	return Math.floor(celcius)
}

function isHot(){
			console.log("It's too hot");
			console.log("Pack your water bottle and stay hydrated");
			console.log("Don't forget your sunscreen");
}

function isCold(){
		console.log("It's cold outside");
		console.log("Pack a jacket");
		console.log("Treat  yourself to a warm drink!");
}


function weatherToday(temp, unit){
	let tempInC;

	if(unit == "F"){
		tempInC = convertToCelsius(temp);
		console.log("Conversion Successful, the temperature in celcius is now " + tempInC)

	}else if (unit == "C"){
		tempInC = temp;
	}else {
		console.log("Please enter a valid unit!")
		return;
	}

	if (tempInC >= 0 && tempInC <= 20){
			isCold();
		} else if (tempInC >= 35 && tempInC <= 50){
			isHot();
		}else{
		console.log("Out of order! Open the window instead..")
	}
}


weatherToday(105,"F");