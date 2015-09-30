var answersRight = 0;
var answer1;
var answer2;
var answer3;

var answer1 = prompt("Do I like chocolate?");
	alert("You said: " + answer1);
		console.log('answer1 exact input: ' + answer1);
		console.log('answer1 Upper Case: ' + answer1.toUpperCase());

if ((answer1.toUpperCase() === 'YES') || (answer1.toUpperCase() === 'Y'))	{
	alert("Congratulations, that's correct!");
	answersRight++;
}	else	{
	alert("Sorry, either you weren't clear or you have never seen me eat chocolate.");
}

var answer2 = prompt("Do I like dogs?");
	alert("You said: " + answer2);
		console.log('answer2 exact input: ' + answer2);
		console.log('answer2 Upper Case: ' + answer2.toUpperCase());

if ((answer2.toUpperCase() === 'YES') || (answer2.toUpperCase() === 'Y'))	{
	alert("Right! Dogs are awesome! And cats are ... tolerable.");
	answersRight++;
}	else	{
	alert("Are you kidding? I love dogs!");
}

var answer3 = prompt("Do I enjoy biking?");
	alert("You said: " + answer3);
		console.log('answer3 exact input: ' + answer3);
		console.log('answer3 Upper Case: ' + answer3.toUpperCase());

if ((answer3.toUpperCase() === 'NO') || (answer3.toUpperCase() === 'N'))	{
	alert("Correct! The last bike I rode was stationary and I still crashed it!");
	answersRight++;
}	else	{
	alert("Sorry, I hate biking.");
}

alert("You scored " + answersRight + " out of 3. Thank you for playing!");

// part of troubleshooting before I knew to divide the "if" conditions
console.log('Correct Answers: ' + answersRight);
console.log('answer1 = ' + answer1);
console.log('answer2 = ' + answer2);
console.log('answer3 = ' + answer3);