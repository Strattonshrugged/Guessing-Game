
var answersRight = 0;
var answer1 = document.getElementById('first');
var answer2 = document.getElementById('second');
var answer3 = document.getElementById('third');
var ending = document.getElementById('ending');

var question = ["Do I like chocolate?", "Do I like dogs?", "Do I enjoy biking?"];
var answer = ['YES', 'Y', 'NO', 'N'];

var imageOne = document.getElementById('chocolate');
var imageTwo = document.getElementById('dog');
var imageThree = document.getElementById('bike');

function question1() {
	var answer1 = prompt(question[0]);
		//alert("You said: " + answer1);
		console.log('answer1 exact input: ' + answer1);
		console.log('answer1 Upper Case: ' + answer1.toUpperCase());

	if ((answer1.toUpperCase() === answer[0]) || (answer1.toUpperCase() === answer[1]))	{
		first.innerHTML = "Congratulations, that's correct!";
		imageOne.className = 'correct';
		answersRight++;
	}	else	{
		first.innerHTML = "Sorry, either you weren't clear or you have never seen me eat chocolate.";
	}
}

function question2() {
	var answer2 = prompt(question[1]);
		//alert("You said: " + answer2);
			console.log('answer2 exact input: ' + answer2);
			console.log('answer2 Upper Case: ' + answer2.toUpperCase());

	if ((answer2.toUpperCase() === answer[0]) || (answer2.toUpperCase() === answer[1]))	{
		second.innerHTML = "Right! Dogs are awesome! And cats are ... tolerable.";
		imageTwo.className = 'correct';
		answersRight++;
	}	else	{
		second.innerHTML = "Are you kidding? I love dogs!";
	}
}

function question3() {
	var answer3 = prompt(question[2]);
		//alert("You said: " + answer3);
			console.log('answer3 exact input: ' + answer3);
			console.log('answer3 Upper Case: ' + answer3.toUpperCase());

	if ((answer3.toUpperCase() === answer[2]) || (answer3.toUpperCase() === answer[3]))	{
		third.innerHTML = "Correct! The last bike I rode was stationary and I still crashed it!";
		imageThree.className = 'correct';
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

