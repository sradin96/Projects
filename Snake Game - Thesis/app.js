var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var grid = 16;
var randomQuestion = 0;
var randomQuestionA = 0;
var randomQuestionB = 0;
var randomQuestionC = 0;
var randomQuestionD = 0;
var randomQuestionE = 0;
var randomQuestionF = 0;
var sign;
var result1 = null;
var result2 = null; 
var result3 = null;  
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
	if(score < 10){
		randomLevelOne();
	}else if(score > 10 && score < 20){
		randomLevelTwo();
	}else if(score > 20){
		randomLevelThree();
	}
	score = 0;
	operationSign();
	display(0);	
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
	if(score < 10){
		randomLevelOne();
	}else if(score >= 10 && score < 20){
		randomLevelTwo();
	}else if(score >= 20){
		randomLevelThree();
	}
	operationSign();
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
	if(score < 10){
		document.getElementById("questionsAS").innerHTML = result1;
	}else if(score >= 10 && score < 20){
		document.getElementById("questionsAS").innerHTML = result2;
	}else if(score >= 20){
		document.getElementById("questionsAS").innerHTML = result3;	
	}
		
}

function operationSign(){
	var operation = ['+', '-', '*', '/'];
	//var operation = ['/'];
	//var operation = ['*'];
	var randomOperation = operation[Math.floor(Math.random() * operation.length)];
	sign = randomOperation;
	document.getElementById("operation").innerHTML = randomOperation;
}

function randomLevelOne(){
	var randomA = Math.floor(Math.random() * 10) + 1;
	var randomB = Math.floor(Math.random() * 10) + 1;

	var resDivide;
	var divide = randomA % randomB === 0;
	var belongs;
	var undivide = ['1', '2', '3', '5', '7'];
	belongs = undivide.includes(randomA);

	while(belongs==true){
		randomA = Math.floor(Math.random() * 10) + 1;
		belongs = undivide.includes(randomA);

		if(belongs==false){
			break;
		}
	}
	while(randomA % randomB != 0){
		divide = false;
		randomB = Math.floor(Math.random() * 10) + 1;
		if(randomA % randomB == 0){
			divide = true;
			break;
		}
	}
	resDivide = randomA / randomB;

	document.getElementById("questionsA").innerHTML = randomA;
	document.getElementById("questionsB").innerHTML = randomB;
	randomQuestionA = randomA;
	randomQuestionB = randomB;
}

function newGameLevelOne(){
	newGame();
	randomLevelOne();
	changeScore(score);
	changeScoreGameOver(score);
}

function randomLevelTwo(){
	var randomC = Math.floor(Math.random() * 20) + 1;
	var randomD = Math.floor(Math.random() * 20) + 1;
	var resDivide2;
	var divide2 = randomC % randomD === 0;
	var belongs;
	var undivide = ['1', '2', '3', '5', '7', '11', '13', '17', '19'];
	belongs = undivide.includes(randomC);

	while(belongs==true){
		randomC = Math.floor(Math.random() * 20) + 1;
		belongs = undivide.includes(randomC);

		if(belongs==false){
			break;
		}
	}
	while(randomC % randomD != 0){
		divide2 = false;
		randomD = Math.floor(Math.random() * 20) + 1;
		if(randomC % randomD == 0){
			divide2 = true;
			break;
		}
	}
	resDivide2 = randomC / randomD;
	if(sign == '*' && randomC > 10){
		randomD = randomC <= 10 ? Math.floor(Math.random() * 20) + 1 : Math.floor(Math.random() * 10) + 1;
	}
	document.getElementById("questionsA").innerHTML = randomC;
	document.getElementById("questionsB").innerHTML = randomD;
	randomQuestionC = randomC;
	randomQuestionD = randomD;
}

function newGameLevelTwo(){
	newGame();
	randomLevelTwo();
	score += 10;
	snake.maxCells += 10;
	changeScore(score); 
	changeScoreGameOver(score);	
}

