var answersRight = 0;
var answer1;
var answer2;
var answer3;

var answer1 = prompt("Do I like chocolate?");
	alert("You said: " + answer1);
		console.log('answer1 exact input: ' + answer1);
		console.log('answer1 Upper Case: ' + answer1.toUpperCase());

if (answer1.toUpperCase() === 'YES' || 'Y')	{
	alert("Congratulations, that's correct!");
	answersRight++;
}	else	{
	alert("Sorry, either you weren't clear or you have never seen me eat chocolate.");
}

var answer2 = prompt("Do I like dogs?");
	alert("You said: " + answer2);
		console.log('answer2 exact input: ' + answer2);
		console.log('answer2 Upper Case: ' + answer2.toUpperCase());

if (answer2.toUpperCase() === 'YES' || 'Y')	{
	alert("Right! Dogs are awesome! And cats are ... tolerable.");
	answersRight++;
}	else	{
	alert("Are you kidding? I love dogs!");
}

var answer3 = prompt("Do I enjoy biking?");
	alert("You said: " + answer3);
		console.log('answer3 exact input: ' + answer3);
		console.log('answer3 Upper Case: ' + answer3.toUpperCase());

if (answer3.toUpperCase() === 'NO' || 'N')	{
	alert("No! The last bike I rode was stationary and I still crashed it!");
	answersRight++;
}	else	{
	alert("Very good, why carry my body weight on my scrotum when I can enjoy a quick stroll.");
}

document.write(answersRight);

