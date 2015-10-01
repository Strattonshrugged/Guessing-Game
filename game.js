
var answersRight = 0;
var answer1 = document.getElementById('first');
var answer2 = document.getElementById('second');
var answer3 = document.getElementById('third');
var ending = document.getElementById('ending');


function question1() {
	var answer1 = prompt("Do I like chocolate?");
		alert("You said: " + answer1);
		console.log('answer1 exact input: ' + answer1);
		console.log('answer1 Upper Case: ' + answer1.toUpperCase());

	if ((answer1.toUpperCase() === 'YES') || (answer1.toUpperCase() === 'Y'))	{
		first.innerHTML = "Congratulations, that's correct!";
		answersRight++;
	}	else	{
		first.innerHTML = "Sorry, either you weren't clear or you have never seen me eat chocolate.";
	}
}

function question2() {
	var answer2 = prompt("Do I like dogs?");
		alert("You said: " + answer2);
			console.log('answer2 exact input: ' + answer2);
			console.log('answer2 Upper Case: ' + answer2.toUpperCase());

	if ((answer2.toUpperCase() === 'YES') || (answer2.toUpperCase() === 'Y'))	{
		second.innerHTML = "Right! Dogs are awesome! And cats are ... tolerable.";
		answersRight++;
	}	else	{
		second.innerHTML = "Are you kidding? I love dogs!";
	}	
}

function question3() {
	var answer3 = prompt("Do I enjoy biking?");
		alert("You said: " + answer3);
			console.log('answer3 exact input: ' + answer3);
			console.log('answer3 Upper Case: ' + answer3.toUpperCase());

	if ((answer3.toUpperCase() === 'NO') || (answer3.toUpperCase() === 'N'))	{
		third.innerHTML = "Correct! The last bike I rode was stationary and I still crashed it!";
		answersRight++;
	}	else	{
		third.innerHTML = "Sorry, I hate biking.";
	}	
}

function summary(answersRight) {
	ending.innerHTML = "You scored " + answersRight + " out of 3. Thank you for playing!";
}

question1();
question2();
question3();
summary(answersRight);

