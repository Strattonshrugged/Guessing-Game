var answersRight = 0;
var answer1;
var answer2;
var answer3;

var answer1 = prompt("Do I like chocolate?");
alert("You said: " + answer1);
console.log('answer1 exact input: ' + answer1);
console.log('answer1 Upper Case: ' + answer1.toUpperCase());


if (answer1.toUpperCase() === 'YES')	{
	alert("Congratulations, that's correct!");
	answersRight++;
}	else	{
	alert("Sorry, either you weren't clear or you have never seen me eat chocolate.");
}


document.write(answersRight);
// so I can check to see if that variable is changing correctly


/*	class demo
if (question1.toUpperCase === 'YES')	{
	alert('Lucky you');
}	else	{
	alert('Sucks to be you');
}
*/




// Just cutting down to one question right now
/*
var question2 = prompt('Do I like dogs?');
console.log('Question 2 response: ' + question2);
alert('Your answer to question 2 was ' + question2);


var question3 = prompt('Do I like biking?');
console.log('Question 3 response: ' + question3);
alert('Your answer to question 3 was ' + question3);

alert('So to summarize I like chocolate and dogs but hate biking');
*/



