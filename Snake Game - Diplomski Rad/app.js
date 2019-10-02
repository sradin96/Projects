var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var grid = 16;
var randomQuestion = 0;
var score = 0;
var gameScore; 
var scoreGameOver;
var displaySnake;
var displayMenu;
var displayGameOver;
var displayQuestion;
var displayCorrectQuestion;
var displayWrongQuestion;
var newGameButton;
var newGameButtonGameOver;
var collision;
var animation;

var snake = {
x: 160,
y: 160,
dx: grid,
dy: 0,
cells: [],
maxCells: 3
};
var count = 0;
var apple = {
x: 320,
y: 320
};

function getRandomInt(min, max) {
 	return Math.floor(Math.random() * (max - min)) + min;
}

var display = function(displayOption){
	switch(displayOption){                
		case 0: 
				displaySnake.style.display = "block";
				displayMenu.style.display = "none";
				displayGameOver.style.display = "none";
				displayQuestion.style.display = "none";
				displayCorrectQuestion.style.display = "none";
				displayWrongQuestion.style.display = "none";
				break;

		case 1: 
				displaySnake.style.display = "none";
				displayMenu.style.display = "none";
				displayGameOver.style.display = "block";
				displayQuestion.style.display = "none";
				displayCorrectQuestion.style.display = "none";
				displayWrongQuestion.style.display = "none";
				break;

		case 2: 
				displaySnake.style.display = "none";
				displayMenu.style.display = "block";
				displayGameOver.style.display = "none";
				displayQuestion.style.display = "none";
				displayCorrectQuestion.style.display = "none";
				displayWrongQuestion.style.display = "none";
				break;

		case 3:
				displaySnake.style.display = "none";
				displayMenu.style.display = "none";
				displayGameOver.style.display = "none";
				displayQuestion.style.display = "block";
				displayCorrectQuestion.style.display = "none";
				displayWrongQuestion.style.display = "none";
				break;

		case 4:
				displaySnake.style.display = "none";
				displayMenu.style.display = "none";
				displayGameOver.style.display = "none";
				displayQuestion.style.display = "none";
				displayCorrectQuestion.style.display = "block";
				displayWrongQuestion.style.display = "none";
				break;

		case 5:
				displaySnake.style.display = "none";
				displayMenu.style.display = "none";
				displayGameOver.style.display = "none";
				displayQuestion.style.display = "none";
				displayCorrectQuestion.style.display = "none";
				displayWrongQuestion.style.display = "block";
				break;
	}
}

var loop = function() {
	animation = window.requestAnimationFrame(loop);
	
if (++count < 3) {
	return;	 	
}

count = 0;
context.clearRect(0, 0,canvas.width,canvas.height);

snake.x += snake.dx;
snake.y += snake.dy;

if (snake.x < 0) {
 	snake.x = canvas.width - grid;
}

else if (snake.x >= canvas.width) {
   snake.x = 0;
}

if (snake.y < 0) {
   snake.y = canvas.height - grid;
}

else if (snake.y >= canvas.height) {
   snake.y = 0;
}

snake.cells.unshift({x: snake.x, y: snake.y});

if (snake.cells.length > snake.maxCells) {

 	 snake.cells.pop();
}

context.fillStyle = 'red';
context.fillRect(apple.x, apple.y, grid-1, grid-1);

context.fillStyle = 'green';

snake.cells.forEach(function(cell, index) {

context.fillRect(cell.x, cell.y, grid-1, grid-1);  
   
if (cell.x === apple.x && cell.y === apple.y) {			
	display(3);
}
   for (var i = index + 1; i < snake.cells.length; i++) {

     if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
		collision = true;
		display(1);
	 }
   }
 }); 
}

document.addEventListener('keydown', function(e) {
	if (e.which === 37 && snake.dx === 0) {
   		snake.dx = -grid;
   		snake.dy = 0;
	}
 	else if (e.which === 38 && snake.dy === 0) {

   		snake.dy = -grid;
   		snake.dx = 0;
	}
 	else if (e.which === 39 && snake.dx === 0) {
   		snake.dx = grid;
   		snake.dy = 0;
	}
 	else if (e.which === 40 && snake.dy === 0) {
   		snake.dy = grid;
   		snake.dx = 0;
	}
});

function changeScore(scoreValue){
	gameScore.innerHTML = String(scoreValue);
}

function changeScoreGameOver(scoreValue){
	scoreGameOver.innerHTML = String(scoreValue);
}

var newGame = function(){	
	if (animation) {
		window.cancelAnimationFrame(animation)
	}
	score = 0;
	display(0);	
	genQuestion();
	changeScore(0);
	changeScoreGameOver(0);
	snake.x = 160;
	snake.y = 160;
	snake.cells = [];
	snake.maxCells = 3;
	snake.dx = grid;
	snake.dy = 0;	
	apple.x = getRandomInt(0, 25) * grid;
	apple.y = getRandomInt(0, 25) * grid;
	loop();
}

var continueGame = function(){
	display(0);
	genQuestion();
	inputAnswer.value = null;	
}

var correctQuestion = function(){	
	display(4);
	apple.x = getRandomInt(0, 25) * grid;
	apple.y = getRandomInt(0, 25) * grid;
}

var wrongQuestion = function(){
	display(5);	
	apple.x = getRandomInt(0, 25) * grid;
	apple.y = getRandomInt(0, 25) * grid;	
	document.getElementById("questionsAS").innerHTML = answers[randomQuestion];	
}

function genQuestion(){
	var randomQ = Math.floor(Math.random() * questions.length);
	randomQuestion = randomQ;
	document.getElementById("questionsA").innerHTML = questions[randomQ];
	document.getElementById("questionsAS").innerHTML = answers[randomQ];
}
	var questions = ["5 * 3", "15 * 2", "2 * 8", "30 / 3", "100 / 25",
					 "18 * 9", "35 - 18", "22 - 19", "11 * 11", "89 + 64"];
	var answers = ["15", "30", "16", "10", "4", "162", "17", "3", "121", "153"];

function submitAnswer(){
	var i = inputAnswer.value;
	var indexQ = randomQuestion;
	if(i == answers[indexQ]){
		correctQuestion();		
		snake.maxCells++;
		score += 1;
		changeScore(score);
		changeScoreGameOver(score);			
		questions.splice(indexQ, 1);
		answers.splice(indexQ, 1);
	}else{
		wrongQuestion();
		questions.splice(indexQ, 1);
		answers.splice(indexQ, 1);
	}
}


displaySnake = document.getElementById("canvas");
displayGameOver = document.getElementById("gameover");
displayMenu = document.getElementById("menu");
displayQuestion = document.getElementById("question");
displayCorrectQuestion = document.getElementById("correctquestion");
displayWrongQuestion = document.getElementById("wrongquestion");

newGameButton = document.getElementById("newGameBtn");
newGameButton.onclick = function(){
		newGame();
};

newGameButtonGameOver = document.getElementById("newGameBtnGameOver");
newGameButtonGameOver.onclick = function(){
	newGame();
};

questionButton = document.getElementById("questionBtn");
questionButton.onclick = function(){
	submitAnswer();
}

correctQuestionButton = document.getElementById("correctQBtn");
correctQuestionButton.onclick = function(){
	continueGame();
}

wrongQuestionButton = document.getElementById("wrongQBtn");
wrongQuestionButton.onclick = function(){
	continueGame();
}

gameScore = document.getElementById("score1");
scoreGameOver = document.getElementById("score2");
display(2);