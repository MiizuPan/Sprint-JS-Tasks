// numbers to add
let numberX;
let numberY;

// operator to choose
let operator;

// final result saved here
let result;


// test calculator here
numberX = 5
numberY = 8
operator = "&"



if(operator == "+"){
	result = numberX + numberY;
	console.log("The sum is: " + result);
} else if(operator == "-")
{
	result = numberX - numberY;
	console.log("The difference is: " + result);
} else if (operator == "*"){
	result = numberX * numberY;
	console.log("The product is " + result)
} else if (operator == "/"){
	result = numberX / numberY;
	console.log("The quotient is: " + result);

} else if(operator == "%"){
	result = numberX % numberY;
	console.log("The remainder is: " + result);

}else{
	console.log("I don't know what that is, I'm only a simple calculator and this is the best that I can do..")
}