function randomLevelThree(){
	var randomE = Math.floor(Math.random() * 100) + 1;
	var randomF = Math.floor(Math.random() * 100) + 1;
	var resDivide3;
	var divide3 = randomE % randomF === 0;
	var belongs;
	var undivide = ['1', '2', '3', '5', '7', '11', '13', '17', '19', '23', '29', '31', '37', '41', '43', '47', '49', '53', '59', '61', '67', '71', '73', '77', '79', '83', '89', '97'];
	belongs = undivide.includes(randomE);

	while(belongs==true){
		randomE = Math.floor(Math.random() * 100) + 1;
		belongs = undivide.includes(randomE);

		if(belongs==false){
			break;
		}
	}
	while(randomE % randomF != 0){
		divide3 = false;
		randomF = Math.floor(Math.random() * 100) + 1;
		if(randomE % randomF == 0){
			divide3 = true;
			break;
		}
	}
	resDivide3 = randomE / randomF;

	if(sign == '*' && randomE > 10){
		randomF = randomE <= 10 ? Math.floor(Math.random() * 100) + 1 : Math.floor(Math.random() * 10) + 1;
	}	
	document.getElementById("questionsA").innerHTML = randomE;
	document.getElementById("questionsB").innerHTML = randomF;
	randomQuestionE = randomE;
	randomQuestionF = randomF;
}

function newGameLevelThree(){
	newGame();
	randomLevelThree();	
	score += 20;
	snake.maxCells += 20;
	changeScore(score);
	changeScoreGameOver(score);
}

function submitAnswers(){
	var i = inputAnswer.value;
	var outcome1;
	if(document.getElementById("questionsA").innerHTML == randomQuestionA && document.getElementById("questionsB").innerHTML == randomQuestionB){
		if(sign == '+'){
			outcome1 = randomQuestionA + randomQuestionB;
			result1 = outcome1;
		}else if(sign == '-'){
			outcome1 = randomQuestionA - randomQuestionB;
			result1 = outcome1;
		}else if(sign == '*'){
			outcome1 = randomQuestionA * randomQuestionB;
			result1 = outcome1;							
		}else if(sign == '/'){
				outcome1 = randomQuestionA / randomQuestionB;
				result1 = outcome1;	
							
		}if(i == result1){
			correctQuestion();
			snake.maxCells++;
			score += 1;
			changeScore(score);
			changeScoreGameOver(score);
		}else{
			wrongQuestion();
		}
	}
	var outcome2;
	if(document.getElementById("questionsA").innerHTML == randomQuestionC && document.getElementById("questionsB").innerHTML == randomQuestionD){
		if(sign == '+'){
			outcome2 = randomQuestionC + randomQuestionD;
			result2 = outcome2;
		}else if(sign == '-'){
			outcome2 = randomQuestionC - randomQuestionD;
			result2 = outcome2;
		}else if(sign == '*'){
			outcome2 = randomQuestionC * randomQuestionD;
			result2 = outcome2;							
		}else if(sign == '/'){
			outcome2 = randomQuestionC / randomQuestionD;
			result2 = outcome2;	
		}if(i == result2){
			correctQuestion();
			snake.maxCells++;
			score += 1;
			changeScore(score);
			changeScoreGameOver(score);
		}else{
			wrongQuestion();
		}
	}
	var outcome3;
	if(document.getElementById("questionsA").innerHTML == randomQuestionE && document.getElementById("questionsB").innerHTML == randomQuestionF){
		if(sign == '+'){
			outcome3 = randomQuestionE + randomQuestionF;
			result3 = outcome3;
		}else if(sign == '-'){
			outcome3 = randomQuestionE - randomQuestionF;
			result3 = outcome3;
		}else if(sign == '*'){
			outcome3 = randomQuestionE * randomQuestionF;
			result3 = outcome3;							
		}else if(sign == '/'){
			outcome3 = randomQuestionE / randomQuestionF;
			result3 = outcome3;	
		}if(i == result3){
			correctQuestion();
			snake.maxCells++;
			score += 1;
			changeScore(score);
			changeScoreGameOver(score);
		}else{
			wrongQuestion();
		}
	}	
}

var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
	}
	if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

var vm = this;

	vm.badForm=false;
	vm.adminEmail="stefanr@gmail.com"
	vm.adminPassword="123";
    vm.email1="";
    vm.password1="";
    vm.email="";
    vm.password="";
    vm.loggedin=false;
    vm.message="";

vm.adminLogin= function(){
	if(vm.password==vm.adminPassword && vm.email==vm.adminEmail){
		vm.message="Correct";
		vm.loggedin=true;
		$('#modalLoginForm').modal('hide');
	}else{
		vm.message="Incorrect";
		vm.loggedin = false;
	}
}

vm.login= function(){
	if(vm.password==vm.password1 && vm.email==vm.email1){
		vm.message="Correct";
		vm.loggedin=true;
		$('#modalLoginForm').modal('hide');
	}else{
		vm.message="Incorrect";
		vm.loggedin = false;
	}
}
vm.logout=function(){
  vm.loggedin=false;
}
vm.register=function(){
	vm.email1=vm.email;
	vm.password1=vm.password;
	$('#modalRegisterForm').modal('hide');
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
	submitAnswers();
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